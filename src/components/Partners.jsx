import React from "react";
import skf from "../assets/skf.png";
import ultrafloat from "../assets/ultrafloat.jpg";
import protego from "../assets/protego.png";
import apex from "../assets/apex.png";
import abb from "../assets/abb.png";
import dextech from "../assets/dextech.png";
import larsen from "../assets/larsen.png";
import tnt from "../assets/tnt.png";
import pumpen from "../assets/pumpen.png";
import johnson from "../assets/johnson.png";
import KSB from "../assets/KSB.png";

const Partners = () => {
  return (
    <div name="partners" className="w-full h-full sm:h-screen bg-gray-200">
      {/* Container */}
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pr-3 ">
          <p className="text-2xl font-bold inline border-b-4 border-orange-400 text-gray-800 md:text-4xl">
            Our Channel Partners
          </p>
        </div>

        {/*Icon container  */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {/* <div className=" shadow-md shadow-[grey] hover:scale-110 duration-500 ">
            <img className="pt-2 w-20 mx-auto" src={fourcaps} alt="fourcaps" />
            <p className="italic my-4 font-bold">FOUR CAPS</p>
          </div> */}

          <div className=" shadow-md shadow-[grey] hover:scale-110 duration-500 ">
            <img className="pt-2 w-20 mx-auto" src={protego} alt="protego" />
            <p className="italic my-4 font-bold">PROTEGO</p>
          </div>

          <div className=" shadow-md shadow-[grey] hover:scale-110 duration-500 ">
            <img
              className="pt-2 w-20 mx-auto"
              src={ultrafloat}
              alt="ultrafloat"
            />
            <p className="italic my-4 font-bold">ULTRAFLOTE</p>
          </div>
          <div className=" shadow-md shadow-[grey] hover:scale-110 duration-500 ">
            <img
              className="pt-2 h-20 w-20 mx-auto"
              src={dextech}
              alt="Dextech"
            />
            <p className="italic my-4 font-bold">DEXTECH</p>
          </div>

          <div className=" shadow-md shadow-[grey] hover:scale-110 duration-500 ">
            <img className="pt-2 w-20 mx-auto" src={apex} alt="apex" />
            <p className="italic my-4 font-bold">APEX PUMPS</p>
          </div>
          <div className=" shadow-md shadow-[grey] hover:scale-110 duration-500 ">
            <img className="pt-2 w-20 mx-auto" src={abb} alt="abb" />
            <p className="italic my-4 font-bold">ABB</p>
          </div>
          <div className=" shadow-md shadow-[grey] hover:scale-110 duration-500 ">
            <img className="pt-2 h-20 w-20 mx-auto" src={KSB} alt="KSB" />
            <p className="italic my-4 font-bold">KSB</p>
          </div>
          <div className=" shadow-md shadow-[grey] hover:scale-110 duration-500 ">
            <img className="pt-2 w-20 mx-auto" src={larsen} alt="larsen" />
            <p className="italic my-4 font-bold">LARSEN & TURBO</p>
          </div>
          <div className=" shadow-md shadow-[grey] hover:scale-110 duration-500 ">
            <img className="pt-2 w-20 mx-auto" src={pumpen} alt="vn" />
            <p className="italic my-4 font-bold">VN-PUMPEN</p>
          </div>
          <div className=" shadow-md shadow-[grey] hover:scale-110 duration-500 ">
            <img className="pt-2 w-20 mx-auto" src={tnt} alt="tnt" />
            <p className="italic my-4 font-bold">T & T Valve & Instrument</p>
          </div>
          <div className=" shadow-md shadow-[grey] hover:scale-110 duration-500 ">
            <img className="pt-2 w-20 mx-auto" src={johnson} alt="johnson" />
            <p className="italic my-4 font-bold">JOHNSON PUMP</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
