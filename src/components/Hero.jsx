import React from "react";

const Hero = () => {
  return (
    <div className="pt-10 w-5/6 mx-auto flex">
      <div className="flex flex-col space-y-3">
        <h5 className="w-2/3 text-transparent bg-clip-text bg-gradient-text text-lg font-medium font-outfit">
          Transform Your Website
        </h5>
        <p className="text-slate-300 w-2/3 text-lg font-outfit">
          With Motion Art Effect
        </p>
      </div>
      <div className="w-7/12 mx-auto font-sora font-semibold">
        <h2 className="text-5xl text-slate-200 leading-normal">
          Attract Your Visitors Attention With Colorful
        </h2>
        <h2 className="text-transparent text-5xl my-3 bg-clip-text bg-gradient-text">
          Motion Art Effect
        </h2>
        <p className="text-slate-600 font-normal font-outfit py-3 text-lg">
          Unleash the power of creativity with Motion Art for Elementor - your
          ultimate solution for seamlessly integrating captivating animations
          into your website.
        </p>
      </div>
    </div>
  );
};

export default Hero;
