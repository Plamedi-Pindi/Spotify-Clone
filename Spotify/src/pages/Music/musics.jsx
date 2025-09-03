import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// COMPONENTS
import RecentPlay from "../../components/Library/RecentPlay";
import Album from "../../components/Library/AlbumComponent";
import ArtistCard from "../../components/Library/ArtistCardComponent";
import NavBar from "../../components/Navbar/NavbarComponent";
import CardSection from "../../components/Cards/CardSectionComponent";
import MixesCard from "../../components/Mixes/MixesCard";
import RecommendedCard from "../../components/RecomendedCard/RecommendedCard";
import EpisodesCard from "../../components/Episods/EpisodesCard";
import RectangularCard from "../../components/Cards/RectangularCard";

// Object of recente reproduction
import recents from "../../components/PlaylistData/recents.json";
import artists from "../../components/PlaylistData/Artists.json";

// IMAGES
import MercyImg from "../../assets/imgs/Artists/Mercy-Chinwolk.jpg";
import OmidImg from "../../assets/imgs/Artists/omid-armin-_BkjDspEw_k-unsplash (1).jpg";
import logo from "/logo.png";
import api from "../../services/api";

export default function Musics({ collapse, sideMenu, isMenuOn }) {
  const [jumpinPlaylist, setJumpinPlaylist] = useState([]);

  let navigate = useNavigate();

  // 
  useEffect(() => {
    const fetchJump = async () => {
      await api.get('/jumplist')
        .then(response => {
          setJumpinPlaylist(response.data);
        })
        .catch(error => {
          console.error("Erro ao buscar dados no jumplist", error);
        })
    }

    fetchJump();
  }, []);

  function handleAlbumClick(id) {
    setAlbumId(id);
    navigate(`/Spotify-Clone/albums/${id}`);
  }

  function handleArtistClick(id) {
    navigate(`/Spotify-Clone/artist/${id}`);
  }

  const imgList = [
    "https://i.imgur.com/8GqdgTg.jpg",
    "https://i.imgur.com/iYcSPld.jpg",
    "https://i.imgur.com/9hs8YRc.jpg",
  ];
  const imgList2 = [
    "https://i.imgur.com/owdNyDx.jpg",
    "https://i.imgur.com/C5wQDoH.jpg",
    "https://i.imgur.com/jTdE0Ai.jpg",
  ];
  const imgList3 = [
    "https://i.imgur.com/WRwCU4o.jpg",
    "https://i.imgur.com/oODBZjZ.jpg",
    "https://i.imgur.com/eQ2bWJ6.jpg",
  ];
  const imgList4 = [
    "https://i.imgur.com/7TrWOrM.jpg",
    "https://i.imgur.com/QAt3RmB.png",
    "https://i.imgur.com/dmeOtvj.jpg",
  ];

  return (
    <div
      className={` scrollbar-hide scrollBehaviour pb-32 md:pb-44  h-dvh relative ${isMenuOn ? "shrink-0 " : "overflow-y-scroll"
        }`}
    >
      {/* Navbar */}
      <NavBar
        page={"Music"}
        onClick={sideMenu}
        position={`${isMenuOn ? "" : "fixed"}`}
      />

      {/* Recently played Section  */}
      <section className={`${!isMenuOn && "mt-20"}  `}>
        <div className="w-96p block mx-auto flex flex-row flex-wrap justify-between">
          <RecentPlay
            isCollapse={collapse}
            imgUrl={"https://i.imgur.com/aoU7K5a.jpg"}
            name="Nivea Soares"
            isPlaying={true}
            onClick={() => handleArtistClick(5)}
          />
          <RecentPlay
            isCollapse={collapse}
            imgUrl={MercyImg}
            name="Mercy Chinwo"
            onClick={() => handleArtistClick(4)}
          />
          <RecentPlay
            isCollapse={collapse}
            imgUrl={OmidImg}
            name="Imd Armin"
            onClick={() => handleAlbumClick(7)}
          />
          <RecentPlay
            isCollapse={collapse}
            imgUrl={"https://i.imgur.com/V5ZIvjQ.jpg"}
            name="Thamires Garcia"
            onClick={() => handleArtistClick(1)}
          />
          <RecentPlay
            isCollapse={collapse}
            imgUrl={"https://i.imgur.com/qHw9NBT.jpg"}
            name="Tasha Cobbs"
            onClick={() => handleArtistClick(11)}
          />
          <RecentPlay
            isCollapse={collapse}
            imgUrl={"https://i.imgur.com/aNSFnyd.jpg"}
            name="Micheal W. Smith"
            onClick={() => handleArtistClick(2)}
          />

          <RecentPlay
            isCollapse={collapse}
            imgUrl={"https://i.imgur.com/kLMhMXe.jpg"}
            name="Imd Armin"
          />

          <RecentPlay
            isCollapse={collapse}
            imgUrl={"https://i.imgur.com/eskV8JR.jpg"}
            name="Podcast"
          />
        </div>
      </section>

      {/* Piked for you */}
      <CardSection subTitle={"Picked for you"} margin={"mt-6 mb-6"}>
        <RectangularCard
          title={"Relaxing Massage"}
          description={"Soothing drones, anbient piano and new age music"}
          imgUrl={"https://i.imgur.com/4IZC5G8.jpg"}
        />
      </CardSection>

      {/* JUMP BACK IN SECTION*/}
      <CardSection subTitle={" Jump back in"} margin={""}>
        {jumpinPlaylist.map((data) =>
          data.category === "Album" ? (
            <Album
              imgUrl={data.img}
              title={data.title}
              name={data.name}
              isCollapse={collapse}
              onClick={() => handleAlbumClick(data.id)}
              key={data.id}
              boxDimension={"w-40"}
              imgDimension={"w-36 h-36"}
            />
          ) : (
            <ArtistCard
              imgUrl={data.img}
              name={data.name}
              isCollapse={collapse}
              onClick={() => handleArtistClick(data.id)}
              key={data.id}
              imgDimension={"w-36 h-36"}
              boxDimension={"w-36"}
            />
          )
        )}
      </CardSection>

      {/* YOUR TOP MIXES SECTION*/}
      <CardSection subTitle={" Your tpo mixes"} margin={"mt-2"}>
        <MixesCard
          imgUrl={"https://i.imgur.com/9hs8YRc.jpg"}
          logo={logo}
          border={`border-b-8 border-green-700`}
          title={"Upbeat Mix"}
          titleBorder={"green"}
          box={"w-36 h-48"}
          imgSize={"h-36"}
          autors={"Autor name1, Autor name2, Autor name3..."}
        />

        <MixesCard
          imgUrl={"https://i.imgur.com/qHw9NBT.jpg"}
          logo={logo}
          border={`border-b-8 border-orange-400`}
          title={"Tasha Mix"}
          titleBorder={"orange"}
          box={"w-36 h-48"}
          imgSize={"h-36"}
          autors={"Autor name1, Autor name2, Autor name3..."}
        />

        <MixesCard
          imgUrl={"https://i.imgur.com/chVhfoF.jpg"}
          logo={logo}
          border={`border-b-8 border-green-700`}
          title={"Upbeat Mix"}
          titleBorder={"green"}
          box={"w-36 h-48"}
          imgSize={"h-36"}
          autors={"Autor name1, Autor name2, Autor name3..."}
        />

        <MixesCard
          imgUrl={"https://i.imgur.com/aNSFnyd.jpg"}
          logo={logo}
          border={`border-b-8 border-fuchsia-900`}
          title={"Michael Mix"}
          titleBorder={"purple"}
          box={"w-36 h-48"}
          imgSize={"h-36"}
          autors={"Autor name1, Autor name2, Autor name3..."}
        />

        <MixesCard
          imgUrl={"https://i.imgur.com/lvslhOk.jpg"}
          logo={logo}
          border={`border-b-8 border-pink-400`}
          title={"Hip Hop Mix"}
          titleBorder={"#fd9dad"}
          box={"w-36 h-48"}
          imgSize={"h-36"}
          autors={"Autor name1, Autor name2, Autor name3..."}
        />

        <MixesCard
          imgUrl={"https://i.imgur.com/9K9d5Al.jpg"}
          logo={logo}
          border={`border-b-8 border-red-600`}
          title={"2010s Mix"}
          titleBorder={"red"}
          box={"w-36 h-48"}
          imgSize={"h-36"}
          autors={"Autor name1, Autor name2, Autor name3..."}
        />

        <MixesCard
          imgUrl={"https://i.imgur.com/a26t4Ju.jpg"}
          logo={logo}
          border={`border-b-8 border-blue-800`}
          title={"2000s Mix"}
          titleBorder={"blue"}
          box={"w-36 h-48"}
          imgSize={"h-36"}
          autors={"Autor name1, Autor name2, Autor name3..."}
        />
      </CardSection>

      {/* Piked for you */}
      <CardSection subTitle={"Picked for you"} margin={"mt-6 mb-6"}>
        <RectangularCard
          title={"Sleep Songs"}
          description={"Soothing drones, anbient piano and new age music"}
          imgUrl={"https://i.imgur.com/crwJBbh.jpg"}
        />
      </CardSection>

      {/* Recents SECTION*/}
      <CardSection subTitle={" Recents"} margin={"mt-2"}>
        {recents.map((data) => {
          switch (data.category) {
            case "Album":
              return (
                <Album
                  imgUrl={data.img}
                  title={data.title}
                  name={data.name}
                  isCollapse={collapse}
                  onClick={() => handleAlbumClick(data.id)}
                  key={data.id}
                  boxDimension={"w-36"}
                  imgDimension={"w-32 h-32 rounded-md"}
                />
              );
            case "Artist":
              return (
                <ArtistCard
                  imgUrl={data.img}
                  name={data.name}
                  isCollapse={collapse}
                  onClick={() => handleArtistClick(data.id)}
                  key={data.id}
                  imgDimension={"w-32 h-32"}
                  boxDimension={"w-32"}
                />
              );
            case "Mix":
              return (
                <MixesCard
                  key={data.id}
                  imgUrl={data.img}
                  logo={logo}
                  border={`border-b-8 border-green-700 rounded-md`}
                  imgRadiu={"rounded-t-md"}
                  title={"Upbeat Mix"}
                  titleBorder={"green"}
                  box={"w-32 h-44"}
                  imgSize={"h-32"}
                  autors={"Autor name1, Autor name2..."}
                />
              );
          }
        })}
      </CardSection>

      {/* Recomended Stations SECTION*/}
      <CardSection subTitle={" Recommended Stations"} margin={"mt-2"}>
        <RecommendedCard
          imgList={imgList}
          name={"Artist Name"}
          background={"#8fd14f"}
        />

        <RecommendedCard
          imgList={imgList2}
          name={"Artist Name"}
          background={"#a594f9"}
        />

        <RecommendedCard
          imgList={imgList3}
          name={"Artist Name"}
          background={"#ffa823"}
        />

        <RecommendedCard
          imgList={imgList}
          name={"Artist Name"}
          background={"#d91656"}
        />

        <RecommendedCard
          imgList={imgList4}
          name={"Artist Name"}
          background={"#006989"}
        />
      </CardSection>

      {/* Piked for you */}
      <CardSection subTitle={"Picked for you"} margin={"mt-6 mb-6"}>
        <RectangularCard
          title={"Study Songs"}
          description={"Soothing drones, anbient piano and new age music"}
          imgUrl={"https://i.imgur.com/CqOf6lv.png"}
        />
      </CardSection>

      {/* YOUR FAVORITE ARTIST SECTION*/}
      <CardSection subTitle={"Your favorite artist"} margin={"mt-2"}>
        {artists.map((data) => (
          <ArtistCard
            imgUrl={data.img}
            name={data.name}
            isCollapse={collapse}
            onClick={() => handleArtistClick(data.id)}
            key={data.id}
            imgDimension={"w-36 h-36"}
            boxDimension={"w-36"}
          />
        ))}
      </CardSection>
    </div>
  );
}
