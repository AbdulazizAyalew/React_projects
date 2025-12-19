import React from "react";
import { Productcard } from "./productcard";

function ProductList({products}){
    if(products.length < 1){
        return <p>No Products available at the Moment</p>;
    }
    return (
        products.map(product=>(
            <Productcard product = {product}/>
        ))
    )
}

export default ProductList