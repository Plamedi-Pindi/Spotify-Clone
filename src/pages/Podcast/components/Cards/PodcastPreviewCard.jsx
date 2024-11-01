// Icons
import { BsPlusCircle, BsThreeDotsVertical, BsPlayCircleFill } from "react-icons/bs";

export default function PodcastPreviewCard({ title, category, imgUrl }) {
  return (
    <div className="w-80 h-[27rem] bg-rose-900 block mx-auto rounded-xl p-4">
      {/*  */}
      <div className="flex justify-between ">
        <div>
          <h2 className="text-lg font-bold"> {title} </h2>
          <p className="text-neutral-400 text-sm">
            {" "}
            {`Episode . ${category}`}{" "}
          </p>
        </div>

        <BsPlusCircle className="text-4xl ml-4 mt-3" />
      </div>
      {/*  */}

      {/*  */}
      <div className="flex items-center justify-center mt-6">
        <img src={imgUrl} className="w-36 h-36 rounded-lg object-cover" />
      </div>
      {/*  */}

      {/*  */}
      <div className="mt-6">
        <div className="text-sm">
          <span className="font-bold inline pr-1">Oct 29, 25min .</span>

          <p className="inline text-neutral-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
            consequatur dolores, ipsum ratione nobis facilis repellat amet...
          </p>
        </div>
      </div>
      {/*  */}

      <div className="flex mt-4 items-center justify-end">
        <BsThreeDotsVertical className="text-2xl mr-4"/>
        <BsPlayCircleFill className="text-4xl text-neutral-400"/>
      </div>
    </div>
  );
}
