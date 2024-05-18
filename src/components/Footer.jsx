import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-image text-slate-200 p-4 flex justify-between">
      <p className="font-sora text-xs">
        © {new Date().getFullYear()} svivek19. All rights reserved by
        Vivekananthan S
      </p>
      <p className="flex space-x-5 font-outfit text-xs">
        <span>Documentation</span>
        <span>Support</span>
      </p>
    </div>
  );
};

export default Footer;
