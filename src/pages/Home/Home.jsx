import { useState } from "react";
// COMPONENTS
import { ButtonTranspatent } from "../../components/Button/ButtonComponent";
import RecentPlay from "../../components/Library/RecentPlay";
import Album from "../../components/Library/AlbumComponent";
import { ArtistCard } from "../../components/Library/Artists";
// IMAGES
import A1img from "../../assets/imgs/Artists/A1.jpeg";
import MercyImg from "../../assets/imgs/Artists/Mercy-Chinwolk.jpg";
import OmidImg from "../../assets/imgs/Artists/omid-armin-_BkjDspEw_k-unsplash (1).jpg";
import WilliamsImg from "../../assets/imgs/Artists/Williams McDowel.jpeg";

export default function Home() {
  const [isactive, setIsActive] = useState("All"); /* States: All, Musisc, Podcast */
  let allActive = isactive === "All";
  let musicActive = isactive === "Music";
  let podcastActive = isactive === "Podcast";

  function handleAllClick() {
    setIsActive("All");
  }
  function handleMusicClick() {
    setIsActive("Music");
  }
  function handlePodcastClick() {
    setIsActive("Podcast");
  }

  return (
    <div className="overflow-hidden h-auto">
      {/* NAVBAR */}
      <nav className=" w-full h-3.8rm flex items-center bg-black fixed top-0 left-0">
        <div className="w-95p mx-auto flex flex-row items-center pt-3">
          <div className="w-7 h-7 bg-orange-500 flex justify-center items-center rounded-full text-sm font-bold md:hidden">
            <p>P</p>
          </div>
          <ButtonTranspatent
            onActive={handleAllClick}
            background={allActive && "rgb(30, 128, 30)"}
          >
            All
          </ButtonTranspatent>
          <ButtonTranspatent
            onActive={handleMusicClick}
            background={musicActive && "rgb(30, 128, 30)"}
          >
            Music
          </ButtonTranspatent>
          <ButtonTranspatent
            onActive={handlePodcastClick}
            background={podcastActive && "rgb(30, 128, 30)"}
          >
            Podcasts
          </ButtonTranspatent>
        </div>
      </nav>
      <section className="mt-20 md:mt-2 ">
        <div className="w-96p block mx-auto flex flex-row flex-wrap justify-between">
          <RecentPlay imgUrl={A1img} name="Plamedi Pindi" />
          <RecentPlay imgUrl={MercyImg} name="Mercy Chinwo" />
          <RecentPlay imgUrl={OmidImg} name="Imd Armin" />
          <RecentPlay imgUrl={WilliamsImg} name="Williams McDowell" />
          <RecentPlay imgUrl={A1img} name="Plamedi Pindi" />
          <RecentPlay imgUrl={MercyImg} name="Mercy Chinwo" />
          <RecentPlay imgUrl={OmidImg} name="Imd Armin" />
          <RecentPlay imgUrl={WilliamsImg} name="Williams McDowell" />
        </div>
      </section>

      {/*  */}

      <section className="mt-4 pb-2">
        <h2 className="text-xl font-bold mb-5">Jump back in</h2>

        <div className="overflow-x-auto flex w-full whitespace-nowrap space-x-4 tailwind-scrollbar-hide">
          <Album 
            imgUrl={OmidImg} 
            title={'More than this'}
            name={'Omid Armin'}
          />
          <ArtistCard 
            imgUrl={WilliamsImg} 
            name={'William McDowell'}
          />
          <Album 
            imgUrl={MercyImg} 
            title={'Mercy Chinwo'}
            name={'Omid Armin'}
          />
          <ArtistCard 
            imgUrl={A1img} 
            name={'Plamedi Pindi'}
          />
        </div>
      </section>
    </div>
  );
}
