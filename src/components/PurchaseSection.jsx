import React from "react";
import img from "../assets/motionarteffect-img5.png";

const PurchaseSection = () => {
  return (
    <div className="w-11/12 my-32 mx-auto flex justify-between text-slate-200">
      <div className="w-[60%] flex flex-col space-y-7">
        <h4 className="text-4xl font-sora">
          Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
        </h4>
        <p className="font-outfit text-lg text-slate-400">
          Motion Art for Elementor is a groundbreaking plugin that empowers you
          to effortlessly infuse your website with visually stunning motion art
          elements.
        </p>
        <div>
          <button className="bg-gradient-image px-6 py-4 text-xl rounded-2xl font-sora">
            Purchase From Envato &rarr;
          </button>
        </div>
      </div>

      <div>
        <img src={img} alt="image" />
      </div>
    </div>
  );
};

export default PurchaseSection;
