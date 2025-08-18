// Hooks
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
// Router
import { useNavigate } from "react-router-dom";

// Conmponts
import ArtistMerchContent from "./components/ArtistMerchContent";
import ArtistMusicContent from "./components/ArtistMusicContent";
import artists from "../../components/PlaylistData/Artists.json";
// import jumpinPlaylist from "../../components/PlaylistData/JumpIn.json";


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

export default function ArtistPage() {
  
  const [contentDisplay, setContentDispaly] = useState("Music"); // Set contet state to: Music, Merch
  const [isScrollUp, setIsCrollUp] = useState(false);

  const navigate = useNavigate(); // router Navigate hook

  const scrollHold = 166;
  const scrollDivRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollDivRef.current) {
        const scrollY = scrollDivRef.current.scrollTop;

        if (scrollY > scrollHold) {
          setIsCrollUp(true);
        } else {
          setIsCrollUp(false);
        }
      }
    };

    const box = scrollDivRef.current;
    if (box) {
      box.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (box) {
        box.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  let isMusic = contentDisplay === "Music";
  let isMerch = contentDisplay === "Merch";

  const { id } = useParams();
  const correntArtists = artists.filter(
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
    <div
      ref={scrollDivRef}
      className=" overflow-y-scroll scrollbar-hide scrollBehaviour h-dvh relative w-full "
    >
      {correntArtists.map((artist) => (
        <div key={artist.id}>

          {/* Render previous-page-return icone */}
          <div
            className={`flex items-center  p-2 fixed w-full z-30 ${
              isScrollUp ? "bg-yellow-900" : "bg-black/0"
            } duration-500 ease-in`}
          >
            <button
              className="bg-black/40 rounded-full w-10 h-10 flex items-center justify-center mr-5"
              onClick={handleBackClick}
            >
              <BsArrowLeft className="text-2xl text-wite" />
            </button>
            <h2
              className={`text-lg font-medium ${
                isScrollUp ? "opacity-100" : "opacity-0"
              } duration-500 ease-in-out`}
            >
              {artist.name}
            </h2>
          </div>


          {/* Render fixed Artist img */}
          <div
            className={` w-full h-36vh bg-contain bg-fixed  bg-top bg-no-repeat flex items-end justify-center`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.9)), url(${artist.img})`,
            }}
          >
            <h2
              className={`text-4xl font-bold text-white mb-2 text-center ${
                isScrollUp ? "opacity-0" : "opacity-100"
              } duration-500 ease-in-out`}
            >
              {" "}
              {artist.name}{" "}
            </h2>
          </div>

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
                  <img
                    src={artist.img}
                    className="w-8 h-10 object-cover rounded-md"
                  />
                </div>

                <button className=" border border-neutral-200 rounded-md  p-1 pr-3 pl-3 text-sm">
                  {" "}
                  Following{" "}
                </button>

                <BsThreeDotsVertical className="text-2xl text-neutral-400" />
                <BsShuffle className="text-2xl text-green-600 -mr-3 ml-3" />
                <BsPlayCircleFill className="text-5xl text-green-600" />
              </div>
            </div>
          </section>

          {/* SECTION TO SWITCH BETWEEEN MUSIC AND MERCH */}
          <section
            className={` h-s w-full bg-black mt-0 p-2 pr-4  pl-4 duration-500 ease-in-out relative`}
          >
            <div className=" h-9p sticky top-14  bg-black pt-4 pb-2">
              <button
                className={` ${
                  isMusic && "border-b-2 border-green-500 text-white mb-2"
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

            {isMusic && <ArtistMusicContent artist={artist} />}
            {isMerch && <ArtistMerchContent />}
          </section>
        </div>
      ))}
    </div>
  );
}
