import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { UserContext } from '../../context/UserContext';
import { CartContext } from '../../context/CartContext';

import { signOutUser } from '../../utils/firebase/firebase';

import CartIcon from '../../components/cartIcon/CartIcon';
import CartDropdown from '../../components/cartDropdown/CartDropdown';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { NavigationContainer, NavLinks, NavLink, Logo } from './NavigationStyles';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext)

    const handleSignOut = () => signOutUser()

    return (
        <Fragment>
            <NavigationContainer>
                <Logo to='/'>
                    <CrwnLogo />
                </Logo>
                <NavLinks>
                    <NavLink to='/shop'>SHOP</NavLink>
                    {
                        currentUser ? (<NavLink as='span' onClick={handleSignOut}>SIGN OUT</NavLink>) : (
                            <NavLink to='/auth'>SIGN IN</NavLink>)
                    }
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;