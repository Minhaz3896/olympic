import React from "react";

const Catalog = () => {
  return (
    <div name="catalog" className="w-full h-full p-4   bg-gray-200 ">
      <div className="lg: flex justify-around  gap-2 p-4">
        <div className="min-h-[290px] w-96 lg:min-h-[600px] flex flex-col justify-end bg-[url('https://i.ibb.co/VNk2nGF/pro.jpg')] bg-contain bg-no-repeat ">
          <a
            href="https://drive.google.com/uc?export=download&id=1u5WZ1rAVyOX_WQoeZNGHYh-d4lM2k1Zq"
            download
            className="bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
          >
            Download
          </a>
        </div>
        <div className="min-h-[290px] w-96 lg:min-h-[600px] flex flex-col justify-end bg-[url('https://i.ibb.co/wWvRJpQ/Dextech-page-0001.jpg')] bg-contain bg-no-repeat">
          <a
            href="https://drive.google.com/uc?export=download&id=146IYN-TIXQ_jK3B8wsbrQikW4sT65z7j"
            download
            className="bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
          >
            Download
          </a>
        </div>
        <div className="min-h-[290px] w-96 lg:min-h-[600px] flex flex-col justify-end bg-[url('https://i.ibb.co.com/C1XVQwT/Capture.jpg')] bg-contain bg-no-repeat">
          <a
            href="https://drive.google.com/uc?export=download&id=1i71JufGobzhZpDxAjovWKJUTb2n4Y1iq"
            download
            className="bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
