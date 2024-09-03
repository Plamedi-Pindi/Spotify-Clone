import { useNavigate } from "react-router-dom";
import { ButtonTranspatent } from "../../components/Button/ButtonComponent";

export default function NavBar({page}) {
  const navigate = useNavigate();

  let AllActive = false;
  let MusicActive = false;
  let podcastActive = false;
  if (page === "All") {
    AllActive = true;
  } else if (page === "Music"){
    MusicActive = true;
  } else if(page === "Podcast"){
    podcastActive = true;
  }


   // Category page state
   function handleAllClick() {
    navigate("/Spotify-Replication");
  }
  function handleMusicClick() {
    navigate("/Spotify-Replication/music");
  }
  function handlePodcastClick() {
    navigate("/Spotify-Replication/podcast");
  }


  return (
    <>
      <nav className=" w-full h-3.8rm flex items-center bg-black fixed  top-0 left-0 md:top-auto md:left-auto md:bg-blue-900 z-10 rounded-t-lg">
        <div className="w-95p mx-auto flex flex-row items-center pt-1 md:pt-0">
          <div className="w-7 h-7 bg-orange-500 flex justify-center items-center rounded-full text-sm font-bold md:hidden">
            <p>P</p>
          </div>
          <ButtonTranspatent
            background={AllActive && "rgb(30, 128, 30)"}
            onActive={handleAllClick}
          >
            All
          </ButtonTranspatent>
          <ButtonTranspatent
            background={MusicActive && "rgb(30, 128, 30)"}
            onActive={handleMusicClick}
          >
            Music
          </ButtonTranspatent>
          <ButtonTranspatent
            background={podcastActive && "rgb(30, 128, 30)"}
            onActive={handlePodcastClick}
          >
            Podcasts
          </ButtonTranspatent>
        </div>
      </nav>
    </>
  );
}
