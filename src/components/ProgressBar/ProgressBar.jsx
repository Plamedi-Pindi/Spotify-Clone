// Hooks
import { useState } from "react";

export const ProgressBar = ({width, onMouseOver}) => {

  return (
    <div
      className={`w-1/2 h-full ${
        onMouseOver ? "bg-green-600" : " bg-white"
      } rounded-lg flex justify-end items-center transition-300`}
      style={{ width: `${width}` }}
    >
      <div
        className={` ${
            onMouseOver ? "block" : " hidden"
        } w-3 h-3 rounded-full bg-white`}
      ></div>
    </div>
  );
};
