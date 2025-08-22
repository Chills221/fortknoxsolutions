import React from 'react';
import Image from 'next/image';
import Button from './Elements/Button';

const ServiceItemComponent = ({
    title = "Our Premium Service",
    subtitle = "Our Premium Service",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    buttonText = "Learn More",
    imageUrl = "/api/placeholder/600/400",
    imageAlt = "Service image",
    align = "left"
}) => {
    return (
        <section
            className={`max-w-7xl mx-auto pt-6 py-12 px-4 `}
            role="region"
            aria-labelledby="service-title"
        >
            <div className={` flex flex-col ${align === "right" ? "md:flex-row-reverse" : "md:flex-row"}  items-center lg:gap-8 gap-6`}>
                {/* Left Content - 55% on desktop */}
                <div className="w-full md:flex-1 md:max-w-[52%] flex-shrink-0">
                    <div className="sm:space-y-4 space-y-6 lg:space-y-6">
                        <h2
                            id="service-title"
                            className="text-2xl sm:text-3xl lg:text-5xl  text-gray-900 leading-tight"
                        >
                            {title}
                        </h2>
                       

                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                            {description}
                        </p>
                        <Button text="Learn More"/>
                    </div>
                </div>

                {/* Right Image - 45% on desktop */}
                <div className="w-full md:flex-1 md:max-w-[48%] flex-shrink-0">
                    <div className="relative aspect-[4/3] w-full">
                        <Image
                            src={imageUrl}
                            alt={imageAlt}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw"
                            className="object-cover rounded-2xl shadow-lg"
                            priority={false}
                            quality={85}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceItemComponent;