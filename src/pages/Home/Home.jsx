import { useState } from "react";
import { useNavigate } from "react-router-dom";

// COMPONENTS
import RecentPlay from "../../components/Library/RecentPlay";
import Album from "../../components/Library/AlbumComponent";
import ArtistCard from "../../components/Library/ArtistCardComponent";
import NavBar from "../../components/Navbar/NavbarComponent";
import CardSection from "../../components/Cards/CardSectionComponent";
import MixesCard from "../../components/Mixes/MixesCard";

// IMAGES
import A1img from "../../assets/imgs/Artists/A1.jpeg";
import MercyImg from "../../assets/imgs/Artists/Mercy-Chinwolk.jpg";
import OmidImg from "../../assets/imgs/Artists/omid-armin-_BkjDspEw_k-unsplash (1).jpg";
import WilliamsImg from "../../assets/imgs/Artists/Williams McDowel.jpeg";
import logo from '/logo.png';

export default function Home({ collapse, jumpinPlaylist, setAlbumId }) {
  let navigate = useNavigate();

  function handleAlbumClick(id) {
    setAlbumId(id);
    navigate(`/Spotify-Clone/albums/${id}`);
  }

  function handleArtistClick(id) {
    navigate(`/Spotify-Clone/artist/${id}`);
  }

  return (
    <div className="overflow-y-scroll scrollbar-hide scrollBehaviour pb-32 md:pb-44  h-screen relative">
      {/* Navbar */}
      <NavBar page={"All"} />

      {/* Recently played Section  */}
      <section className="mt-20 ">
        <div className="w-96p block mx-auto flex flex-row flex-wrap justify-between">
          <RecentPlay
            isCollapse={collapse}
            imgUrl={A1img}
            name="Plamedi Pindi"
          />
          <RecentPlay
            isCollapse={collapse}
            imgUrl={MercyImg}
            name="Mercy Chinwo"
          />
          <RecentPlay isCollapse={collapse} imgUrl={OmidImg} name="Imd Armin" />
          <RecentPlay
            isCollapse={collapse}
            imgUrl={WilliamsImg}
            name="Williams McDowell"
          />
          <RecentPlay
            isCollapse={collapse}
            imgUrl={A1img}
            name="Plamedi Pindi"
          />
          <RecentPlay
            isCollapse={collapse}
            imgUrl={MercyImg}
            name="Mercy Chinwo"
          />
          <RecentPlay isCollapse={collapse} imgUrl={OmidImg} name="Imd Armin" />
          <RecentPlay
            isCollapse={collapse}
            imgUrl={WilliamsImg}
            name="Williams McDowell"
          />
        </div>
      </section>

      {/* JUMP BACK IN SECTION*/}
      <CardSection subTitle={" Jump back in"}>
        {jumpinPlaylist.map((data) =>
          data.category === "Album" ? (
            <Album
              imgUrl={data.img}
              title={data.title}
              name={data.name}
              isCollapse={collapse}
              onClick={() => handleAlbumClick(data.id)}
              key={data.id}
            />
          ) : (
            <ArtistCard
              imgUrl={data.img}
              name={data.name}
              isCollapse={collapse}
              onClick={() => handleArtistClick(data.id)}
              key={data.id}
            />
          )
        )}
      </CardSection>

      {/* YOUR TOP MIXES SECTION*/}
      <CardSection subTitle={" Your tpo mixes"}>
        <MixesCard
          imgUrl={"https://i.imgur.com/chVhfoF.jpg"}
          logo={logo}
          border={`border-b-8 border-green-700`}
          title={'Upbeat Mix'}
          titleBorder={"green"}
        />

        <MixesCard
          imgUrl={"https://i.imgur.com/lvslhOk.jpg"}
          logo={logo}
          border={`border-b-8 border-pink-400`}
          title={'Hip Hop Mix'}
          titleBorder={"#fd9dad"}
        />

        <MixesCard
          imgUrl={"https://i.imgur.com/9K9d5Al.jpg"}
          logo={logo}
          border={`border-b-8 border-red-600`}
          title={'2010s Mix'}
          titleBorder={"red"}
        />

        <MixesCard
          imgUrl={"https://i.imgur.com/a26t4Ju.jpg"}
          logo={logo}
          border={`border-b-8 border-blue-800`}
          title={'2000s Mix'}
          titleBorder={"blue"}
        />
      </CardSection>


      {/* Recents SECTION*/}
      <CardSection subTitle={" Recents"}></CardSection>

      {/* Recomended Stations SECTION*/}
      <CardSection subTitle={" Recommended Stations"}></CardSection>

      {/* NEW EPISODES SECTION*/}
      <CardSection subTitle={"New episodes"}></CardSection>

      {/* YOUR FAVORITE ARTIST SECTION*/}
      <CardSection subTitle={"Your favorite artist"}></CardSection>
    </div>
  );
}
