import React from 'react'
import hand from '../../assets/hand_icon.png'
import char from '../../assets/hero_image.png'

function Hero() {
  return (
    <div className="px-20 py-4">
        <div className='w-full h-screen bg-gradient-to-br from-pink-300 to-red-300 flex justify-between'>
            <div className='px-12 flex flex-col justify-center gap-y-4 w-1/2'>
                <h2 className='font-semibold text-2xl'>New ARRIVALS ONLY</h2>
                <div className='text-[5.6vw] font-extrabold '>
                     <span className='flex items-center'>
                        new
                    <img src={hand}alt="" className='mx-4 w-24'/>
                    </span>
                    collections for everyone
                </div>
                <div>
                    <button className='bg-red-400 py-2 px-8 rounded-3xl text-xl font-bold hover:bg-red-500 duration-300'>Latest Collection →</button>
                </div>
            </div>
            <div className='relative'>
                <img src={char} alt="" />
            </div>
        </div>
    </div>
    
  )
}

export default Hero