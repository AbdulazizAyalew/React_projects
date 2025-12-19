import React from "react"
export function Productcard({products}){
    return (
        products.map(product=>(
            <div key={product.id}>
                <img src={product.image} width="250px"/>
                <p>  Product: {product.name}</p>
                <p>  Price: {product.price}💰</p>
            </div> 
        )))

}
