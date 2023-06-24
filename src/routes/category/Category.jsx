import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import { CategoriesContext } from '../../context/CategoriesContext';

import ProductsCard from '../../components/productCard/ProductsCard';

import { CategoryContainer, Title } from './CategoryStyles';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <Title>{category.toUpperCase()}</Title>
            <CategoryContainer>
                {
                    products && products.map(product => <ProductsCard key={product.id} product={product} />)
                }
            </CategoryContainer>
        </Fragment>
    );
};

export default Category;