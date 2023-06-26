import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase';
import { setCategories } from '../../store/categories/categoryAction';

import CategoriesPreview from '../categoriesPreview/CategoriesPreview';
import Category from '../category/Category';

const Shop = () => {
    const gispatch = useDispatch()

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesArray = await getCategoriesAndDocuments();
            gispatch(setCategories(categoriesArray));
        };
        getCategoriesMap()
    }, []);

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    );
};

export default Shop;