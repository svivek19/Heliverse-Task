import React from "react";
import thunder from "../assets/motionarteffect-img9.png";
import like from "../assets/motionarteffect-img6.png";
import moon from "../assets/motionarteffect-img7.png";

const details = [
  {
    id: 1,
    img: thunder,
    heading: "Light Weight",
    explanation: "Motion Art for Elementor is designed to be lightweight.",
  },
  {
    id: 2,
    img: like,
    heading: "100% Responsive",
    explanation: "Create a consistent visual experience across all devices.",
  },
  {
    id: 3,
    img: moon,
    heading: "User Friendly Interface",
    explanation:
      "Ensure a smooth experience for both applicants and administrators.",
  },
];

const Features = () => {
  return (
    <div className="w-11/12 mx-auto my-20">
      <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-5 space-y-5 md:space-y-0">
        {details.map((data) => (
          <div
            key={data.id}
            className="flex-1 bg-[#19122A] rounded-3xl px-4 py-6 border border-slate-800 space-x-6"
          >
            <img src={data.img} alt={data.heading} />
            <h4 className="text-2xl text-slate-200 font-sora mx-6">
              {data.heading}
            </h4>
            <p className="text-lg text-slate-400 font-outfit mx-6">
              {data.explanation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
