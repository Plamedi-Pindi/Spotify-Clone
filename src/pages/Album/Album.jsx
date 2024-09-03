import A1 from "../../assets/imgs/Artists/A1.jpeg";
import {
  BsArrowLeft,
  BsPlusCircle,
  BsArrowDownCircle,
  BsThreeDotsVertical,
  BsPlayCircleFill,
  BsRepeat,
  BsRepeat1,
  BsShuffle
} from "react-icons/bs";

export default function AlbumPage() {
  return (
    <div className="relative">
      <div className="fixed w-full flex items-center h-8vh bg-transparent p-2">
        <BsArrowLeft className="text-3xl text-wite mr-10" />
        <h2 className="hidden text-sm font-medium">Album Title</h2>
      </div>
      <section className="bg-gradient-to-b from-pink-500/70 pt-4 h-50vh p-2">
        <img src={A1} alt="" className="w-1/2 mx-auto " />
        <h2 className="mt-5 text-xl font-bold">More Than This</h2>

        <div className="flex flex-row items-center mt-3">
          <img src={A1} alt="" className="w-6 h-6 rounded-full" />
          <p className="text-sm ml-3">Author Name</p>
        </div>
        <span className="text-sm text-neutral-400 font-light">
          Album . 2024
        </span>
        <div className="flex flex-row justify-between items-center mt-2 ">
          <div className="flex flex-row items-center">
            <BsPlusCircle  className="text-2xl text-neutral-400 mr-6"/>
            <BsArrowDownCircle className="text-2xl text-neutral-400 mr-6" />
            <BsThreeDotsVertical className="text-2xl text-neutral-400 mr-6" />
          </div>
          <div className="flex items-center">
            <BsShuffle className="text-2xl text-green-600 mr-4"/>
            <BsPlayCircleFill className="text-5xl text-green-600" />
          </div>
        </div>
      </section>
    </div>
  );
}
