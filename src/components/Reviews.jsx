import React, { useState } from "react";

const Reviews = () => {
  const [showExtracontent, setshowExtracontent] = useState(false);

  return (
    <div className="w-full h-full flex flex-col justify-center  text-white items-center bg-[#0a192f]">
      <div className="max-w-[1300px] h-full m-10 ">
        <div className="w-full  text-xl py-5">
          <h1 className="text-4xl">Our Clients</h1>
          <p className="text-base font-medium text-orange-300 py-4">
            Client Refrence
          </p>
        </div>

        {/* Review Container */}
        <div className="w-full  grid grid-cols-1 sm:grid-cols-4 gap-6">
          <div className="bg-[#0a192f] p-4">
            <p className="font-light ">
              Supply of Pump Motor sets, Pump sets for ETP, Industrial Blower,
              Gate valve, safety equipment’s for steam and water line, Parts of
              Machinery and Many kinds Accessories,
            </p>
            <p className="font-medium pt-4 text-orange-300">SINHA Group</p>
            <p className="font-light ">Dhaka</p>
          </div>
          <div className="bg-[#0a192f] p-4">
            <p className="font-light ">
              Supply of Pump Motor sets, Pump sets for ETP, Industrial Blower,
              Gate valve, safety equipment’s for steam and water line, Parts of
              Machinery and Many kinds Accessories,
            </p>
            <p className="font-medium pt-4 text-orange-300">Bangla Cat</p>
            <p className="font-light ">Dhaka</p>
          </div>
          <div className="bg-[#0a192f] p-4">
            <p className="font-light ">
              Supply of Pump Motor sets, Pump sets for ETP, Industrial Blower,
              Gate valve, safety equipment’s for steam and water line, Parts of
              Machinery and Many kinds Accessories,
            </p>
            <p className="font-medium pt-4 text-orange-300">Apex Group</p>
            <p className="font-light ">Dhaka</p>
          </div>
          <div className="bg-[#0a192f] p-4">
            <p className="font-light ">
              Supply of Pump Motor sets, Pump sets for ETP, Industrial Blower,
              Gate valve, safety equipment’s for steam and water line, Parts of
              Machinery and Many kinds Accessories,
            </p>
            <p className="font-medium pt-4 text-orange-300">C&A Group</p>
            <p className="font-light ">Chittagong</p>
          </div>
          <div className="bg-[#0a192f] p-4">
            <p className="font-light ">
              Supply, Installation, Testing & Commissioning of Flame proof Pump
              sets with motor & starter for Fuel (Jet A -1 ) hydrant system at
              Shah Amanat International Airport, Chittagong to supply of fuel to
              air craf
            </p>
            <p className="font-medium pt-4 text-orange-300">
              Padma Oil Company Limited
            </p>
            <p className="font-light ">Bagnladesh</p>
          </div>
          <div className="bg-[#0a192f] p-4">
            <p className="font-light ">
              Supply, Installation, Testing & Commissioning of Flame proof Pump
              sets with motor & starter of Fuel (Jet A -1 ) hydrant system at
              Shah Jalal International Airport, Dhaka to supply fuel to air
              craft
            </p>
            <p className="font-medium pt-4 text-orange-300">
              Padma Oil Company Limited
            </p>
            <p className="font-light ">Bangladesh</p>
          </div>
          <div className="bg-[#0a192f] p-4">
            <p className="font-light ">
              Supplyof 18 sets Flame proof Pump sets (Centrifugal Pump )with
              motor & starter for Loading & Unloading system at Main
              Installation, Patenga Oil Depot, Chittagong
            </p>
            <p className="font-medium pt-4 text-orange-300">
              Padma Oil Company Limited
            </p>
            <p className="font-light ">Bangladesh</p>
          </div>
          <div className="bg-[#0a192f] p-4">
            <p className="font-light ">
              Supply of Flame proof Pump sets (Centrifugal Pump ) with motor &
              starter for Loading & Unloading system at Main Installation,
              Patenga Oil Depot, Chittagong. We supplied Pump motor sets to
              themost of Oil depot of Padma Oil company over the country
            </p>
            <p className="font-medium pt-4 text-orange-300">
              Padma Oil Company Limited
            </p>
            <p className="font-light ">Bangladesh</p>
          </div>
        </div>
        <div className="flex justify-end">
          {showExtracontent && <p>Hello World</p>}
          {/* <button
            onClick={() => {
              setshowExtracontent(!showExtracontent);
            }}
          >
            read more
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
