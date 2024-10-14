// Components
import MusicItemsDisplay from "../../../components/MusicalItemDisplay/MusicItemsDisplay";

// Icom
import { BsThreeDotsVertical } from "react-icons/bs";

function ArtistMusicContent() {
  return (
    <div className="w-full h-91p ">
      {/* Popular section */}
      <section>
        <h3 className="text-xl font-bold mb-5">Popular</h3>

        <ol >
          <li className="flex justify-between items-center mb-4">
            <div>1</div>

            <MusicItemsDisplay
              imgUrl={`https://i.imgur.com/PY630AM.jpg`}
              imgDimension={`w-14 h-14 mr-3 `}
              title={"Wonder"}
              adicionalTxt={`6,894,693`}
              display={`flex items-center basis-[80%]`}
            />

            <BsThreeDotsVertical className="text-xl text-neutral-400"/>
          </li>

          <li className="flex justify-between items-center mb-4">
            <div>2</div>

            <MusicItemsDisplay
              imgUrl={`https://i.imgur.com/76UlUVf.jpg`}
              imgDimension={`w-14 h-14 mr-3`}
              title={"Wonder"}
              adicionalTxt={`6,894,693`}
              display={`flex items-center basis-[80%]`}
              box={"mb-4"}
            />

             <BsThreeDotsVertical className="text-xl text-neutral-400" />
          </li>

          <li className="flex justify-between items-center mb-4">
            <div>3</div>

            <MusicItemsDisplay
              imgUrl={`https://i.imgur.com/9hs8YRc.jpg`}
              imgDimension={`w-14 h-14 mr-3`}
              title={"Wonder"}
              adicionalTxt={`6,894,693`}
              display={`flex items-center basis-[80%]`}
              box={"mb-4"}
            />

             <BsThreeDotsVertical className="text-xl text-neutral-400"/>
          </li>
        </ol>
      </section>
    </div>
  );
}

export default ArtistMusicContent;
