// Icons
import { BsArrowLeft, BsInstagram, BsFacebook } from "react-icons/bs";

// Hooks
import { useNavigate, useParams } from "react-router-dom";

//Components
import ArtisGalery from "./components/ArtisGalery";
import ArtistInfo from "./components/ArtistInfo";

import artists from "../../components/PlaylistData/Artists.json";

// const ArtisImages = [
//   {
//     id: 1,
//     img: "https://i.imgur.com/K0BPyWp.jpg",
//   },

//   {
//     id: 2,
//     img: "https://i.imgur.com/PY630AM.jpg",
//   },

//   {
//     id: 3,
//     img: "https://i.imgur.com/76UlUVf.jpg",
//   },
// ];

// Main function
export default function AboutArtist() {
  const { id } = useParams();
  const artist = artists.filter((item) => item.id === parseInt(id));

  return (
    <>
      {artist.map((artist) => (
        <div key={artist.id} className="overflow-y-scroll scrollbar-hide pb-32 h-full">
          <BackSection id={id} name={artist.name} />
          <ArtisGalery ArtisImages={artist.galery} margin={"mt-20"} />
          <ArtistInfo record={"670,885"} />
          <ArtisMidia />
        </div>
      ))}
    </>
  );
}

// const Artist = artistList.filter(artist => artist.id == id);

// Componet to back to previos component
const BackSection = ({ id, name }) => {
  let navigate = useNavigate();

  const handleBackClick = () => {
    navigate(`/Spotify-Clone/artist/${id}`);
  };

  return (
    <>
      <div
        className={`flex items-center  p-2 fixed w-full z-30 bg-neutral-900  duration-500 ease-in`}
      >
        <button
          className="bg-black/40 rounded-full w-10 h-10 flex items-center justify-center mr-5"
          onClick={handleBackClick}
        >
          <BsArrowLeft className="text-2xl text-wite" />
        </button>
        <h2 className={`text-lg font-medium  duration-500 `}> {name} </h2>
      </div>
    </>
  );
};

const ArtisMidia = () => {
  return (
    <ul className="p-4 text-sm">
      <li className="flex items-center mb-6">
        <BsInstagram className="text-2xl" />
        <span className="ml-3">Instagram</span>
      </li>
      <li className="flex items-center mb-6">
        <BsFacebook className="text-2xl" />
        <span className="ml-3">Facebook</span>
      </li>
    </ul>
  );
};
