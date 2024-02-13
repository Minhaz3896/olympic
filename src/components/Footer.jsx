import React from "react";

const Footer = () => {
  return (
    <div className="text-xs justify-around items-center py-1 bg-black text-white flex  md:text-base">
      <div>
        <p> © COPYRIGHT 2024</p>
      </div>
      <div className="flex gap-2">
        <p>About</p>
        <p>Partners</p>
        <p>Catalog</p>
      </div>
    </div>
  );
};

export default Footer;
