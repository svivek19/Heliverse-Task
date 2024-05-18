import React from "react";
import section from "../assets/motionarteffect-img11.png";
import page from "../assets/motionarteffect-img10.png";

const SectionAndPage = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="text-slate-200 flex flex-col space-y-2 text-4xl text-center">
        <h3>Apply On Any Section Or Enable </h3>
        <h3>For Whole Page</h3>
      </div>

      <div className="my-16 md:flex justify-between md:space-x-8">
        <div className="bg-[#0F0821] md:w-3/6 px-8 py-6 flex flex-col space-y-6 border border-slate-800 rounded-2xl">
          <h4 className="font-sora text-slate-200 text-2xl">
            Apply On Section
          </h4>
          <p className="font-outfit text-slate-400">
            Apply on section is a game-changer, offering an unparalleled way to
            manage applications directly from your website.{" "}
          </p>
          <img src={section} alt="" />
        </div>

        <div className="bg-[#0F0821] mt-8 md:mt-16 md:w-3/6 px-8 py-6 flex flex-col space-y-6 border border-slate-800 rounded-2xl">
          <h4 className="font-sora text-slate-200 text-2xl">Apply On Page</h4>
          <p className="font-outfit text-slate-400">
            Take your website to new heights with Motion Art for Elementor.
            Embrace the power of motion and animation.
          </p>
          <img src={page} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SectionAndPage;
