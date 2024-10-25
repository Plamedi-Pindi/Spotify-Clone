import { useState } from "react";
import { useNavigate } from "react-router-dom";

// COMPONENTS
import RecentPlay from "../../components/Library/RecentPlay";
import Album from "../../components/Library/AlbumComponent";
import ArtistCard from "../../components/Library/ArtistCardComponent";
import NavBar from "../../components/Navbar/NavbarComponent";
import CardSection from "../../components/Cards/CardSectionComponent";
import MixesCard from "../../components/Mixes/MixesCard";
import { Mixes } from "../../components/Mixes/MixesCard";

// Object of recente reproduction
import recents from "../../components/PlaylistData/recents.json";

// IMAGES
import MercyImg from "../../assets/imgs/Artists/Mercy-Chinwolk.jpg";
import OmidImg from "../../assets/imgs/Artists/omid-armin-_BkjDspEw_k-unsplash (1).jpg";
import logo from "/logo.png";

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
            imgUrl={"https://i.imgur.com/aoU7K5a.jpg"}
            name="Nivea Soares"
          />
          <RecentPlay
            isCollapse={collapse}
            imgUrl={MercyImg}
            name="Mercy Chinwo"
          />
          <RecentPlay isCollapse={collapse} imgUrl={OmidImg} name="Imd Armin" />
          <RecentPlay
            isCollapse={collapse}
            imgUrl={"https://i.imgur.com/V5ZIvjQ.jpg"}
            name="Thamires Garcia"
          />
          <RecentPlay
            isCollapse={collapse}
            imgUrl={"https://i.imgur.com/qHw9NBT.jpg"}
            name="Tasha Cobbs"
          />
          <RecentPlay
            isCollapse={collapse}
            imgUrl={"https://i.imgur.com/aNSFnyd.jpg"}
            name="Micheal W. Smith"
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

      {/* Recents SECTION*/}
      <CardSection subTitle={" Recents"}>
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

      {/* YOUR TOP MIXES SECTION*/}
      <CardSection subTitle={" Your tpo mixes"}>
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

      {/* Recomended Stations SECTION*/}
      <CardSection subTitle={" Recommended Stations"}></CardSection>

      {/* NEW EPISODES SECTION*/}
      <CardSection subTitle={"New episodes"}></CardSection>

      {/* YOUR FAVORITE ARTIST SECTION*/}
      <CardSection subTitle={"Your favorite artist"}></CardSection>
    </div>
  );
}
