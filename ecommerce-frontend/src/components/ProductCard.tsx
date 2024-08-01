import React from 'react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image }) => (
  <div className="border p-4">
    <img src={image} alt={name} className="w-full h-64 object-cover" />
    <h2 className="text-lg font-bold">{name}</h2>
    <p className="text-gray-700">${price.toFixed(2)}</p>
    <button className="bg-blue-500 text-white p-2 mt-2">Add to Cart</button>
  </div>
);

export default ProductCard;
