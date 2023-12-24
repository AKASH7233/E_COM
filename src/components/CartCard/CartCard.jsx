import React from 'react'

function CartCard() {
    const {all_product,cartItems,removeFromCart} = useContext(ShopContext)
  
    return (
        <div>
        {all_product.map((e)=>{
            if(cartItems[e.id]>0){
            return 
            <div>
                {e.name}
            </div>
            }
        })}
        </div>
    )
}

export default CartCard