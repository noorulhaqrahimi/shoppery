import ProductCard from '../Shop/ProductCard';

function RelatedCards() {
    const contents = [
        {
            id: 1,

            title: 'Green Apple',

            price: 14.99,
            oldPrice: 20.99,

            image: '/images/apple.png',
            stock: true,
        },
        {
            id: 1,

            title: 'Fresh Cauliflower',

            price: 14.99,

            image: '/images/cauliflower.jpg',
            stock: true,
        },
        {
            id: 1,

            title: 'Green Capsicum',

            price: 14.99,
            oldPrice: 20.99,

            image: '/images/capsicum.jpg',
            stock: true,
        },
        {
            id: 1,

            title: 'Green Capsicum',

            price: 14.99,
            oldPrice: 20.99,

            image: '/images/ocra.jpg',
            stock: true,
        },
    ];
    return (
        <div className='grid grid-cols-2 gap-3 md:grid-cols-4 lg:gap-6 mx-8 lg:mx-[50px] xl:mx-[200px] 2xl:mx-[350px]'>
            {contents.map((content) => (
                <ProductCard key={content.id} product={content} />
            ))}
        </div>
    );
}

export default RelatedCards;
