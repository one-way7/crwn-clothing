import { createContext, useState } from 'react';

const addCartItem = (cartItem, productToAdd) => {
    const existingCartItem = cartItem.find(cartItem => cartItem.id === productToAdd.id);

    if (existingCartItem) {
        return cartItem.map(cartItem => cartItem.id === productToAdd.id ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
        } : cartItem);
    }

    return [...cartItem, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {
    },
    cartItems: [],
    addItemToCart: () => {
    },
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};