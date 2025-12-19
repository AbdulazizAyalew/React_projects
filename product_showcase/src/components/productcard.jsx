import React from "react"
import '../App.css'
export function Productcard({product}){
    return (
            <div key={product.id} class = {!product.instock ? "Out-of-stock" : "In-stock"}>

                {/* condition to check if there is an Image for any product before rendering */}
                {product.image != "" && (
                    <img src={product.image} width="250px"/>
                )}
                
                <p>  Product: {product.name}</p>
                <p>  Price: {product.price}💰</p>

                {/* condition to check if the product is premium or not */}
                {product.price > 100000 && (
                    <p>✨ Premium Product</p>
                )}

                {/* condition to check if the product is in stock */}
                {product.instock ? (
                    <p>Instock</p>
                ):
                <p>Out of stock</p>}

                {/* condition to check if the product is featured or not */}
                {product.isfeatured && (
                    <p>Featured</p>
                )}
            </div> 
        )
}
