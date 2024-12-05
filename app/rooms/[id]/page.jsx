import Heading from '@/components/Heading';
import BookingForm from '@/components/BookingForm';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronLeft } from 'react-icons/fa';
import getSingleRoom from '@/app/actions/getSingleRoom';

const RoomPage = async ({ params }) => {
  const { id } = params;
  const room = await getSingleRoom(id);

  if (!room) {
    return <Heading title="Room Not Found" />;
  }

  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ROOMS;
  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;

  const imageUrl = `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${room.image}/view?project=${projectId}`;
  const imageSrc = room.image ? imageUrl : '/images/no-image.jpg';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-[#FFFDF6]">
      <Heading title={room.name} />

      <div className="bg-[#FFFDF6] border border-black/10 rounded-lg p-6 mt-4">
        <Link
          href="/"
          className="inline-flex items-center text-black/70 hover:text-black transition-colors mb-6">
          <FaChevronLeft className="mr-2" />
          Back to Rooms
        </Link>

        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <div className="lg:w-1/2">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src={imageSrc}
                alt={room.name}
                width={800}
                height={600}
                className="w-full h-[400px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:w-1/2">
            <p className="text-black/70 text-lg leading-relaxed mb-6">
              {room.description}
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-black font-medium w-32">Size:</span>
                <span className="text-black/70">{room.sqft} sq ft</span>
              </div>

              <div className="flex items-center">
                <span className="text-black font-medium w-32">
                  Availability:
                </span>
                <span className="text-black/70">{room.availability}</span>
              </div>

              <div className="flex items-center">
                <span className="text-black font-medium w-32">Price:</span>
                <span className="text-black/70">
                  ${room.price_per_hour}/hour
                </span>
              </div>

              <div className="flex items-center">
                <span className="text-black font-medium w-32">Address:</span>
                <span className="text-black/70">{room.address}</span>
              </div>
            </div>

            <div className="mt-8">
              <BookingForm room={room} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomPage;
