import { useState } from "react";
import { useNavigate } from "react-router-dom";

// COMPONENTS
import RecentPlay from "../../components/Library/RecentPlay";
import Album from "../../components/Library/AlbumComponent";
import ArtistCard from "../../components/Library/ArtistCardComponent";
import NavBar from "../../components/Navbar/NavbarComponent";
import CardSection from "../../components/Cards/CardSectionComponent";
// IMAGES
import A1img from "../../assets/imgs/Artists/A1.jpeg";
import MercyImg from "../../assets/imgs/Artists/Mercy-Chinwolk.jpg";
import OmidImg from "../../assets/imgs/Artists/omid-armin-_BkjDspEw_k-unsplash (1).jpg";
import WilliamsImg from "../../assets/imgs/Artists/Williams McDowel.jpeg";

export default function Home({ collapse, jumpinPlaylist, setAlbumId }) {
  let navigate = useNavigate();

  function handleAlbumClick(id) {
    setAlbumId(id);
    navigate(`/Spotify-Replication/albums/${id}`);
  }

  function handleArtistClick(id) {
    navigate(`/Spotify-Replication/artist/${id}`);
  }

  return (
    <div className="overflow-hidden h-auto relative">
      {/* Navbar */}
      <NavBar page={"All"} />
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
    </div>
  );
}
