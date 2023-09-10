import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[100px] w-full px-4 grid grid-cols-2 gap-8'>
                
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-orange-400'>About</p>
                </div>
            </div>

            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-2xl font-bold'>
                    <p>OUR CONCERNS</p>

                    <ul className='list-disc font-thin text-xl px-5 pt-2'>
                        <li >Square Bullets</li>
                        <li >Disc Bullets</li>
                        <li >Square Bullets</li>
                    </ul>
                </div>

                <div className='italic '>
                    <p>Our visions are to assist clients with various implementations of their projects, and we have confidence in 
                        our ability to generate the consensus and commitments necessary to succeed. We are prepared to stand 
                        behind our recommendations and to assist our clients with obtaining appropriate approvals to proceed
                    </p>
                </div>
            </div>

        </div>

    </div>
  )
}

export default About
