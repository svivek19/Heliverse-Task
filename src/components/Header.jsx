import React from "react";
import MotionArt from "../assets/MotionArtEffect-logo.png";

const Header = () => {
  return (
    <div className="w-11/12 mx-auto my-8 flex justify-between">
      <img src={MotionArt} alt="logo" />
      <button className="bg-white px-8 font-outfit text-lg py-3 rounded hover:bg-transparent border border-slate-300 hover:text-slate-200 transition-all">
        Purchase Now
      </button>
    </div>
  );
};

export default Header;
