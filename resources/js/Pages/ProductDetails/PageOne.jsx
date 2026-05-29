import { Check } from "lucide-react";
import Video from "@/Pages/ProductDetails/Video";
import { BadgePercent, Leaf } from "lucide-react";


const highlights = [
        {
            icon: '/images/price-tag.png',
            title: '64% Discount',
            desc: 'Save your 64% money with us',
        },
        {
            icon: '/images/leaf.png',
            title: '100% Organic',
            desc: '100% Organic Vegetables',
        },
    ];


function PageOne() {
    return (
        <>
            <div className="mx-5 mt-6 lg:mt-9 lg:grid lg:grid-cols-2 lg:gap-8">

                <div>
                 <p className="flex text-justify text-[13px] sm:text-[16px] lg:text-[17px]">
                    Sed commodo aliquam dui ac porta. Fusce ipsum felis,
                    imperdiet at posuere ac, viverra at mauris. Maecenas
                    tincidunt ligula a sem vestibulum pharetra. Maecenas auctor
                    tortor lacus, nec laoreet nisi porttitor vel. Etiam
                    tincidunt metus vel dui interdum sollicitudin. Mauris sem
                    ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed
                    et condimentum arcu, id molestie tellus. Nulla facilisi. Nam
                    scelerisque vitae justo a convallis. Morbi urna ipsum,
                    placerat quis commodo quis, egestas elementum leo. Donec
                    convallis mollis enim. Aliquam id mi quam. Phasellus nec
                    fringilla elit.
                    <br /><br /><br className="lg:hidden" />
                    Nulla mauris tellus, feugiat quis pharetra
                    sed, gravida ac dui. Sed iaculis, metus faucibus elementum
                    tincidunt, turpis mi viverra velit, pellentesque tristique
                    neque mi eget nulla. Proin luctus elementum neque et
                    pharetra.{' '}
                </p>
                <div className="mt-9 flex text-center items-center">
                <Check size={15}  className="bg-[#00B207] mr-2 w-5 h-5 rounded-full text-white "/>
                <p className="flex items-center text-[12px] sm:text-[16px] lg:text-[17px]">100 g of fresh leaves provides.</p>
                </div>

                <div className="mt-3 flex text-center items-center">
                <Check size={15}  className="bg-[#00B207] mr-2 md:w-5 md:h-5 w-5 h-5 rounded-full text-white "/>
                <p className="flex items-center text-[12px] sm:text-[16px] lg:text-[17px]">Aliquam ac est at augue volutpat elementum.</p>
                </div>

                <div className="mt-3 flex text-center items-center">
                <Check size={15}  className="bg-[#00B207] mr-2 md:w-5 md:h-5 w-5 h-5 rounded-full text-white "/>
                <p className="flex items-center text-[12px] sm:text-[16px] lg:text-[17px]">Quisque nec enim eget sapien molestie.</p>
                </div>

                <div className="mt-3 flex text-center items-center">
                <Check size={15}  className="bg-[#00B207] mr-2 md:w-5 md:h-5 w-5 h-5 rounded-full text-white "/>
                <p className="flex items-center text-[12px] sm:text-[16px] lg:text-[17px]">Proin convallis odio volutpat finibus posuere.</p>
                </div>

                <p className="text-[13px] sm:text-[16px] mt-5 lg:text-[17px]">Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa. </p>
                </div>
                <div>

                  <Video />
                  {/* cards */}
                     <div className=" rounded-xl -mt-11 border border-[#E5E5E5] px-5 py-6 lg:w-[700px] shadow-md">
                            <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
                                {highlights.map((highlight) => (
                                    <article
                                        key={highlight.title}
                                        className="flex items-center gap-4"
                                    >
                                        <img
                                            src={highlight.icon}
                                            alt="Related Image"
                                            className="h-10 w-10 shrink-0"
                                        />
                                        <div>
                                            <h3 className="text-sm font-medium text-[#1A1A1A] md:text-base lg:text-lg">
                                                {highlight.title}
                                            </h3>
                                            <p className="text-sm font-normal text-[#808080] md:text-base">
                                                {highlight.desc}
                                            </p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                </div>
                
               
           

            </div>
        </>
    );
}

export default PageOne;