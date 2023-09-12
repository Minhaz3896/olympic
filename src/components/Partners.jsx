import React from 'react'
import logo from '../assets/logo.png'

const Partners = () => {
  return (
    <div name='partners' className='w-full h-screen'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pr-3 '>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-600 '> Partners</p>
            </div>

          {/*Icon container  */}
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className=' shadow-md shadow-[grey] hover:scale-110 duration-500 '>
                  <img className='w-20 mx-auto' src={logo} alt='icon'/>
                  <p className='my-4'>Partner</p>
              </div>
              <div className=' shadow-md shadow-[grey] hover:scale-110 duration-500 '>
                  <img className='w-20 mx-auto' src={logo} alt='icon'/>
                  <p className='my-4'>Partner</p>
              </div>
              <div className=' shadow-md shadow-[grey] hover:scale-110 duration-500 '>
                  <img className='w-20 mx-auto' src={logo} alt='icon'/>
                  <p className='my-4'>Partner</p>
              </div>
              <div className=' shadow-md shadow-[grey] hover:scale-110 duration-500 '>
                  <img className='w-20 mx-auto' src={logo} alt='icon'/>
                  <p className='my-4'>Partner</p>
              </div>
              <div className=' shadow-md shadow-[grey] hover:scale-110 duration-500 '>
                  <img className='w-20 mx-auto' src={logo} alt='icon'/>
                  <p className='my-4'>Partner</p>
              </div>
              <div className=' shadow-md shadow-[grey] hover:scale-110 duration-500 '>
                  <img className='w-20 mx-auto' src={logo} alt='icon'/>
                  <p className='my-4'>Partner</p>
              </div>

            </div>
        </div>
    </div>
  );
};

export default Partners;