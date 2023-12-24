import React from 'react'

function Newsletter() {
  return (
    <div className='mx-36 text-center mt-20 bg-gradient-to-b from-pink-400 to-zinc-300 py-16 '>
        <h2 className='text-5xl font-extrabold mb-8'>Get Exclusive Offers On Your Email</h2>
        <h2 className='text-xl font-medium mb-4'>Subscribe to our newsletter and stay updated</h2>
        <div>
            <input type="email" placeholder='Your Email id' id="email" className='w-96 px-4 py-4 outline-none rounded-full'/>
            <button className='px-8 py-4 bg-black rounded-full -ml-12 text-white'>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter