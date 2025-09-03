// ASSETS 
import A1img from "../../../assets/imgs/Artists/A1.jpeg";
import mercy from "../../../assets/imgs/Artists/Mercy-Chinwolk.jpg";
import williams from "../../../assets/imgs/Artists/Williams McDowel.jpeg";
import omid from "../../../assets/imgs/Artists/omid-armin-_BkjDspEw_k-unsplash (1).jpg";
import fatane from "../../../assets/imgs/Artists/fatane-rahimi-Agv-xPQBO60-unsplash.jpg";

// COMPONENTS
import ArtistLibrary from "../../../components/Library/ArtistLibraryComponent";
import Button from "../../../components/Button/ButtonComponent";
import LikedSong from "../../../components/Library/LibraryComponents";
import { Episodes } from "../../../components/Library/LibraryComponents";
import { useMediaPlayContext } from '../../../context/MediaPlayContext';

// REATCT ICONS 
import {
  BsSearch,
  BsPlusLg,
  BsArrowRight,
  BsCollectionPlayFill,
  BsCollectionPlay,
  BsListUl,
  BsPinAngleFill,
  BsDot,
} from "react-icons/bs";

export default function SpotLeftSidebarBox() {

  const { collapse, setCollapse } = useMediaPlayContext();

  const handleCollapseClick = () => setCollapse(!collapse);

  return (
    <div
      className={`hidden md:block md:w-5rm md:bg-neutral-900 rounded-lg mr-2 ${!collapse && "lay930:w-[25rem]"
        } `}
    >
      {/* Library Filter */}
      <div className={`${!collapse && "lay930:h-24p"}  pt-4 h-10p `}>
        <div
          className={`flex justify-center ${!collapse && "lay930:justify-between"
            }  lay930:w-11/12 block mx-auto h-8`}
        >
          {/* Library */}
          <h1
            className={`flex items-center hover:text-neutral-100 duration-200 text-base text-neutral-400 `}
            onClick={handleCollapseClick}
          >
            {!collapse ? (
              <>
                <BsCollectionPlayFill className={`text-2xl lay930:ml-2 `} />
                <span className="hidden lay930:block  ml-3">Your Library</span>
              </>
            ) : (
              <BsCollectionPlay
                className={`text-2xl  ${collapse && "lay930:mr-2"}`}
              />
            )}
          </h1>

          {/* Control  */}
          {!collapse && (
            <div className="hidden flex-row items-center lay930:flex">
              <BsPlusLg className="text-3xl hover:bg-neutral-800 text-neutral-100  duration-200 p-1.5 rounded-full mr-2" />
              <BsArrowRight className="text-3xl hover:bg-neutral-800 text-neutral-100  duration-200 rounded-full p-1.5" />
            </div>
          )}
        </div>

        {/* filter buttons */}
        {!collapse && (
          <div className="hidden lay930:flex w-95p mx-auto justify-around mt-6 flex ">
            <Button> Playlists </Button>
            <Button> Artists </Button>
            <Button> Albums </Button>
            <Button>Podcasts & Shows</Button>
          </div>
        )}
      </div>

      {/* Search section */}
      <section
        className={` scrollBehaviour flex justify-center lay930:justify-normal lay930:mt-0 ${!collapse && "lay930:h-76p"} h-88p overflow-hidden hover:overflow-auto md:pl-2 lay930:flex-col pb-2  `}
      >
        {!collapse && (
          <div className="hidden lay930:flex flex-row justify-between items-center text-neutral-400 w-11/12 mx-auto mt-2.5  ">

            {/* Search in playlirs */}
            <div className=" flex items-center bg-neutral-800 w-48 rounded">
              <button>
                <BsSearch className=" ml-2 mr-1" />
              </button>
              <input
                type="text"
                placeholder="Search in your library"
                className=" text-sm text-neutral-400 pl-2 p-1 outline-none w-full rounded-e bg-neutral-800"
              />
            </div>

            {/* Sort by */}
            <h3 className="text-sm font-medium hover:text-neutral-100 hover:scale-105 duration-300 cursor-pointer">
              <span>Recentes</span>
              <BsListUl className="inline ml-1 text-2xl" />
            </h3>
          </div>
        )}

        {/* Library List */}
        <div className=" w-95p md:w-full mx-auto mt-2 ">
          <LikedSong>
            {!collapse && (
              <div className="hidden lay930:block ml-3">
                <h3 className="text-base font-medium">Liked Songs</h3>
                <BsPinAngleFill className="inline mr-1.5 text-green-500" />
                <p className="inline text-sm text-neutral-400">Playlist</p>
                <BsDot className="inline text-lg text-neutral-400" />
                <span className="text-sm text-neutral-400">79 songs</span>
              </div>
            )}
          </LikedSong>

          <Episodes>
            {!collapse && (
              <div className="hidden lay930:block ml-3">
                <h3 className="text-base font-medium">Your Episodes</h3>
                <BsPinAngleFill className="inline mr-1.5 text-green-500" />
                <p className="inline text-sm text-neutral-400">
                  Saved & downloaded episodes
                </p>
              </div>
            )}
          </Episodes>

          <ArtistLibrary
            isCollapsed={!collapse}
            name="Plamedi Pindi"
            imgUrl={A1img}
          />

          <ArtistLibrary
            isCollapsed={!collapse}
            name="Mercy Chinwo"
            imgUrl={mercy}
          />

          <ArtistLibrary
            isCollapsed={!collapse}
            name="Williams McDowell"
            imgUrl={williams}
          />

          <ArtistLibrary
            isCollapsed={!collapse}
            name="Omid Armin"
            imgUrl={omid}
          />

          <ArtistLibrary
            isCollapsed={!collapse}
            name="Fatane Rahimi"
            imgUrl={fatane}
          />
        </div>
      </section>
    </div>
  );
}
