'use client';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import Heading from '@/components/Heading';
import createRoom from '@/app/actions/createRoom';

const AddRoomPage = () => {
  const [state, formAction] = useFormState(createRoom, {});
  const router = useRouter();

  useEffect(() => {
    if (state.error) toast.error(state.error);
    if (state.success) {
      toast.success('Room created successfully!');
      router.push('/rooms/my');
    }
  }, [state, router]);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <Heading title="Add a Room" />
      <div className="bg-[#FFFDF6] border border-black/10 rounded-lg p-6 mt-4">
        <form action={formAction} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-black mb-2">
              Room Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-4 py-2.5 border border-black/10 rounded-lg
              bg-[#FFFDF6] shadow-sm hover:border-black/30 focus:border-black
              focus:ring-0 transition-all duration-300 text-sm"
              placeholder="Enter room name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-black mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="mt-1 block w-full px-4 py-2.5 border border-black/10 rounded-lg
              bg-[#FFFDF6] shadow-sm hover:border-black/30 focus:border-black
              focus:ring-0 transition-all duration-300 text-sm h-24 resize-none"
              placeholder="Enter room description"
              required
            />
          </div>

          <div>
            <label
              htmlFor="sqft"
              className="block text-sm font-medium text-black mb-2">
              Square Feet
            </label>
            <input
              type="number"
              id="sqft"
              name="sqft"
              className="mt-1 block w-full px-4 py-2.5 border border-black/10 rounded-lg
              bg-[#FFFDF6] shadow-sm hover:border-black/30 focus:border-black
              focus:ring-0 transition-all duration-300 text-sm"
              placeholder="Enter room size"
              required
            />
          </div>

          <div>
            <label
              htmlFor="capacity"
              className="block text-sm font-medium text-black mb-2">
              Capacity
            </label>
            <input
              type="number"
              id="capacity"
              name="capacity"
              className="mt-1 block w-full px-4 py-2.5 border border-black/10 rounded-lg
              bg-[#FFFDF6] shadow-sm hover:border-black/30 focus:border-black
              focus:ring-0 transition-all duration-300 text-sm"
              placeholder="Enter room capacity"
              required
            />
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-black mb-2">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="mt-1 block w-full px-4 py-2.5 border border-black/10 rounded-lg
              bg-[#FFFDF6] shadow-sm hover:border-black/30 focus:border-black
              focus:ring-0 transition-all duration-300 text-sm"
              placeholder="Enter room address"
              required
            />
          </div>

          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-black mb-2">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="mt-1 block w-full px-4 py-2.5 border border-black/10 rounded-lg
    bg-[#FFFDF6] shadow-sm hover:border-black/30 focus:border-black
    focus:ring-0 transition-all duration-300 text-sm"
              placeholder="Enter room location (e.g., 2nd Floor, Building A)"
              required
            />
          </div>

          <div>
            <label
              htmlFor="price_per_hour"
              className="block text-sm font-medium text-black mb-2">
              Price per Hour ($)
            </label>
            <input
              type="number"
              id="price_per_hour"
              name="price_per_hour"
              className="mt-1 block w-full px-4 py-2.5 border border-black/10 rounded-lg
              bg-[#FFFDF6] shadow-sm hover:border-black/30 focus:border-black
              focus:ring-0 transition-all duration-300 text-sm"
              placeholder="Enter hourly rate"
              required
            />
          </div>

          <div>
            <label
              htmlFor="availability"
              className="block text-sm font-medium text-black mb-2">
              Availability
            </label>
            <input
              type="text"
              id="availability"
              name="availability"
              className="mt-1 block w-full px-4 py-2.5 border border-black/10 rounded-lg
              bg-[#FFFDF6] shadow-sm hover:border-black/30 focus:border-black
              focus:ring-0 transition-all duration-300 text-sm"
              placeholder="e.g., Mon-Fri 9AM-5PM"
              required
            />
          </div>

          <div>
            <label
              htmlFor="amenities"
              className="block text-sm font-medium text-black mb-2">
              Amenities
            </label>
            <input
              type="text"
              id="amenities"
              name="amenities"
              className="mt-1 block w-full px-4 py-2.5 border border-black/10 rounded-lg
              bg-[#FFFDF6] shadow-sm hover:border-black/30 focus:border-black
              focus:ring-0 transition-all duration-300 text-sm"
              placeholder="projector, whiteboard, etc."
              required
            />
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-black mb-2">
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              className="mt-1 block w-full px-4 py-2.5 border border-black/10 rounded-lg
              bg-[#FFFDF6] shadow-sm hover:border-black/30 focus:border-black
              focus:ring-0 transition-all duration-300 text-sm file:mr-4 file:py-2 
              file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium
              file:bg-black file:text-[#FFFDF6] hover:file:bg-black/90"
              accept="image/*"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-[#FFFDF6] px-6 py-2.5 rounded-full text-sm 
            font-medium hover:bg-[#FFFDF6] hover:text-black hover:border hover:border-black
            transition-all duration-300">
            Create Room
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRoomPage;
