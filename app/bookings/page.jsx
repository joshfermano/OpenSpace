import Heading from '@/components/Heading';
import BookedRoomCard from '@/components/BookedRoomCard';
import getMyBookings from '../actions/getMyBookings';

const BookingsPage = async () => {
  const bookings = await getMyBookings();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-[#FFFDF6]">
      <Heading title="My Bookings" />
      {bookings.length === 0 ? (
        <div className="mt-8 text-center py-12 bg-[#FFFDF6] border border-black/10 rounded-lg">
          <p className="text-black/70 text-lg font-medium">
            You have no bookings yet
          </p>
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          {bookings.map((booking) => (
            <BookedRoomCard key={booking.$id} booking={booking} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookingsPage;
