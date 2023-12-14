import React from 'react'
import char from '../../assets/exclusive_image.png'
function Offer() {
  return (
    <div className="px-32 py-4 mt-20">
        <div className="bg-gradient-to-b w-[80vw] rounded-xl from-pink-400 to-slate-200 flex justify-between px-32">
           <div className='flex flex-col py-20 gap-y-4'>
                <h2 className='font-bold text-6xl'>Exclusive <br/>
                Offer For You
                </h2>
                <h2 className='text-xl font-bold'>
                    ONLY ON BEST SELLERS PRODUCT
                </h2>
                <div>
                    <button className='font-bold text-lg px-8 py-2 bg-red-400 rounded-2xl hover:bg-red-500'>Check Now</button>
                </div>
            </div>
            <div className="w-72">
                <img src={char} alt="" />
            </div>
        </div>
    </div>
    
  )
}

export default Offer