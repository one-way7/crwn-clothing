import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
    selectCategoriesMap,
    selectCategoriesIsLoading,
} from '../../store/categories/categorySelector';

import { CategoryContainer, Title } from './CategoryStyles';

import ProductsCard from '../../components/productCard/ProductsCard';
import Spinner from '../../components/spinner/Spinner';

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <Title>{category.toUpperCase()}</Title>
            {isLoading ? (
                <Spinner />
            ) : (
                <CategoryContainer>
                    {products &&
                        products.map(product => (
                            <ProductsCard key={product.id} product={product} />
                        ))}
                </CategoryContainer>
            )}
        </Fragment>
    );
};

export default Category;