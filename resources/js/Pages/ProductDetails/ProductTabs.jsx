import { useState } from 'react';
import PageOne from './PageOne';
import PageThree from './PageThree';
import PageTwo from './PageTwo';

function ProductTabs() {
    const [Active, setActive] = useState('description');

    return (
        <>
            <div className="border-gray mt-20 flex justify-center gap-5 border-b-[1px] text-[#808080]">
                <button
                    className={
                        Active === 'description'
                            ? 'border-b-2 border-green-600 text-[16px] font-medium text-black'
                            : ''
                    }
                    onClick={() => setActive('description')}
                >
                    Descriptions
                </button>
                <button
                    className={
                        Active === 'addational'
                            ? 'border-b-2 border-green-600 text-[16px] font-medium text-black'
                            : ''
                    }
                    onClick={() => setActive('addational')}
                >
                    Additional Information
                </button>
                <button
                    className={
                        Active === 'feedback'
                            ? 'border-b-2 border-green-600 text-[16px] font-medium text-black'
                            : ''
                    }
                    onClick={() => setActive('feedback')}
                >
                    Customer Feedback
                </button>
            </div>

            <div>
                {Active === 'description' && (
                    <div>
                        <PageOne />
                    </div>
                )}
                {Active === 'addational' && (
                    <div>
                        <PageTwo />
                    </div>
                )}
                {Active === 'feedback' && (
                    <div>
                        <PageThree />
                    </div>
                )}
            </div>
        </>
    );
}

export default ProductTabs;