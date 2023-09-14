import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen  text-center justify-center items-center p-4 pt-6'>
        <div className='pb-6'>
            <p className='text-4xl text-center font-bold inline border-b-4 border-pink-600 '>Contact</p>
        </div>
        
        <div className='text-left  flex-col py-5 px-5 block float-left clear-both sm:bg-red-500 justify-center items-center'>
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
  )
}

export default Contact