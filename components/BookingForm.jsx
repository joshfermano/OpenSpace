'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useFormState } from 'react-dom'; // Changed from useActionState
import { toast } from 'react-toastify';
import bookRoom from '@/app/actions/bookRoom';

const BookingForm = ({ room }) => {
  const [state, formAction] = useFormState(bookRoom, {});
  const router = useRouter();

  useEffect(() => {
    if (state.error) toast.error(state.error);
    if (state.success) {
      toast.success('Room booked successfully');
      router.push('/bookings');
    }
  }, [state, router]);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold text-black">Book this Room</h2>
      <form action={formAction} className="mt-4">
        <input type="hidden" name="room_id" value={room.$id} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="check_in_date"
              className="block text-sm font-medium text-black">
              Check-In Date
            </label>
            <input
              type="date"
              id="check_in_date"
              name="check_in_date"
              className="mt-1 block w-full px-4 py-2.5 border border-black/10 rounded-lg
              bg-[#FFFDF6] shadow-sm hover:border-black/30 focus:border-black
              focus:ring-0 transition-all duration-300 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="check_in_time"
              className="block text-sm font-medium text-black">
              Check-In Time
            </label>
            <input
              type="time"
              id="check_in_time"
              name="check_in_time"
              className="mt-1 block w-full px-4 py-2.5 border border-black/10 rounded-lg
              bg-[#FFFDF6] shadow-sm hover:border-black/30 focus:border-black
              focus:ring-0 transition-all duration-300 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="check_out_date"
              className="block text-sm font-medium text-black">
              Check-Out Date
            </label>
            <input
              type="date"
              id="check_out_date"
              name="check_out_date"
              className="mt-1 block w-full px-4 py-2.5 border border-black/10 rounded-lg
              bg-[#FFFDF6] shadow-sm hover:border-black/30 focus:border-black
              focus:ring-0 transition-all duration-300 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="check_out_time"
              className="block text-sm font-medium text-black">
              Check-Out Time
            </label>
            <input
              type="time"
              id="check_out_time"
              name="check_out_time"
              className="mt-1 block w-full px-4 py-2.5 border border-black/10 rounded-lg
              bg-[#FFFDF6] shadow-sm hover:border-black/30 focus:border-black
              focus:ring-0 transition-all duration-300 sm:text-sm"
              required
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2.5 bg-black text-[#FFFDF6] rounded-full
            text-sm font-medium hover:bg-[#FFFDF6] hover:text-black hover:border
            hover:border-black hover:scale-95 transition-all duration-300">
            Book Room
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
