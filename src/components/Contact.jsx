import React from 'react'

const Contact = () => {
  return (
  <div name='contact' className='max-w-[1000px] mx-autow-full h-screen flex flex-col justify-center items-center'>

        <div>
          <div className='pb-6 px-4 text-left'>
              <p className='text-4xl font-bold inline border-b-4 border-orange-400  text-gray-800 '>Contact</p>
          </div>
          
          <div className='text-left  flex-col py-5 px-5 block float-left clear-both'>
                  <p className='text-2xl gap-2'>Address:</p>  
                  <p >Kamal Chamber (2nd Floor), 61 Jubilee Road, Chittagong-4000</p>
                  <p>Shopno Chaya (Ground Floor), House # 03, Road # 01, Block # B, 
                    Banasree, Rampura, Dhaka</p>
                  <p className='text-2xl pt-2'>Email:</p>
                  <a className='' href = "mailto: olympicassociates570@gmail.com">olympicassociates570@gmail.com</a>
                  <p className='text-2xl pt-2'>Telephone:</p>
                  <p>031 618375, 2865220, 2853063</p>
                  <p className='text-2xl pt-2'>Mobile:</p>
                  <p>+88 01711 748267</p>
          </div>

      </div>
    </div>
  )
}

export default Contact