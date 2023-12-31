import React from 'react'
import {data} from './Data'

const Catalog = () => {
  return (
    <div name='catalog' className='w-full h-screen max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center '>
        <div className=' p-4 '>
            <p className='text-4xl font-bold inline border-b-4  border-pink-600 text-gray-600 '>Catalog</p>
        </div>

        <div className='relative flex '>
            <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth'>
                {data.map((item) => (
                <img className='w-[220px] h-[220px] inline-block p-2  cursor-pointer hover:scale-105 ease-in-out duration-300 object-cover' 
                src={item.img} alt='/'/>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Catalog