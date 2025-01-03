import React from "react";

const Home = () => {
  return (
    <div
      name="home"
      className='w-full h-screen flex flex-col justify-center bg-fixed bg-cover bg-center bg-no-repeat bg-[url("https://cdn.pixabay.com/photo/2014/07/31/21/43/tanks-406908_1280.jpg")]'
    >
      <div className=" flex flex-col  items-center  md:flex-row  justify-evenly md:items-start gap-4">
        <div className="max-w-[950px]   px-12 bg-[#0a192f]/60 md:mt-14 ">
          <title className="text-lg sm:text-4xl font-bold inline border-b-2 border-orange-400 py-2 text-orange-200 ">
            OLYMPIC ASSOCIATES
          </title>
          <h1 className="text-white text-sm py-4  lg:text-base ">
            {/* Olympic Associates was formed in 2001 as an importer and supplier of
            Industrial utility based products . It's key activities is to
            supply, Industrial Process Pumps, All type of Valves, Electric
            induction Motor, Explosion proof Motors, Fire Pumps, Fire hydrant
            system equipment, Hose Pipes ect. to the private and public sectors.
            Participated in the 15th Asian Pharma Expo 2024 with Protego India */}
            Our company works as a channel Partner & Marketing agent of some
            foreign companies, like PROTEGO India & Germany. Ultraflote LLC,
            USA. DEXTECH India Pvt Ltd. Apex Pumps Ltd, UK. Govt. Contractor.
            Supplier, Importer & Exporter. Petroleum Oil & LPG
            refueling station.
          </h1>
        </div>
        {/* <div className='w-48 h-48 bg-contain bg-no-repeat  bg-[url("https://i.imgur.com/GPfmAlH.jpeg")] md:w-80 md:h-80'></div> */}
      </div>
    </div>
  );
};

export default Home;
