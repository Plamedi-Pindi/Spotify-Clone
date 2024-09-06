import { BsSuitHeartFill, BsBookmarkFill } from "react-icons/bs";

export default function LikedSong({ children }) {
  return (
    <li className={`flex hover:bg-neutral-800 p-2 rounded-lg `}>
      <div className="flex bg-gradient-to-br from-indigo-700  via-indigo-500 via-40% to-indigo-200 w-12 h-12 items-center justify-center rounded ">
        <BsSuitHeartFill />
      </div>
      <div> {children} </div>
    </li>
  );
}

export function Episodes({ children }) {
  return (
    <li className={`flex hover:bg-neutral-800 p-2 rounded-lg `}>
      <div className="flex bg-emerald-800 w-12 h-12 items-center justify-center rounded">
        <BsBookmarkFill className="text-green-400 text-xl" />
      </div>
      <div> {children} </div>
    </li>
  );
}



