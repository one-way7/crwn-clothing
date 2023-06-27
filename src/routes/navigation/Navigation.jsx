import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { selectIsCartOpen } from '../../store/cart/cartSelector';
import { signOutUser } from '../../utils/firebase/firebase';
import { selectCurrentUser } from '../../store/user/userSelector';

import CartIcon from '../../components/cartIcon/CartIcon';
import CartDropdown from '../../components/cartDropdown/CartDropdown';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { NavigationContainer, NavLinks, NavLink, Logo } from './NavigationStyles';

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen)

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