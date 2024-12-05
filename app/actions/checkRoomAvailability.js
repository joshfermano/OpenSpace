'use server';

import { createSessionClient } from '@/config/appwrite';
import { cookies } from 'next/headers';
import { Query } from 'node-appwrite';
import { redirect } from 'next/navigation';
import { DateTime } from 'luxon';

// Convert a date string to a Luxon DateTime object in UTC
function toUTCDateTime(dateString) {
  return DateTime.fromISO(dateString, { zone: 'utc' });
}

// Check for overlapping date ranges
function dateRangesOverlap(checkInA, checkOutA, checkInB, checkOutB) {
  return (
    checkInA.toMillis() < checkOutB.toMillis() &&
    checkOutA.toMillis() > checkInB.toMillis()
  );
}

async function checkRoomAvailability(roomId, checkIn, checkOut) {
  const sessionCookie = cookies().get('appwrite-session');
  if (!sessionCookie) {
    redirect('/login');
  }

  try {
    // Validate input dates
    const checkInDateTime = toUTCDateTime(checkIn);
    const checkOutDateTime = toUTCDateTime(checkOut);

    if (!checkInDateTime.isValid || !checkOutDateTime.isValid) {
      return {
        error: 'Invalid date format',
      };
    }

    // Ensure check-out is after check-in
    if (checkOutDateTime <= checkInDateTime) {
      return {
        error: 'Check-out must be after check-in',
      };
    }

    const { databases } = await createSessionClient(sessionCookie.value);

    // Fetch all bookings for the room
    const { documents: bookings } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS,
      [Query.equal('room_id', roomId)]
    );

    // Check for overlaps
    for (const booking of bookings) {
      const bookingCheckIn = toUTCDateTime(booking.check_in);
      const bookingCheckOut = toUTCDateTime(booking.check_out);

      if (
        dateRangesOverlap(
          checkInDateTime,
          checkOutDateTime,
          bookingCheckIn,
          bookingCheckOut
        )
      ) {
        return false;
      }
    }

    return true;
  } catch (error) {
    console.error('Failed to check availability:', error);
    return {
      error: 'Failed to check availability',
    };
  }
}

export default checkRoomAvailability;
