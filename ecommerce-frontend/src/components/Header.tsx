import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import {Link} from 'react-router-dom';

const Header: React.FC =  () =>(
    <header className="bg-blue-500 text-white p-4">
        <nav className="container mx-auto flex justify-between">
            <Link to="/" className="text-xl font-bold">E-comeerce</Link>
            <Link to="/cart" className="flex items-center">
            <FaShoppingCart  className="text-2xl"/>
            <span className="ml-2"></span>
            </Link>
        </nav>
    </header>
)

export default Header;