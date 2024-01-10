import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/Breadcrum/Breadcrum";
import ProductInfo from "../components/ProductInfo/ProductInfo";
import Card from "../components/Card/Card";
import RelatedProduct from "../components/RelatedProduct/RelatedProduct";

function Product(){
    const {all_product} = useContext(ShopContext)
    const {ProductId} = useParams();
    const product = all_product.find((e)=> e.id === Number(ProductId))
    return(
        <div>
            <Breadcrum product={product} /> 
            <ProductInfo product={product}/>
            <RelatedProduct category = {product.category} />
        </div>
    )
}
export default Product