import ProductCard from './ProductCard';

const ProductsGrid = ({ products }) => {
    console.log(products);
    return (
        <div className="mx-3 mt-11 grid grid-cols-2 gap-5 md:grid-cols-4">
            {products.data?.map((item) => (
                <ProductCard key={item.id} product={item} />
            ))}
        </div>
    );
};

export default ProductsGrid;
