// Hooks
import { useState } from "react";
import { useParams } from "react-router-dom";
// Router
import { useNavigate } from "react-router-dom";

// Conmponts
import ArtistMerchContent from "./components/ArtistMerchContent";
import ArtistMusicContent from "./components/ArtistMusicContent";

// Icons
import {
  BsArrowLeft,
  BsPlusCircle,
  BsArrowDownCircle,
  BsThreeDotsVertical,
  BsPlayCircleFill,
  BsRepeat,
  BsRepeat1,
  BsShuffle,
  BsPauseCircleFill,
  BsCheckCircleFill,
} from "react-icons/bs";


export default function ArtistPage({ jumpinPlaylist }) {
  const [contentDisplay, setContentDispaly] = useState("Music"); // Set contet state to: Music, Merch
  const navigate = useNavigate(); // router Navigate hook

  let isMusic = contentDisplay === "Music";
  let isMerch = contentDisplay === "Merch";

  const { id } = useParams();
  const correntArtists = jumpinPlaylist.filter(
    (art) => art.id === parseInt(id)
  );

  // Event Handler to display music content
  const handleMusicClick = () => {
    setContentDispaly("Music");
  };

  // Event handler to display merch content
  const handleMerchClick = () => {
    setContentDispaly("Merch");
  };

  // Event handler to back the previus page
  const handleBackClick = () => {
    navigate(`/Spotify-Clone `);
  };

  return (
    <div className=" overflow-y-scroll scrollbar-hide scrollBehaviour h-screen relative">
      {correntArtists.map((artist) => (
        <div key={artist.id}>
          {/* button to back the previus page */}
          <div className="flex items-center bg-black/60 p-2 fixed w-full z-30">
            <button
              className="bg-black/40 rounded-full w-10 h-10 flex items-center justify-center mr-5"
              onClick={handleBackClick}
            >
              <BsArrowLeft className="text-2xl text-wite" />
            </button>
            <h2 className="text-lg font-medium">Artist Name</h2>
          </div>

          {/* Artist img */}
          <div
            className={` w-full h-36vh fixed -z-10 bg-cover bg-center bg-no-repeat left-0`}
          >
            <img src={artist.img} className="w-full h-full" />
          </div>

          {/* Artist name display section */}
          <section className="w-full h-36vh flex justify-center items-end bg-gradient-to-t from-black/80 ">
            <h2 className="text-4xl font-bold text-white mb-2">
              {" "}
              {artist.name}{" "}
            </h2>
          </section>

          {/* Section to control de media paly */}
          <section className=" w-100 bg-black ">
            <div className="bg-gradient-to-b from-yellow-800/30 from-10% to-balck to-80% z-20">
              {/* Monthly Listeners  number */}
              <p className="text-sm text-neutral-400 pt-4 ml-4 mr-4">
                {" "}
                626.6k monthly listeners{" "}
              </p>

              {/* Media control */}
              <div className="flex items-center justify-between p-3 pl-4 pr-4  ">
                <div className="w-10 h-12 flex justify-center items-center border-2 rounded-lg border-neutral-500">
                  <img src={artist.img} className="w-8 h-10 rounded-md" />
                </div>

                <button className=" border border-white rounded-md  p-2 pr-3 pl-3 text-sm">
                  {" "}
                  Following{" "}
                </button>

                <BsThreeDotsVertical className="text-2xl text-neutral-400" />
                <BsShuffle className="text-2xl text-green-600 -mr-3 ml-3" />
                <BsPlayCircleFill className="text-5xl text-green-600" />
              </div>
            </div>
          </section>

          {/*  */}
          <section className="h-screen w-full bg-black mt-0 p-2 pr-4  pl-4 ">
            <div className=" h-9p">
              <button
                className={` ${
                  isMusic && "border-b-2 border-green-500 text-white"
                }  mr-6 text-base pb-2  text-neutral-400`}
                onClick={handleMusicClick}
              >
                Music
              </button>
              <button
                className={` ${
                  isMerch && "border-b-2 border-green-500 text-white"
                } mr-6 text-base pb-2 text-neutral-400 `}
                onClick={handleMerchClick}
              >
                Merch
              </button>
            </div>

            {isMerch && <ArtistMerchContent />}
            {isMusic && <ArtistMusicContent />}
          </section>
        </div>
      ))
      }
    </div>
  );
}
