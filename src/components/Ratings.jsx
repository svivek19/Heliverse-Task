import React from "react";
import img1 from "../assets/motionarteffect-img1.png";
import img2 from "../assets/motionarteffect-img2.png";
import img3 from "../assets/motionarteffect-img3.png";
import img4 from "../assets/motionarteffect-img4.png";

const images = [img1, img2, img3];

const Ratings = () => {
  return (
    <div className="my-32 w-11/12 mx-auto text-center">
      <div className="text-xl text-slate-200 font-outfit">
        <h4>Trusted by thousands of users around the world</h4>
      </div>

      <div className="flex justify-between my-16">
        {images.map((img, index) => (
          <div key={index}>
            <div className="flex items-center space-x-3">
              <div>
                <img src={img} alt="image" />
              </div>
              <div className="flex flex-col space-y-4">
                <img src={img4} alt="5 star" />
                <p className="font-sora text-start text-slate-400 text-base">
                  <span className="font-bold">4.5</span> Score, 9 Reviews
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ratings;
