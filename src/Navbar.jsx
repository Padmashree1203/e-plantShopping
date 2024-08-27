// Navbar.jsx

import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
    // Access the total quantity from the Redux store
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);

    return (
        <nav>
            <h1>Plant Shop</h1>
            <div className="cart-icon">
                <img src="cart-icon.png" alt="Cart" />
                <span className="cart-count">{totalQuantity}</span>
            </div>
        </nav>
    );
};

export default Navbar;
