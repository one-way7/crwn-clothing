import { useContext } from 'react';

import { ProductsContext } from '../../context/ProductsData';

import ProductsCard from '../../components/productCard/ProductsCard';

import './Shop.scss'

const Shop = () => {
    const { products } = useContext(ProductsContext);
    return (
        <div className='product-container'>
            {products.map(product => (
                <ProductsCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Shop;