import Image from 'next/image';
import Link from 'next/link';

const RoomCard = ({ room }) => {
  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ROOMS;
  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;

  const imageUrl = `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${room.image}/view?project=${projectId}`;

  const imageSrc = room.image ? imageUrl : '/images/no-image.jpg';

  return (
    <div className="bg-[#FFFDF6] border border-black/10 rounded-lg p-6 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row sm:space-x-6">
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src={imageSrc}
            width={400}
            height={100}
            alt={room.name}
            className="w-full sm:w-40 sm:h-40 mb-4 sm:mb-0 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="space-y-2">
          <h4 className="text-xl font-medium text-black">{room.name}</h4>
          <p className="text-sm text-black/70">
            <span className="font-medium text-black">Address:</span>{' '}
            {room.address}
          </p>
          <p className="text-sm text-black/70">
            <span className="font-medium text-black">Availability:</span>{' '}
            {room.availability}
          </p>
          <p className="text-sm text-black/70">
            <span className="font-medium text-black">Price:</span> $
            {room.price_per_hour}/hour
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-2 mt-4 sm:mt-0">
        <Link
          href={`/rooms/${room.$id}`}
          className="bg-black text-[#FFFDF6] px-6 py-2.5 rounded-full text-sm font-medium hover:bg-black/90 transition-all text-center w-full sm:w-auto border hover:bg-white hover:border-black hover:text-black hover:scale-95 duration-300">
          View Room
        </Link>
      </div>
    </div>
  );
};

export default RoomCard;
