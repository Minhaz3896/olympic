import React from "react";

const About = () => {
  return (
    <div name="about" className="w-auto h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col  md:flex-row h-full justify-center items-center   ">
        <div className=' w-64 h-64 rounded-3xl bg-[url("https://images.pexels.com/photos/1563355/pexels-photo-1563355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")]'></div>

        <div className="max-w-[1000px]   gap-8 px-4">
          <div className="py-4">
            <p className="text-2xl w-auto font-bold flex justify-center items-center  md:items-stretch md:justify-normal md:text-4xl ">
              <span className="nline border-b-4 border-orange-400">
                CEO. Mizanur Rahman
              </span>
            </p>
          </div>
          <div className="italic flex flex-col items-center gap-1.5 md:items-stretch">
            <p>
              We are a 1st. class Govt. contractor, Importer, Supplier, local
              and foreign company's distributor, marketing agent & Petroleum oil
              and LPG refueling station.
            </p>
            <h1 className="font-medium pt-4 text-orange-300">
              Company Details
            </h1>
            <p>Olympic Associates M/S. </p>
            <p>Jobaida Filling Station</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
