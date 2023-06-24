import { useContext } from 'react';

import { CartContext } from '../../context/CartContext';
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button';

import { ProductCartContainer, Name, Price, Footer } from './ProductsCardStyles';

const ProductsCard = ({ product }) => {
    const { addItemToCart } = useContext(CartContext);
    const { name, price, imageUrl } = product;

    const addProductToCart = () => addItemToCart(product);

    return (
        <ProductCartContainer>
            <img src={imageUrl} alt={name} />
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to card</Button>
        </ProductCartContainer>
    );
};

export default ProductsCard;