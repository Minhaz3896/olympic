import React from "react";

const About = () => {
  return (
    <div name="about" className="w-auto h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col  md:flex-row h-full justify-center items-center   ">
        <div className=' w-64 h-64 rounded-3xl bg-[url("https://i.ibb.co.com/dcXgjzm/IMG-20241217-WA0000.jpg")] bg-cover bg-center bg-no-repeat'></div>

        <div className="max-w-[1000px]   gap-8 px-4">
          <div>
            <p className="text-2xl font-bold inline border-b-4  border-orange-400   md:items-stretch md:justify-normal md:text-4xl ">
              <span className="inline border-b-4 border-orange-400">
                Mizanur Rahman
              </span>
              <p className="pt-1 font-bold">CEO.</p>
            </p>
          </div>
          <div className="italic flex flex-col items-center gap-1.5 md:items-stretch">
            <p>
              We are the sole agent of PROTEGO India, Germany, ULTRAFLOTE LLC.
              USA & Dextech India Pvt Ltd. Also a 1st class Govt. Contractor,
              Supplier, Importer & Exporter.
            </p>
            <h1 className="font-medium pt-4 text-orange-300">
              Company Details
            </h1>
            <p>M/S. Olympic Associates </p>
            <p>M/S. Jobaida Filling Station</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
