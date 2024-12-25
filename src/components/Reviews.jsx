import React, { useState } from "react";

const Reviews = () => {
  const [showExtracontent, setshowExtracontent] = useState(false);

  return (
    <div className="w-full h-full flex flex-col justify-center  text-white items-center bg-[#0a192f]">
      <div className="max-w-[1300px] h-full m-10 ">
        <div className="w-full  text-xl py-5">
          <h1 className="text-4xl">Our Clients</h1>
          <p className="text-base font-medium text-orange-300 py-4">
            Clients We are working with.
          </p>
        </div>
        {/* Review Container */}
        <div className="w-full  grid grid-cols-1 sm:grid-cols-4 gap-6">
          {/* <div className="bg-[#0a192f] p-4">
            <p className="font-light ">
              Supply of Pump Motor sets, Pump sets for ETP, Industrial Blower,
              Gate valve, safety equipment’s for steam and water line, Parts of
              Machinery and Many kinds Accessories,
            </p>
            <p className="font-medium pt-4 text-orange-300">SINHA Group</p>
            <p className="font-light ">Dhaka</p>
          </div> */}
          <div className="bg-[#0a192f] p-4">
            <p className="font-medium pt-4 text-orange-300">
              The IBN SINA Pharmaceutical PLC
            </p>
            <p className="font-light ">Dhaka</p>
          </div>
          <div className="bg-[#0a192f] p-4">
            <p className="font-medium pt-4 text-orange-300">
              The ACEME Laboratories Ltd.
            </p>
            <p className="font-light ">Dhaka</p>
          </div>
          <div className="bg-[#0a192f] p-4">
            <p className="font-medium pt-4 text-orange-300">
              Healthcare Chemicals Ltd
            </p>
            <p className="font-light ">Dhaka</p>
          </div>
          <div className="bg-[#0a192f] p-4">
            <p className="font-medium pt-4 text-orange-300">
              Modern Syntax Ltd.
            </p>
            <p className="font-light ">Dhaka</p>
          </div>
          <div className="bg-[#0a192f] p-4">
            <p className="font-medium pt-4 text-orange-300">
              Jamuna Oil Company Ltd.
            </p>
            <p className="font-light ">Dhaka</p>
          </div>
          <div className="bg-[#0a192f] p-4">
            <p className="font-medium pt-4 text-orange-300">
              Meghna Petroleum Ltd.
            </p>
            <p className="font-light ">Dhaka</p>
          </div>
          <div className="bg-[#0a192f] p-4">
            <p className="font-medium pt-4 text-orange-300">
              Padma Oil Company Ltd.
            </p>
            <p className="font-light ">Dhaka</p>
          </div>
          <div className="bg-[#0a192f] p-4">
            <p className="font-medium pt-4 text-orange-300">
              Incepta Chemicals Ltd.
            </p>
            <p className="font-light ">Dhaka</p>
          </div>
          <div className="bg-[#0a192f] p-4">
            <p className="font-medium pt-4 text-orange-300">
              Bashundhara group.
            </p>
            <p className="font-light ">Dhaka</p>
          </div>
          <div className="bg-[#0a192f] p-4">
            <p className="font-medium pt-4 text-orange-300">BSRM.</p>
            <p className="font-light ">Dhaka</p>
          </div>
          <div className="bg-[#0a192f] p-4">
            <p className="font-medium pt-4 text-orange-300">
              Western Marine Services Ltd. .
            </p>
            <p className="font-light ">Dhaka</p>
          </div>
          <div className="bg-[#0a192f] p-4">
            <p className="font-medium pt-4 text-orange-300">
              Abul Khare Group.
            </p>
            <p className="font-light ">Dhaka</p>
          </div>
        </div>
        <div className="flex justify-end"></div>
        <div />
        {showExtracontent && (
          <div>
            {/* Your extra content goes here */}
            <div className="w-full  grid grid-cols-1 sm:grid-cols-4 gap-6">
              <div className="bg-[#0a192f] p-4">
                <p className="font-medium pt-4 text-orange-300">SINHA Group</p>
                <p className="font-light ">Dhaka</p>
              </div>
              <div className="bg-[#0a192f] p-4">
                <p className="font-medium pt-4 text-orange-300">
                  Standard Asiatic Oil Company Ltd.
                </p>
                <p className="font-light ">Dhaka</p>
              </div>
              <div className="bg-[#0a192f] p-4">
                <p className="font-medium pt-4 text-orange-300">Bangla Cat</p>
                <p className="font-light ">Dhaka</p>
              </div>
            </div>
            <div className="flex justify-end"></div>
            <div />
          </div>
        )}
        <button
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          onClick={() => {
            setshowExtracontent(!showExtracontent);
          }}
        >
          {showExtracontent ? "Hide" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default Reviews;
