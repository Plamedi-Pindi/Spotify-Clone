// Icons
import { BsArrowLeft, BsDot, BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";

//Components
import LoggedUserIcon from "../../components/SpotLogged/LoggedDisplayComponent";
import MusicItemsDisplay from "../../components/MusicalItemDisplay/MusicItemsDisplay";
import Section from "../../components/section/Section";
import EditProfile from "./components/EditProfile";

// Hooks
import { useNavigate } from "react-router-dom";

export default function ProfileViews() {
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handlecloseEditClick = () => {
    setIsEditing(false);
  };

  const handlePreviousPage = ()=> {
    history.back();
 }

  return (
    <div
      className={`w-full h-dvh  scrollbar-hide scrollBehaviour overflow-y-scroll   duration-500 ${
        isEditing ? " w-0" : "pb-32"
      }`}
    >
      <div className={`${isEditing ? "hidden" : "block"} `}>
        {/* Main Content */}
        <div className="bg-gradient-to-b from-20% from-orange-600/90 w-full h-64 p-4">
          <button onClick={handlePreviousPage}>
            <BsArrowLeft className="text-3xl" />
          </button>

          <div className="flex items-center">
            <LoggedUserIcon dimension={"w-24 h-24"} text={"text-4xl"} />

            {/* User name */}
            <div onClick={handleEditClick} className="text-sm text-neutral-400">
              <h2 className="text-2xl mb-1 font-bold text-white">
                Plamedi Pindi
              </h2>
              <div className="flex items-end">
                <p>
                  <span className="text-white">255</span> followers
                </p>
                {/* Dot icon */}
                <BsDot className="text-xl text-white -mb-1" />
                <p>
                  <span className="text-white">155</span> following
                </p>
              </div>
            </div>
          </div>

          {/* Profile settings start*/}
          <div className="flex items-center mt-6">
            <button
              onClick={handleEditClick}
              className="text-sm border border-neutral-400 p-1 pt-1.5 pb-1.5 w-16 rounded-full mr-5"
            >
              Edit
            </button>

            <BsThreeDotsVertical className="text-2xl text-neutral-400" />
          </div>
          {/* Profile settings end*/}
        </div>
        {/* Main Container end */}

        {/* PlayLists */}
        <Section subTitle={"Playlists"} margin={"mt-4 pl-3 pr-3"}>
          <MusicItemsDisplay
            imgUrl={"https://i.imgur.com/chVhfoF.jpg"}
            imgDimension={"w-14 h-14  object-cover mr-3 rounded-md"}
            title={"Music Fest"}
            adicionalTxt={"0 Saves"}
            titleFont={"text-base font-bold"}
            AdicTxtFont={"text-sm "}
            display={"flex items-center"}
            box={"mb-4"}
          />
          <MusicItemsDisplay
            imgUrl={"https://i.imgur.com/ojKno3G.jpg"}
            imgDimension={"w-14 h-14  object-cover mr-3 rounded-md"}
            title={"Celebration"}
            adicionalTxt={"0 Saves"}
            titleFont={"text-base font-bold"}
            AdicTxtFont={"text-sm "}
            display={"flex items-center"}
            box={"mb-4"}
          />
          <MusicItemsDisplay
            imgUrl={"https://i.imgur.com/9K9d5Al.jpg"}
            imgDimension={"w-14 h-14  object-cover mr-3 rounded-md"}
            title={"Celebration"}
            adicionalTxt={"0 Saves"}
            titleFont={"text-base font-bold"}
            AdicTxtFont={"text-sm "}
            display={"flex items-center"}
            box={"mb-4"}
          />

          <button className="block mt-6 mx-auto border border-neutral-400 w-36 pt-1.5 pb-1.5 rounded-full text-sm focus:opacity-50 mb-6">
            See all playlists
          </button>
        </Section>
      </div>

      {/* Edit Profile Page */}
      <EditProfile
        display={`${isEditing ? "block" : "hidden"}`}
        onCloseClick={handlecloseEditClick}
      />
    </div>
  );
}
