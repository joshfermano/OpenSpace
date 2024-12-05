import Link from 'next/link';
import CancelBookingButton from './CancelBookingButton';

const BookedRoomCard = ({ booking }) => {
  const { room_id: room } = booking;

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    // Get Month
    const options = { month: 'short' };
    const month = date.toLocaleString('en-PH', options, { timezone: 'UTC' });

    // Get Day
    const day = date.getUTCDate();

    // Format Time in UTC 12-hour format
    const timeOptions = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      timezone: 'UTC',
    };

    const time = date.toLocaleString('en-PH', timeOptions);

    // Final Formatted String
    return `${month} ${day} at ${time}`;
  };

  return (
    <div className="bg-[#FFFBF5] border border-black/10 shadow-sm rounded-lg p-6 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:border-black/20 transition-all">
      <div>
        <h4 className="text-lg font-medium text-black/90">{room.name}</h4>
        <div className="space-y-1 mt-2">
          <p className="text-sm text-black/70">
            <span className="font-medium">Check In:</span>{' '}
            {formatDate(booking.check_in)}
          </p>
          <p className="text-sm text-black/70">
            <span className="font-medium">Check Out:</span>{' '}
            {formatDate(booking.check_out)}
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-3 mt-4 sm:mt-0">
        <Link
          href={`/rooms/${room.$id}`}
          className="bg-black text-[#FFFBF5] px-6 py-2.5 rounded-md mb-2 sm:mb-0 w-full sm:w-auto text-center text-sm font-medium transition-all hover:bg-[#FFFBF5] hover:text-black hover:border-black border border-transparent hover:border-current">
          View Room
        </Link>

        <CancelBookingButton bookingId={booking.$id} />
      </div>
    </div>
  );
};

export default BookedRoomCard;
