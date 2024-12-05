import Link from 'next/link';
import { FaEye } from 'react-icons/fa';
import DeleteRoomButton from './DeleteRoomButton';

const MyRoomCard = ({ room }) => {
  return (
    <div className="bg-[#FFFDF6] border border-black/10 rounded-lg p-6 mt-4 flex flex-col sm:flex-row justify-between items-center hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col">
        <h4 className="text-xl font-medium text-black">{room.name}</h4>
      </div>

      <div className="flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-4 mt-4 sm:mt-0">
        <Link
          href={`/rooms/${room.$id}`}
          className="bg-black text-[#FFFDF6] px-6 py-2.5 rounded-full text-sm font-medium hover:bg-black/90 transition-colors text-center w-full sm:w-auto flex items-center justify-center">
          <FaEye className="mr-2" /> View
        </Link>

        <DeleteRoomButton roomId={room.$id} />
      </div>
    </div>
  );
};

export default MyRoomCard;
