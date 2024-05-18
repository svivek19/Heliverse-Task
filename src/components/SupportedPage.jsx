import React from "react";
import social from "../assets/motionarteffect-img8.png";

const SupportedPage = () => {
  return (
    <div className="bg-[#19122A] w-11/12 mx-auto my-32 px-10 py-12 border border-slate-800 rounded-3xl">
      <h3 className="text-center text-slate-200 font-sora text-2xl font-semibold">
        Supported by All Popular Browsers
      </h3>
      <p className="text-center text-slate-300 w-1/3 my-4 mx-auto font-[200] font-sora text-lg">
        Rest assured, Motion Art is designed to be compatible with all major web
        browsers.
      </p>
      <div className="flex justify-center pt-4">
        <img src={social} alt="" width={400} className="" />
      </div>
    </div>
  );
};

export default SupportedPage;
