import { useContext } from 'react';

import { CartContext } from '../../context/CartContext';

import { ReactComponent as ShoppingIcon } from '../../assets/shoppingBag.svg';

import './CartIcon.scss';

const CartIcon = () => {
    const { setIsCartOpen } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(prevState => !prevState);

    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    );
};

export default CartIcon;