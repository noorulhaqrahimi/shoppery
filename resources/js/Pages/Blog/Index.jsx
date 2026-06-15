import Breadcrumb from '@/Components/Breadcrumb';
import MainLayout from '@/Components/Layout/MainLayout';
import { Head } from '@inertiajs/react';
import React from 'react'
import FilterBar from '@/Pages/Blog/FilterBar';
import Mindex from './Mobile&Tablet/Mindex';
import News from '@/Pages/Blog/Desktop/Carts';




const Index = () => {
  return (
     <MainLayout>
                <Head title='Blog-List' />
                <Breadcrumb
                    items={[           
                        {
                            label: 'Blog',
                        },
                    ]}
                    backgroundImage="/images/breadcrumbs.png"
                />
    
                <div className="flex flex-col justify-center items-center">
                <FilterBar />
                <Mindex />
                <News />
                </div>
            </MainLayout>
  )
}

export default Index