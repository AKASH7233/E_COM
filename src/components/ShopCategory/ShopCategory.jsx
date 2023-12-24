import React,{useContext} from 'react'
import { ShopContext } from '../../context/ShopContext'
import { RiArrowDropDownLine } from "react-icons/ri";
import Card from '../Card/Card'
function ShopCategory(props) {
    let {all_product} = useContext(ShopContext)
  return (
        <>
        <div className='px-32 py-8'>
            <img src={props.banner} alt="" />
            <div className='pt-8 pb-4 flex items-center justify-between pr-20'>
            <p className='font-medium'>
                <span className='font-bold'>Showing 1-12 </span>
                out of 36 products
            </p>
            <div className='flex items-center border px-4 rounded-full hover:brightness-50'>
                Sort by <RiArrowDropDownLine className='text-4xl'/>
            </div>
            </div>
            <div className='flex flex-wrap gap-4'>
                {all_product.map((item,i)=>{
                     if(props.category === item.category){
                        return <Card key={i} id={item.id} name={item.name} old_price={item.old_price} new_price={item.new_price} image={item.image}/>
                     }
                     else{
                        return null;
                     }
                })}
            </div>
        </div>
        
        
    </>

  )
}

export default ShopCategory