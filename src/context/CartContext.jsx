import { createContext, useState, useEffect } from 'react';

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
    cartCount: 0
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((acc, currValue) => acc + currValue.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        cartCount
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};