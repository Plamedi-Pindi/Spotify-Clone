// Hooks
import { useNavigate } from "react-router-dom";

// Spotify Logo
import logo from "/logo.png";

// Components
import LoggedUserIcon from "../../../components/SpotLogged/LoggedDisplayComponent";

// React Bootstrap icons
import {
  BsHouseDoorFill,
  BsBell,
  BsArrowDownCircle,
  BsSearch,
  BsBox2Heart,
} from "react-icons/bs";

export default function SpotNavbar() {
  const navigate = useNavigate();

  // Active state
  function HandleHomeClick() {
    navigate("/Spotify-Clone");
  }

  return (
    <div className="hidden md:flex md:h-10vh  flex-row items-center justify-between  ">
      {/* Spotify Log */}
      <img src={logo} alt="Logo img" className="w-8 ml-7" />

      <div className="flex flex-row items-center">
        {/* Home button */}
        <button
          className="bg-neutral-800 w-11 h-11 rounded-full mr-2 hover:scale-105 duration-300"
          onClick={HandleHomeClick}
        >
          <BsHouseDoorFill className="text-2xl ml-2.5 " />
        </button>

        {/* Search bar */}
        <div className="w-28rm relative flex items-center bg-neutral-800 mr-8 h-11 rounded-full">
          <button className="pl-3 pr-3">
            <BsSearch className=" left-0 z-10 text-2xl text-neutral-400 hover:text-neutral-100 duration-300" />
          </button>
          <input
            type="text"
            className="h-6 w-23rm outline-none border-r border-neutral-300/50 bg-neutral-800 text-neutral-100"
            placeholder="What do you whant to play?"
          />
          <button className=" h-full w-10 rounded-e-full">
            <BsBox2Heart className=" right-0 z-10 text-xl m-3 text-white text-neutral-400 hover:text-neutral-100  hover:scale-105 duration-300" />
          </button>
        </div>

        {/* Premium button */}
        <button className="hidden xl:block bg-white text-black text-sm font-bold p-1.5 pr-4 pl-4  rounded-2xl mr-6 hover:scale-105 duration-300 ">
          Explore Premium
        </button>

        {/* Link to install App */}
        <a
          href="#"
          className="hidden lg:flex mr-10  items-center font-bold text-sm text-white hover:underline hover:scale-105 duration-300"
        >
          <BsArrowDownCircle className="mr-1 text-base text-white font-extrabold" />
          Install App
        </a>

        {/* Notification icon */}
        <BsBell className="mr-6 text-lg text-neutral-400 font-bold hover:scale-110 hover:text-neutral-100 duration-300" />

        {/* Logged user control */}
        <LoggedUserIcon dimension={'w-7 h-7 '} />
        
      </div>
    </div>
  );
}
