import React from "react";
import Link from "next/link";

export interface Props {
    text: string;
    link?: string;
}

const Button: React.FC<Props> = ({ text, link }) => {
    return (
        <>
            <Link href={link ? link : '#contact'} className="relative inline-block text-center overflow-hidden z-10 text-black hover:text-white hover:bg-black text-sm font-medium bg-[#cfb16b] px-10 uppercase py-3 tracking-[2.64px] transition-all duration-300 ease-linear">{text}</Link>
        </>
    )
}
export default Button