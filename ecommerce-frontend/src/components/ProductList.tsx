import React from "react";
import ProductCard from "./ProductCard";

const product = [
    {id: 1, name: 'prodcut 1', price: 19.99, image: 'https://via/placeholder.com/150'},
    {id: 2, name: 'prodcut 2', price: 29.99, image: 'https://via/placeholder.com/150'},
    {id: 3, name: 'prodcut 3', price: 39.99, image: 'https://via/placeholder.com/150'},
];


const ProductList: React.FC =   () =>(
    <div className="container mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {product.map(product =>(
            <ProductCard key = {product.id} {...product}/>
        ))}
    </div>
);

export default ProductList;