import { useContext } from 'react';

import { CartContext } from '../../context/CartContext';


import { CartIconContainer, ShoppingIcon, ItemCount } from './CartIconStyles';

const CartIcon = () => {
    const { setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(prevState => !prevState);

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <ItemCount className='item-count'>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;