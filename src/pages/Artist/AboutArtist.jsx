// Icons
import { BsArrowLeft, BsInstagram } from "react-icons/bs";

// Hooks
import { useNavigate, useParams } from "react-router-dom";

//Components
import ArtisGalery from "./components/ArtisGalery";
import ArtistInfo from "./components/ArtistInfo";

const ArtisImages = [
    {
      id: 1,
      img: "https://i.imgur.com/K0BPyWp.jpg",
    },
  
    {
      id: 2,
      img: "https://i.imgur.com/PY630AM.jpg",
    },
  
    {
      id: 3,
      img: "https://i.imgur.com/76UlUVf.jpg",
    },
  ];

// Main function
export default function AboutArtist() {
  const { id } = useParams();
  return (
    <div className="overflow-y-scroll  pb-32 h-full">
      <BackSection id={id} />
      <ArtisGalery ArtisImages={ArtisImages} margin={"mt-20"} />
      <ArtistInfo record={'670,885'}/>
      {/* <ArtisMidia /> */}
    </div>
  );
}

// Componet to back to previos component
const BackSection = ({ id }) => {
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
        <h2 className={`text-lg font-medium  duration-500 `}>Artist Name</h2>
      </div>
    </>
  );
};


// const ArtisMidia = ()=> {
//     return(
//         <ul >
//             <li>
//                 <BsInstagram/>
//             </li>
//         </ul>
//     )
// }