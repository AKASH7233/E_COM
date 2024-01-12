import React, { useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

function CartCard() {
    const {all_product,addToCart,promo,setPromo,cartItems,totalAmount,removeFromCart,remove} = useContext(ShopContext)
    const [coupon,setCoupon] = useState('')
    const [search,setSearch] = useState(false)
    const validity = () => {
        (coupon == 'FLAT50') ? setPromo(true) : ''
        setSearch(true)
    }
    const style = promo ? 'text-green-400' : 'text-red-400'

    return (
        <div>
            <div className='flex font-bold text-lg mx-32 mb-2 pt-32 border-b'>
                <p className='w-40'>Products</p>
                <p className='w-96'>Title</p>
                <p className='w-40'>Price</p>
                <p className='w-40'>Quantity</p>
                <p className='w-40'>Total</p>
                <p className='w-40'>Remove</p>
            </div>
            {all_product.map((d)=>(
                (cartItems[d.id] > 0) ?
                    <div className='flex items-center font-bold text-lg mx-32 py-2 border-b'>
                        <div className='w-40'>
                            <img className= 'w-24 h-20' src={d.image} alt="product_img"/>
                        </div>
                        <div className='w-96'>
                            {d.name}
                        </div>
                        <div className='w-40 '>
                            ${d.new_price}
                        </div>
                        <div className='w-40 px-3 flex'>
                            <button onClick={()=>addToCart(d.id)}>+</button>
                            <h2 className='px-2 py-1 mx-1 border-2'>{cartItems[d.id]}</h2>
                            <button onClick={()=>removeFromCart(d.id)}>-</button>
                        </div>
                        <div className='w-40'>
                            ${d.new_price * cartItems[d.id]}
                        </div>
                        <div className='w-40 px-6'>
                            <button onClick={()=> {remove(d.id)}}>X</button>
                        </div>
                    </div> : ''
                
            ))}
            <div className='mx-32 pt-16 flex justify-between'>
                <div className='w-[25vw]'>
                    <h2 className='font-bold text-lg mb-12'>Cart Totals</h2>
                    <div className='flex gap-64 text-lg font-medium py-3 border-t border-b'>
                        <h2>Subtotal</h2>
                        <h2>${totalAmount()}</h2>
                    </div>
                    <div className='flex gap-[220px] text-lg font-medium py-3 border-t border-b whitespace-nowrap'>
                        <h2>Shipping Fee</h2>
                        <h2>Free</h2>
                    </div>
                    <div className='flex gap-72 text-lg font-medium py-3 border-t border-b'>
                        <h2>Total</h2>
                        <h2>${totalAmount()}</h2>
                    </div>
                    <button className='my-10 px-6 py-2 bg-red-400 font-semibold text-white'>
                        PROCEED TO CHECKOUT
                    </button>
                </div>
                <div>
                    <h2 className='text-gray-400'>If you have a promo code, Enter it here</h2>
                    <div className='my-4'>
                        <input className='bg-gray-200 px-4 py-2 w-72 text-black outline-none placeholder:text-black'
                        type="text" value={coupon} onChange = {(e)=>setCoupon(e.target.value)}placeholder='promo code'/>
                        <button className='bg-black text-white px-4 py-2' onClick={validity}>Submit</button>
                        <br />
                        {coupon.length == 0 ? `Enter 'FLAT50' For 50% OFF` : ``}
                        {search && <h2 className='mt-5 '>{promo ? 'COUPON APPILED !!' : 'ENTER VALID COUPON CODE'}</h2>}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartCard
