import Breadcrumb from '@/Components/Breadcrumb';
import { AnimatedSection } from '@/Components/Layout/AnimatedSection';
import MainLayout from '@/Components/Layout/MainLayout';
import { Head } from '@inertiajs/react';
import Product from './Product';
import ProductTabs from './ProductTabs';
import RelatedCards from './RelatedCards';

function ProductDetails() {
    return (
        <>
            {' '}
            <MainLayout>
                <Breadcrumb
                    items={[
                        {
                            label: 'Catagory',
                            href: '/shop',
                        },
                        {
                            label: 'Vegetables',
                            href: '/vegetables',
                        },
                        {
                            label: 'Chinese Cabbage',
                        },
                    ]}
                    backgroundImage="/images/breadcrumbs.png"
                ></Breadcrumb>
                <Head title="ProductDetails"></Head>
                <Product />
                <AnimatedSection>
                    <div className="mx-4">
                        <ProductTabs />
                    </div>
                </AnimatedSection>
                <AnimatedSection className="pt-10">
                    <div className="flex justify-center pb-8 text-[32px] font-semibold">
                        <h1>Related Products</h1>
                    </div>
                    <RelatedCards />
                </AnimatedSection>
            </MainLayout>
        </>
    );
}

export default ProductDetails;
