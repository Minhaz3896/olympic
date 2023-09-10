import React from 'react'
import logo from '../assets/logo.png'

const Partners = () => {
  return (
    <div name='partners'>
        {/* Container */}
        <div>
            <div>
            <p> Our Partners</p>
            </div>

            <div>
                <img src={logo} alt='icon'/>
            </div>
        </div>
    </div>
  )
}

export default Partners