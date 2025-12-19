import React from "react";
import { Productcard } from "./productcard";

function ProductList({products}){
    return (
        products.map(product=>(
            <Productcard product = {product}/>
        ))
    )
}

export default ProductList