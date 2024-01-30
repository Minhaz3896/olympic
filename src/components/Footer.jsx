import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white flex  justify-around items-center py-1">
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
