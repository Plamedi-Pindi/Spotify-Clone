// Icons
import { BsX, BsPencil } from "react-icons/bs";

// Hooks
import { useState } from "react";

export default function EditProfile({ display, width, onCloseClick }) {
  const [name, setNamee] = useState("Plamedi Pindi");
  const [isWritting, setIsWritting] = useState(false);

  const handleNameChange = (e) => {
    setIsWritting(true);
    setNamee(e.target.value);
  };



  return (
    <div className={`${display} ${width} p-3 h-dvh z-100`}>
      <div className="flex justify-between items-center">
        {/* Render close Edit page icon */}
        <BsX
          onClick={() => {
            setIsWritting(false);
            onCloseClick();
          }}
          className="text-4xl"
        />
        {/* Render page Subtitle */}
        <p className="text-base font-bold">Edit profile</p>
        {/* Render save icon */}
        <button
          className={`text-sm  ${
            isWritting ? "text-white" : "text-neutral-400"
          } `}
        >
          Save
        </button>
      </div>

      {/* Image */}
      <div className="flex items-center justify-center mt-8 ">
        <div className="w-32 h-32 bg-red-500 text-neutral-900 flex items-center justify-center rounded-full text-4xl font-bold relative">
          <p>P</p>

          <button className="absolute right-0 text- text-lg bottom-1 bg-white w-8 h-8 rounded-md flex items-center justify-center">
            <BsPencil />
          </button>
        </div>
      </div>

      <div className="border-b mt-10 p-1 pb-3 border-neutral-400 text-sm">
        <label className="font-bold">Name</label>
        <input
          value={name}
          onChange={handleNameChange}
          type="text"
          placeholder="Enter you name"
          className="bg-transparent ml-8 outline-none p-1"
        />
      </div>
    </div>
  );
}
