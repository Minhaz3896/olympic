import React from "react";

const Product = () => {
  return (
    <div
      name="product"
      className="w-full h-full sm:h-screen bg-[#0a192f] text-gray-300"
    >
      {/* Container */}
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-2xl font-bold inline border-b-4  border-orange-400  md:text-4xl  ">
            Products Include
          </p>
          <li className="p-1 pt-2 font-semibold">
            Flame Arrester & Breather valve.
          </li>
          <li className="p-1 font-semibold">Tank Accessories.</li>
          <li className="p-1 font-semibold">All Types of Valves.</li>
          <li className="p-1 font-semibold">All Types of Pumps.</li>
          <li className="p-1 font-semibold">Internal Floating Cover / Roof.</li>
          <li className="p-1 font-semibold">Floating Suction.</li>
          <li className="p-1 font-semibold">Petroleum Oil Hose Pipes.</li>
          <li className="p-1 font-semibold">Fire Fighting Equipments.</li>

          <section className=" py-10 md:pt-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-start border border-gray-300 p-2 rounded-lg transition-all duration-300 hover:border-blue-500 hover:shadow-lg">
                <img
                  src="https://i.ibb.co.com/HH4hJNg/csm-DE-S-gerendert-png-45dd34a1c4.png"
                  alt="High Velocity Pressure Relief Valve"
                  className="w-full h-64 bg-white object-cover rounded-lg transition-all duration-300 hover:scale-105"
                />
                <p className="text-sm mt-2 text-center transition-all duration-300 hover:text-blue-500">
                  High Velocity Pressure Relief Valve
                </p>
              </div>
              <div className="flex flex-col items-start border border-gray-300 p-2 rounded-lg transition-all duration-300 hover:border-blue-500 hover:shadow-lg">
                <img
                  src="https://i.ibb.co.com/Sw6M38M/csm-DA-SB-front-gerendert-png-1df9e94635.png"
                  alt="In-Line Detonation Flame Arrester"
                  className="w-full h-64 bg-white object-cover rounded-lg transition-all duration-300 hover:scale-105"
                />
                <p className="text-sm mt-2 text-center transition-all duration-300 hover:text-blue-500">
                  In-Line Detonation Flame Arrester
                </p>
              </div>
              <div className="flex flex-col items-start border border-gray-300 p-2 rounded-lg transition-all duration-300 hover:border-blue-500 hover:shadow-lg">
                <img
                  src="https://i.ibb.co.com/QffKHwB/csm-PM-S-gerendert-png-1f58915216.png"
                  alt="Pressure/Vacuum Relief Valve, Pilot-operated diaphragm valve"
                  className="w-full h-64 bg-white object-cover rounded-lg transition-all duration-300 hover:scale-105"
                />
                <p className="text-sm mt-2 text-center transition-all duration-300 hover:text-blue-500">
                  Pressure/Vacuum Relief Valve, Pilot-operated diaphragm valve
                </p>
              </div>
              <div className="flex flex-col items-start border border-gray-300 p-2 rounded-lg transition-all duration-300 hover:border-blue-500 hover:shadow-lg">
                <img
                  src="https://i.ibb.co.com/tmqwXwW/csm-BE-HK-gerendert-png-4dc5cabf58.png"
                  alt="Deflagration Flame Arrester, endurance burning proof, End-of-Line"
                  className="w-full h-64  bg-white object-cover rounded-lg transition-all duration-300 hover:scale-105"
                />
                <p className="text-sm mt-2 text-center transition-all duration-300 hover:text-blue-500">
                  Deflagration Flame Arrester, endurance burning proof,
                  End-of-Line
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Product;
