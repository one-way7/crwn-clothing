import ProductsCard from '../productCard/ProductsCard';

import {
    CategoryPreviewContainer,
    Title,
    Preview,
} from './CategoryPreviewStyles';

const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                <Title to={title}>{title.toUpperCase()}</Title>
            </h2>
            <Preview>
                {products
                    .filter((_, idx) => idx < 4)
                    .map(product => (
                        <ProductsCard key={product.id} product={product} />
                    ))}
            </Preview>
        </CategoryPreviewContainer>
    );
};

export default CategoryPreview;