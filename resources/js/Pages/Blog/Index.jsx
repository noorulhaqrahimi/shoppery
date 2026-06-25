import Breadcrumb from '@/Components/Breadcrumb';
import MainLayout from '@/Components/Layout/MainLayout';
import { Head } from '@inertiajs/react';
import React from 'react'
import FilterBar from '@/Pages/Blog/FilterBar';
import Mindex from './Mobile&Tablet/Mindex';
import Dindex from './Desktop/Dindex';
import Category from '@/Pages/Blog/Category';



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
                <div className='flex grid-cols-2 gap-9'>
                    <div>
                <Category />
                </div>
                <div>
                <Dindex />
                </div>
                </div>
                </div>
            </MainLayout>
  )
}

export default Index