import React, {useState} from 'react'
import{FaBars,FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png'
import{Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav) 



  return (
    <div className='fixed z-50 w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>  
     
      <div>
        <img src={logo} alt="Logo" style={{paddingTop:'20px' ,width: '125px'}}/>
      </div>

      {/* Menu */}
  
        <ul className='hidden md:flex'>
          <li>
          <Link to="home"  smooth={true}  duration={500}>
            Home
          </Link>
          </li>
          <li>
          <Link to="about"  smooth={true}  duration={500}>
            About
          </Link>
          </li>
          <li>
          <Link to="partners"  smooth={true}  duration={500}>
            Partners
          </Link>
          </li>
          <li>
          <Link to="catalog"  smooth={true}  duration={500}>
            Catalog
          </Link>
          </li>
          <li>
          <Link to="contact"  smooth={true} offset={50} duration={500}>
            Contact
          </Link>
          </li>
        </ul>
  

          {/* Hamburger */}

        <div onClick={handleClick} className='md:hidden z-10 '>
          {!nav ? <FaBars/> : <FaTimes/>}
        </div>


        {/* mobile menu */}

          <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen opacity-95 bg-[#0a192f] flex flex-col justify-center items-center'} >
            <li  className='py-6 text-4xl'>
              <Link onClick={handleClick} to="home"  smooth={true} offset={50} duration={500}>
               Home
              </Link>
            </li>

            <li className='py-6 text-4xl'>
               <Link onClick={handleClick} to="about"  smooth={true} offset={50} duration={500}>
                About
              </Link>
            </li>

            <li className='py-6 text-4xl'>
            <Link  onClick={handleClick} to="partners"  smooth={true} offset={50} duration={500}>
              Partners
            </Link>
            </li>

            <li className='py-6 text-4xl'>
            <Link  onClick={handleClick} to="catalog"  smooth={true} offset={50} duration={500}>
             Catalog
            </Link>
            </li>

            <li className='py-6 text-4xl'>
            <Link  onClick={handleClick} to="contact"  smooth={true} offset={50} duration={500}>
              Contact
            </Link>
            </li>
          </ul>
     


    </div>

  )
}

export default Navbar