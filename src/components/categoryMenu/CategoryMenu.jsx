import CategoryItem from '../categoryItem/CategoryItem';

import './CategoryMenu.scss';

const CategoryMenu = ({ categories }) => {
    return (
        <div className='categories-container'>
            {categories.map(category => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    );
};

export default CategoryMenu;