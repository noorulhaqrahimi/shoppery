import { Check } from "lucide-react";
import Video from "@/Pages/ProductDetails/Video";
import { BadgePercent, Leaf } from "lucide-react";



function PageOne() {
    return (
        <>
            <div className="mx-5 mt-6">
                <p className="flex text-justify text-[13px] sm:text-[16px]">
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
                    <br /><br /><br />
                    Nulla mauris tellus, feugiat quis pharetra
                    sed, gravida ac dui. Sed iaculis, metus faucibus elementum
                    tincidunt, turpis mi viverra velit, pellentesque tristique
                    neque mi eget nulla. Proin luctus elementum neque et
                    pharetra.{' '}
                </p>
                <div className="mt-9 flex text-center items-center">
                <Check size={15}  className="bg-[#00B207] mr-2 w-5 h-5 rounded-full text-white "/>
                <p className="flex items-center text-[12px] sm:text-[16px]">100 g of fresh leaves provides.</p>
                </div>

                <div className="mt-3 flex text-center items-center">
                <Check size={15}  className="bg-[#00B207] mr-2 md:w-5 md:h-5 w-5 h-5 rounded-full text-white "/>
                <p className="flex items-center text-[12px] sm:text-[16px]">Aliquam ac est at augue volutpat elementum.</p>
                </div>

                <div className="mt-3 flex text-center items-center">
                <Check size={15}  className="bg-[#00B207] mr-2 md:w-5 md:h-5 w-5 h-5 rounded-full text-white "/>
                <p className="flex items-center text-[12px] sm:text-[16px]">Quisque nec enim eget sapien molestie.</p>
                </div>

                <div className="mt-3 flex text-center items-center">
                <Check size={15}  className="bg-[#00B207] mr-2 md:w-5 md:h-5 w-5 h-5 rounded-full text-white "/>
                <p className="flex items-center text-[12px] sm:text-[16px]">Proin convallis odio volutpat finibus posuere.</p>
                </div>

                <p className="text-[13px] sm:text-[16px] mt-5">Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa. </p>

            <Video />

            <div>
              <BadgePercent />
            </div>

            </div>
        </>
    );
}

export default PageOne;