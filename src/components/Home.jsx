import React from 'react'
// import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
   
    <div name = 'home' className='w-full h-screen  flex flex-col justify-around bg-fixed bg-cover bg-center bg-no-repeat bg-[url("https://images.pexels.com/photos/1563355/pexels-photo-1563355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")]'>

        
        <div className='max-w-[1000px] mx-10  px-12 bg-[#0a192f]'>
            <h1 className='text-2xl sm:text-4xl font-bold py-2 text-orange-200'>OLYMPIC ASSOCIATES</h1>           
            <span className='border-t-2 block w-1/2 -2 border-orange-400 '></span>
            <p className='text-white py-4 max-w-[700px]'>Olympic Associates and Mechatech Engineers was formed in 2001 as an importer and supplier of Industrial utility based products and incorporated as CEMCO Group in 2015. It’s key activities is to supply, 
design and installation and services of all types of Pumps, Vulbs, Compressor, Hose Pipes ect. to the 
private and public sectors</p>

        </div> 
        


    </div>
   
  )
}
// max-w-[800px]  max-auto  px-8 flex flex-col justify-center h-full bg-[#0a192f]
export default Home