import React, { useContext } from 'react'
import star from '../../assets/star_icon.png'
import star_dull from '../../assets/star_dull_icon.png'
import { ShopContext } from '../../context/ShopContext'
function ProductInfo(props) {
    const {product} = props
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='flex px-32 py-8'>
        <div className='w-1/2 flex gap-4'>
            <div className=' flex flex-col gap-5'>
            <img src={product.image} className='w-28' alt="" />
            <img src={product.image} className='w-28' alt="" />
            <img src={product.image} className='w-28' alt="" />
            <img src={product.image} className='w-28' alt="" />
            </div>
            <div className='w-[100%]'>
                <img src={product.image}  alt="" className='w-[80%]'/>
            </div>
        </div>
        <div className='w-1/2'>
            <h2 className='text-4xl font-black leading-[50px] tracking-wide'>{product.name}</h2>
            <div className='flex gap-x-1 items-center'>
                <img src={star} className='w-4' alt="" />
                <img src={star} className='w-4' alt="" />
                <img src={star} className='w-4' alt="" />
                <img src={star} className='w-4' alt="" />
                <img src={star_dull} alt="" />
                <span>(122)</span>
            </div>
            <div className='flex gap-x-5 py-4 items-center'>
                <h2 className='text-xl text-gray-500 line-through font-extrabold'>${product.old_price}</h2>
                <h2 className='text-2xl font-extrabold text-red-500'>${product.new_price}</h2>
            </div>
            <div className='py-4 font-semibold text-gray-500'>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta laudantium assumenda quisquam voluptates</h2>
            </div>
            <div>
                <h2 className='text-2xl font-semibold text-gray-500 mb-4'>Select Size</h2>
                <div className='flex gap-x-5 mb-4'>
                    <button className='border border-gray-400 px-4 py-2 hover:border-red-400 ' >S</button>
                    <button className='border border-gray-400 px-4 py-2 hover:border-red-400 '>M</button>
                    <button className='border border-gray-400 px-4 py-2 hover:border-red-400 '>L</button>
                    <button className='border border-gray-400 px-4 py-2 hover:border-red-400 '>XL</button>
                    <button className='border border-gray-400 px-4 py-2 hover:border-red-400 '>XXL</button>
                </div>
                <button onClick={()=>{addToCart(product.id)}} className='px-4 py-2 bg-red-400 font-semibold text-white mb-8 '>ADD TO CART</button>
            </div>
            <h2 className='font-bold'>Category: <span className='font-semibold text-gray-500'>{product.category}</span></h2>
            <h2 className='font-bold'>Tags: <span className='font-semibold text-gray-500'>Modern , Latest</span></h2>
        </div>
    </div>
  )
}

export default ProductInfo