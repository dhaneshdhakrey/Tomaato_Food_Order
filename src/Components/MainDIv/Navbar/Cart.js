import React, { useState } from 'react';

const dropdownClasses = 'absolute bg-white mt-2 w-80 bg-card text-card-foreground border border-border rounded-lg shadow-full overflow-hidden ml-7 z-50';
const buttonClasses = 'ml-16 flex items-center bg-orange-500 text-primary-foreground p-2 rounded-full hover:bg-orange-600 hover:text-white transition-colors duration-300 shadow-lg';
const listItemClasses = 'flex justify-between';
const borderClasses = 'border-t border-border mx-4';
const checkoutButtonClasses = 'mt-2 bg-red-600  hover:text-white text-secondary-foreground hover:bg-secondary/80 w-full p-2 rounded-lg';

const CartDropdown = () => {
    // Manage cart items in state
    const [cartItems, setCartItems] = useState([]);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    // Simulate adding items to the cart
    const addItemToCart = () => {
        const newItem = {
            name: 'burger',
            price: 100.0,
            quantity: 1,
        };
        setCartItems([...cartItems, newItem]);
    };

    return (
        <div className="relative inline-block ml-[80%] position-absolute top-[-105px]">
            <button className={buttonClasses} onClick={toggleDropdown}>
                <span className="mr-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                </span>
                <span>Cart ({cartItems.length})</span>
            </button>

            {isDropdownVisible && (
                <div className={dropdownClasses}>
                    <div className="p-4">
                        <h2 className="font-bold text-lg">Your Cart</h2>
                    </div>
                    <div className={borderClasses}></div>
                    <ul className="p-4">
                        {cartItems.length === 0 ? (
                            <p className="text-muted-foreground">Your cart is empty.</p>
                        ) : (
                            cartItems.map((item, index) => (
                                <li key={index} className={listItemClasses}>
                                    <span>{item.name} x {item.quantity}</span>
                                    <span>₹{item.price.toFixed(2)}</span>
                                </li>
                            ))
                        )}
                    </ul>
                    <div className={borderClasses}></div>
                    <div className="p-4">
                        <div className="flex justify-between">
                            <span>Sub total</span>
                            <span>₹{cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
                        </div>
                        <p className="text-muted-foreground text-sm">Extra charges may apply</p>
                        <button className={checkoutButtonClasses}>CHECKOUT</button>
                    </div>
                </div>
            )}

            {/* Button to add item to cart for demonstration purposes */}
            <button
                onClick={addItemToCart}
                className="mt-4 ml-16 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
            >
                Add Item to Cart
            </button>
        </div>
    );
};

export default CartDropdown;
