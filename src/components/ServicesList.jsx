import React from 'react';
import ServiceItemComponent from '@/components/ServiceItemComponent';
import Image from 'next/image';

const ServicesList = () => {


    return (
        <section className="bg-white w-full py-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className=" mb-8 ">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight md:max-w-4xl w-full  ">
                        Our Services
                    </h2>
                </div>
            </div>
            <ServiceItemComponent 
            align="right"
            title='Window Security Film'
            subtitle="Protect your property without changing its appearance."
            description='Our premium window security film adds an invisible layer of strength to your glass, making it much harder to break or shatter. In the event of an attempted break-in, storm, or accident, the film helps hold glass together — keeping your home or business secure and your loved ones safe.'
            imageUrl='/images/our-service-img1.jpg'
             />
            <ServiceItemComponent 
            align="left"
            title='Door & Window Reinforcement'
            subtitle="Turn your entry points into strongholds."
            description='Most break-ins happen through vulnerable doors and windows. Our reinforcement solutions strengthens the windows and doors itself, giving intruders no easy way in.'
            imageUrl='/images/our-service-img2.jpg'
             />
            <ServiceItemComponent 
            align="right" 
            title='Commercial properties and residential homes'
            subtitle="Turn your entry points into strongholds."
            description='Most break-ins happen through vulnerable doors and windows. Our reinforcement solutions strengthens the windows and doors itself, giving intruders no easy way in.'
            imageUrl='/images/our-service-img3.jpg'
            />
        </section>
    );
};

export default ServicesList;