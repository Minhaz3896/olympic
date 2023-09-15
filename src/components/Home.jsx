import React from 'react'
// import {HiArrowNarrowRight} from 'react-icons/hi'


const Home = () => {
  return (
    <div name = 'home' className='w-full h-screen bg-[#0a192f]'>

        {/* container */}
        <div className='max-w-[1000px] max-auto px-8 flex flex-col justify-center h-full'>
            <h1 className='text-4xl sm:text-7xl font-bold text-orange-200'>OLYMPIC ASSOCIATES</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-white '>something something</h2>
            <p className='text-white py-4 max-w-[700px]'>Olympic Associates and Mechatech Engineers was formed in 2001 as an importer and supplier of Industrial utility based products and incorporated as CEMCO Group in 2015. It’s key activities is to supply, 
design and installation and services of all types of Pumps, Vulbs, Compressor, Hose Pipes ect. to the 
private and public sectors</p>

        </div> 


    </div>
  )
}

export default Home