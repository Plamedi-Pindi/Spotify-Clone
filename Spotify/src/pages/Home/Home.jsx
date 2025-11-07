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
import { useMediaPlayContext } from '../../context/MediaPlayContext';
import SpotFooter from "../../components/SpotFooter/SpotFooter";


// SERVICES
import api from "../../services/api";

// Object of recente reproduction
import artists from "../../components/PlaylistData/Artists.json";

// Icon
import { BsMusicNoteBeamed } from "react-icons/bs";

// IMAGES
import MercyImg from "../../assets/imgs/Artists/Mercy-Chinwolk.jpg";
import OmidImg from "../../assets/imgs/Artists/omid-armin-_BkjDspEw_k-unsplash (1).jpg";
import logo from "/logo.png";

// Css
import './Home.css'

// Main Function
export default function Home({ sideMenu, isMenuOn }) {
  const [jumplist, setJumplist] = useState([]);
  const [recents, SetRecents] = useState([]);

  let navigate = useNavigate();

  const {
    loading, setLoading,
    collapse,
    currentArtist, setCurrentArtist,
    initialSong, setInitialSong,
  } = useMediaPlayContext();


  //
  function handleAlbumClick(id) {
    navigate(`/Spotify-Clone/albums/${id}`);
    console.log(id);

  }

  //
  const handleArtistClick = async (id) => {
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

  // 
  useEffect(() => {
    const fetchJump = async () => {
      await api.get('/jumplist')
        .then(response => {
          setJumplist(response.data);
        })
        .catch(error => {
          console.error("Erro ao buscar dados no jumplist", error);
        })

    }

    fetchJump();
  }, []);


  // 
  useEffect(() => {
    const fetchRecent = async () => {
      await api.get('/mostplayed')
        .then(response => {
          SetRecents(response.data);
        })
        .catch(error => {
          console.error("Erro ao buscar dados no jumplist", error);
        })

    }

    fetchRecent();
  }, []);


  return (
    <div
      className={`scrollbar-hide scrollBehaviour pb-32 md:pb-44 h-dvh w-full relative parentePosition ${isMenuOn ? "shrink-0 " : "overflow-y-scroll"
        }`}
    >
      {/* Navbar */}
      <NavBar
        page={"All"}
        onClick={sideMenu}
        position={`${isMenuOn ? "" : "fixed w-full "}`}

      />

      {/* Recently played Section  */}
      <section className={`${!isMenuOn && "mt-20"} `}>
        <div className="w-96p block mx-auto flex flex-row flex-wrap justify-between md:pl-6 md:pr-6 ">
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

      {/* JUMP BACK IN SECTION*/}
      <CardSection subTitle={" Jump back in"} margin={'mt-6'}>
        {jumplist.map((data) =>
          data.category === "Album" ? (
            loading ?
              <div className=" flex flex-col items-center justify-center animate-pulse">
                <div className="w-40 h-40 bg-gray-200/30 rounded-lg mb-1 flex items-center justify-center">
                  <BsMusicNoteBeamed className="text-6xl text-gray-200/40" />
                </div>

                <div className="w-32 h-1.5 bg-gray-200/30 rounded-full mt-1" />
                <div className="w-36 h-1.5 bg-gray-200/30 rounded-full mt-1" />
              </div> :
              <Album
                imgUrl={data.img}
                title={data.title}
                name={data.name}
                isCollapse={collapse}
                onClick={() => handleAlbumClick(data.id)}
                key={data.id}
                boxDimension={"w-40 lay930:w-44"}
                imgDimension={"w-36 h-36 lay930:w-44 lay930:h-40"}
              />
          ) : (
            loading ?
              <div className=" flex flex-col items-center justify-center animate-pulse">
                <div className="w-40 h-40 bg-gray-200/30 rounded-lg mb-1 flex items-center justify-center">
                  <BsMusicNoteBeamed className="text-6xl text-gray-200/40" />
                </div>

                <div className="w-32 h-1.5 bg-gray-200/30 rounded-full mt-1" />
                <div className="w-36 h-1.5 bg-gray-200/30 rounded-full mt-1" />
              </div> :
              <ArtistCard
                imgUrl={data.img}
                name={data.name}
                isCollapse={collapse}
                onClick={() => handleArtistClick(data.id)}
                key={data.id}
                imgDimension={"w-36 h-36 lay930:w-40 lay930:h-40"}
                boxDimension={"w-36 lay930:w-44 lay930:h-60"}
              />
          )
        )}
      </CardSection>

      {/* YOUR TOP MIXES SECTION*/}
      <CardSection subTitle={" Your top mixes"} margin={'mt-2'}>
        <MixesCard
          imgUrl={"https://i.imgur.com/9hs8YRc.jpg"}
          logo={logo}
          border={`border-b-8 border-green-700`}
          title={"Upbeat Mix"}
          titleBorder={"green"}
          box={"w-36 h-48 lay930:w-40 lay930:h-56"}
          imgSize={"h-36 lay930:h-40"}
          autors={"Autor name1, Autor name2, Autor name3..."}
        />

        <MixesCard
          imgUrl={"https://i.imgur.com/qHw9NBT.jpg"}
          logo={logo}
          border={`border-b-8 border-orange-400`}
          title={"Tasha Mix"}
          titleBorder={"orange"}
          box={"w-36 h-48 lay930:w-40 lay930:h-56"}
          imgSize={"h-36 lay930:h-40"}
          autors={"Autor name1, Autor name2, Autor name3..."}
        />

        <MixesCard
          imgUrl={"https://i.imgur.com/chVhfoF.jpg"}
          logo={logo}
          border={`border-b-8 border-green-700`}
          title={"Upbeat Mix"}
          titleBorder={"green"}
          box={"w-36 h-48 lay930:w-40 lay930:h-56"}
          imgSize={"h-36 lay930:h-40"}
          autors={"Autor name1, Autor name2, Autor name3..."}
        />

        <MixesCard
          imgUrl={"https://i.imgur.com/aNSFnyd.jpg"}
          logo={logo}
          border={`border-b-8 border-fuchsia-900`}
          title={"Michael Mix"}
          titleBorder={"purple"}
          box={"w-36 h-48 lay930:w-40 lay930:h-56"}
          imgSize={"h-36 lay930:h-40"}
          autors={"Autor name1, Autor name2, Autor name3..."}
        />

        <MixesCard
          imgUrl={"https://i.imgur.com/lvslhOk.jpg"}
          logo={logo}
          border={`border-b-8 border-pink-400`}
          title={"Hip Hop Mix"}
          titleBorder={"#fd9dad"}
          box={"w-36 h-48 lay930:w-40 lay930:h-56"}
          imgSize={"h-36 lay930:h-40"}
          autors={"Autor name1, Autor name2, Autor name3..."}
        />

        <MixesCard
          imgUrl={"https://i.imgur.com/9K9d5Al.jpg"}
          logo={logo}
          border={`border-b-8 border-red-600`}
          title={"2010s Mix"}
          titleBorder={"red"}
          box={"w-36 h-48 lay930:w-40 lay930:h-56"}
          imgSize={"h-36 lay930:h-40"}
          autors={"Autor name1, Autor name2, Autor name3..."}
        />

        <MixesCard
          imgUrl={"https://i.imgur.com/a26t4Ju.jpg"}
          logo={logo}
          border={`border-b-8 border-blue-800`}
          title={"2000s Mix"}
          titleBorder={"blue"}
          box={"w-36 h-48 lay930:w-40 lay930:h-56"}
          imgSize={"h-36 lay930:h-40"}
          autors={"Autor name1, Autor name2, Autor name3..."}
        />
      </CardSection>

      {/* Recents SECTION*/}
      <CardSection subTitle={" Recents"} margin={'mt-2'}>
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
                  boxDimension={"w-36 lay930:w-40"}
                  imgDimension={"w-32 h-32 lay930:w-36 rounded-md"}
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
                  imgDimension={"w-32 h-32 lay930:w-36 lay930:h-36"}
                  boxDimension={"w-32 lay930:w-40"}
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
                  box={"w-32 h-44 lay930:w-40 lay930:h-52"}
                  imgSize={"h-32 lay930:h-36"}
                  autors={"Autor name1, Autor name2..."}
                />
              );
          }
        })}
      </CardSection>

      {/* Recomended Stations SECTION*/}
      <CardSection subTitle={" Recommended Stations"} margin={'mt-2'}>
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

      {/* NEW EPISODES SECTION*/}
      <CardSection subTitle={"New episodes"} margin={'mt-2'}>
        <EpisodesCard
          imgUrl={"https://i.imgur.com/k2QdpL4.jpg"}
          title={"Autor or podcast thame and something.."}
        />

        <EpisodesCard
          imgUrl={"https://i.imgur.com/9cHsUf5.png"}
          title={"Autor or podcast thame and something.."}
        />

        <EpisodesCard
          imgUrl={"https://i.imgur.com/BaDqKgo.jpg"}
          title={"Autor or podcast thame and something.."}
        />

        <EpisodesCard
          imgUrl={"https://i.imgur.com/Oo6jpJ9.jpg"}
          title={"Autor or podcast thame and something.."}
        />

        <EpisodesCard
          imgUrl={"https://i.imgur.com/g5UVY2j.jpg"}
          title={"Autor or podcast thame and something.."}
        />

        <EpisodesCard
          imgUrl={"https://i.imgur.com/IHOxdHN.jpg"}
          title={"Autor or podcast thame and something.."}
        />
      </CardSection>

      {/* YOUR FAVORITE ARTIST SECTION*/}
      <CardSection subTitle={"Your favorite artist"} margin={'mt-2'}>
        {artists.map((data) => (
          <ArtistCard
            imgUrl={data.img}
            name={data.name}
            isCollapse={collapse}
            onClick={() => handleArtistClick(data.id)}
            key={data.id}
            imgDimension={"w-36 h-36"}
            boxDimension={"w-36 lay930:w-40"}
          />
        ))}
      </CardSection>

      {/* <SpotFooter /> */}
    </div>
  );
}
