import React from 'react';
import ServiceItemComponent from '@/components/ServiceItemComponent';
import Image from 'next/image';

const ServicesList = () => {


    return (
        <section className="bg-white w-full py-8" id="services">
            <div className="max-w-7xl mx-auto px-4">
                <div className=" mb-8 ">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight md:max-w-4xl w-full  ">
                        Our Services
                    </h2>
                </div>
            </div>
            <ServiceItemComponent 
            align="left" 
            title='Free Security Consultation'            
            description='Every home is unique. That why we offer a complimentary walkthrough and consultation, giving you a custom plan to strengthen your home security.'
            imageUrl='/images/our-service-img4.webp'
            />
            <ServiceItemComponent 
            align="right"
            title='Security Window Film'
            description='Our premium window security film adds an invisible layer of strength to your glass, making it much harder to break or shatter. In the event of an attempted break-in, storm, or accident, the film helps hold glass together — keeping your home or business secure and your loved ones safe.'
            imageUrl='/images/our-service-img1.webp'
             />
            <ServiceItemComponent 
            align="left"
            title='Door Reinforcements'
           
            description='Turn your entry points into strongholds.
Most break-ins happen through vulnerable doors and windows. Our reinforcement solutions strengthens the windows and doors itself, giving intruders no easy way in.'
            imageUrl='/images/our-service-img2.webp'
             />
            <ServiceItemComponent 
            align="right" 
            title='Security Cameras'
            description='Stay connected and be aware. Our camera systems provide real-time monitoring, recording, and mobile access - so you can check on your home anytime, anywhere.'
            imageUrl='/images/our-service-img3.jpg'
            />
            
        </section>
    );
};

export default ServicesList;