import React from "react";

const Home = () => {
  return (
    <div
      name="home"
      className='w-full h-screen flex flex-col justify-center bg-fixed bg-cover bg-center bg-no-repeat bg-[url("https://cdn.pixabay.com/photo/2014/07/31/21/43/tanks-406908_1280.jpg")]'
    >
      <div className=" flex flex-col  items-center  md:flex-row  justify-evenly md:items-start gap-4">
        <div className="max-w-[950px]   px-12 bg-[#0a192f]/60 md:mt-14 ">
          <h1 className="text-lg sm:text-4xl font-bold inline border-b-2 border-orange-400 py-2 text-orange-200 ">
            OLYMPIC ASSOCIATES
          </h1>
          <p className="text-white text-sm py-4  lg:text-base ">
            Olympic Associates and Mechatech Engineers was formed in 2001 as an
            importer and supplier of Industrial utility based products and
            incorporated as CEMCO Group in 2015. It’s key activities is to
            supply, design and installation and services of all types of Pumps,
            Vulbs, Compressor, Hose Pipes ect. to the private and public sectors
          </p>
        </div>
        <div className='w-48 h-48 bg-orange-400 bg-contain bg-no-repeat  bg-[url("https://i.imgur.com/GPfmAlH.jpeg")] md:w-80 md:h-80'></div>
      </div>
    </div>
  );
};

export default Home;
