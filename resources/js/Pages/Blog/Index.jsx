import Breadcrumb from '@/Components/Breadcrumb';
import MainLayout from '@/Components/Layout/MainLayout';
import { Head } from '@inertiajs/react';
import React from 'react'



const Index = () => {
  return (
     <MainLayout>
                <Head title='Blog-Grid' />
                <Breadcrumb
                    items={[           
                        {
                            label: 'Blog',
                        },
                    ]}
                    backgroundImage="/images/breadcrumbs.png"
                />
    
                <div className="flex flex-col justify-center items-center">
                
                </div>
            </MainLayout>
  )
}

export default Index
