// COMPONENTS
import LoggedUserIcon from "../../../components/SpotLogged/LoggedDisplayComponent";

// Hooks
import { useNavigate } from "react-router-dom";

// Icos
import {
  BsPlus,
  BsClockHistory,
  BsGear,
  BsLightningCharge,
  BsX,
} from "react-icons/bs";

export default function SpotSidebarMenu({ display, dimension, onClose, setSideMenu }) {
  const navigate = useNavigate();

  const handleProfileNavigate = () => {
    setSideMenu(false)
    navigate("/Spotify-Clone/userprofile")
  }

  return (
    <div className={`bg-neutral-900 shrink-0 duration-500 ${dimension}`}>
      <div className={`${display} `}>
        {/* User profile  */}
        <div className="h-24 border-b border-neutral-600 p-2 flex items-center justify-between">
          <div
            onClick={handleProfileNavigate}
            className="flex items-center hover:opacity-40 "
          >
            {/* User image ou name initial leter  */}
            <LoggedUserIcon dimension={"h-12 w-12"} text={"text-xl"} />

            {/* User name */}
            <div>
              <h2 className="text-lg font-bold">User Name</h2>
              <p className="text-sm text-neutral-500">View profile</p>
            </div>
          </div>

          {/* Render icon to close the sidebar */}
          <button onClick={onClose}>
            <BsX className="text-4xl text-neutral-500 " />
          </button>
        </div>

        {/* Others options */}
        <ul className="p-5 text-sm text-neutral-300 ">
          {/*  */}
          <li className="flex items-center mb-4">
            <BsPlus className="text-4xl mr-2 -ml-2" />
            <p>Add account</p>
          </li>

          {/*  */}
          <li className="flex items-center mb-6">
            <BsLightningCharge className="text-2xl mr-3" />
            <p>what's new</p>
          </li>

          {/*  */}
          <li className="flex items-center mb-6">
            <BsClockHistory className="text-xl mr-3.5 " />
            <p> Listening history</p>
          </li>

          {/*  */}
          <li className="flex items-center mb-3">
            <BsGear className="text-xl mr-3.5" />
            <p> Settings and privacy</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
