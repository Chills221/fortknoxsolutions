import React from "react";
import Image from "next/image";
import Button from "./Elements/Button";







const ProtectComponent =()=>{
    return (
        <>
        <div className="w-full md:py-16 py-10 bg-black">
            <div className="max-w-7xl mx-auto px-4 ">
                <div className=" flex md:flex-row flex-col gap-20 items-center">
                    <div className="md:w-[55%] w-full flex flex-col gap-4">
                        <h2 className="lg:text-7xl md:text-5xl text-3xl text-[#fcf8ef] leading-[1.2]">Protect What Matters Most.</h2>
                        <p className="lg:text-3xl md:text-2xl text-xl text-white">Fort Knox Solutions provides to premium security fiilm and door reinforcements to keep your home safe</p>
                        <div className="inline-flex mt-6">
                        <a href="#contactform"  className="relative inline-block text-center overflow-hidden z-10 text-black hover:text-white hover:bg-black text-sm font-medium bg-[#cfb16b] px-10 uppercase py-3 tracking-[2.64px] transition-all duration-300 ease-linear">Get a Free Quote</a>
                        </div>
                    </div>
                    <div className="md:w-[45%] w-full">
                    <Image
                          src={`/images/middle-image.jpg`}
                          alt="testimonials"
                          width={500}
                          height={300}
                          className="w-full object-cover  rounded-2xl shadow-lg "
                        />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
export default ProtectComponent;