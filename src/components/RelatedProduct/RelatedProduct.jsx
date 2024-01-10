import React, { useContext } from 'react'
import { ShopContext } from "../../context/ShopContext";
import Card from "../Card/Card";
function RelatedProduct(props) {
    const {all_product} = useContext(ShopContext);
  return (
    <div className='px-32 py-12'>
        <h2 className='font-bold text-2xl mb-8'>Related Products</h2>
        <div className='flex flex-wrap justify-between'>
            {all_product.map((item)=>(
                item.category === props.category ? <Card id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price = {item.old_price} /> : ''
            ))}
        </div>
    </div>
  )
}

export default RelatedProduct