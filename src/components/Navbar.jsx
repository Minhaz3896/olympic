import React, {useState} from 'react'
import{FaBars,FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png'


const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav) 



  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      
      <div>
        <img src={logo} alt="Logo" style={{width: '50px'}}/>
      </div>

      {/* Menu */}
      <div>
        <ul className='hidden gap-4 font-bold md:flex'>
          <li>Home</li>
          <li>About</li>
          <li>Partners</li>
          <li>Catalog</li>
          <li>Contact</li>
        </ul>
      </div>

          {/* Hamburger */}

        <div onClick={handleClick} className='md:hidden z-10 '>
          {!nav ? <FaBars/> : <FaTimes/>}
        </div>


        {/* mobile menu */}
        <div>
          <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'} >
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Partners</li>
            <li className='py-6 text-4xl'>Catalog</li>
            <li className='py-6 text-4xl'>Contact</li>
          </ul>
        </div>


    </div>

  )
}

export default Navbar