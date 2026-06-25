import Breadcrumb from '@/Components/Breadcrumb';
import MainLayout from '@/Components/Layout/MainLayout';
import { Head } from '@inertiajs/react';
import Bannar from './Bannar';

import DeliveryCard from './DeliveryCard';
import FilterBar from './FilterBar';
import ProductsGrid from './ProductsGrid';

export default function Index({ products = [] }) {
    return (
        <MainLayout>
            <Head title="Shop" />
            <Breadcrumb
                items={[
                    {
                        label: 'Category',
                        href: '/shop',
                    },
                    {
                        label: 'Vegetables',
                    },
                ]}
                backgroundImage="/images/breadcrumbs.png"
            />

            <div className="flex flex-col items-center justify-center">
                <Bannar />
                <FilterBar />
                <DeliveryCard />
                <ProductsGrid products={products} />
            </div>
        </MainLayout>
    );
}
