import { ShoppingBagIcon } from "lucide-react";



const Added = () => {
    return (
        <>
            <div className="mt-6">
                <h1 className="text-[20px] font-semibold">Recently Added</h1>

                <div className="mt-5">


                    
                        <div className="flex gap-5 mb-5">
                            <img
                                className="w-[111px]"
                                src="/Gallery/10.png"
                                alt="mango"
                            />
                            <div className="grid gap-3">
                                 <p>
                                Curabitur porttitor orci eget
                                <br /> nequ accumsan.
                            </p>
                            <div className="flex gap-2">
                         <ShoppingBagIcon size={20} color='green'/>    
                                <p>Apr 25, 2021</p>
                            </div>
                            </div>                    
                        </div>


                         <div className="flex gap-5 mb-5">
                            <img
                                className="w-[111px]"
                                src="/Gallery/11.png"
                                alt="mango"
                            />
                            <div className="grid gap-3">
                                 <p>
                                Curabitur porttitor orci eget
                                <br /> nequ accumsan.
                            </p>
                            <div className="flex gap-2">
                         <ShoppingBagIcon size={20} color='green'/>    
                                <p>Apr 25, 2021</p>
                            </div>
                            </div>                    
                        </div>



                         <div className="flex gap-5 mb-5">
                            <img
                                className="w-[111px]"
                                src="/Gallery/9.png"
                                alt="mango"
                            />
                            <div className="grid gap-3">
                                 <p>
                                Curabitur porttitor orci eget
                                <br /> nequ accumsan.
                            </p>
                            <div className="flex gap-2">
                         <ShoppingBagIcon size={20} color='green'/>    
                                <p>Apr 25, 2021</p>
                            </div>
                            </div>                    
                        </div>                        


                </div>
            </div>
        </>
    );
};

export default Added;
