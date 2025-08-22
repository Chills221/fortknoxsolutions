import React from 'react';
import Image from 'next/image';

const ServicesComponent = () => {
  const services = [
    {
      title: "Window Security Film",
      subtitle: "Protect your property without changing its appearance.",
      description: "Our premium window security film adds an invisible layer of strength to your glass, making it much harder to break or shatter. In the event of an attempted break-in, storm, or accident, the film helps hold glass together — keeping your home or business secure and your loved ones safe."
    },
    {
      title: "Door & Window Reinforcement", 
      subtitle: "Turn your entry points into strongholds.",
      description: "Most break-ins happen through vulnerable doors and windows. Our reinforcement solutions strengthens the windows and doors itself, giving intruders no easy way in."
    },
    {
      title: "Residential Homes and Commerial Properties",
      subtitle: "Turn your entry points into strongholds.",
      description: "Nulla facilisi cras fermentum odio eu feugiat. Sit amet luctus venenatis lectus magna urna."
    },
   
  ];

  return (
    <section id='services' className="py-20  ">
      <div className="max-w-7xl mx-auto px-4">
       
        <div className="text-center mb-16">
          <p className="text-sm  text-[#cfb16b] font-semibold tracking-widest uppercase mb-4">
            OUR CLIENTS
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl  text-gray-900 leading-tight">
            Trusted By 200+ Amazing<br />
            Companies Worldwide
          </h2>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row items-center gap-4">
          {/* Left Side - Images Grid (60% width on desktop) */}
          <div className="w-full lg:w-[65%]">
            <div className="flex flex-row flex-wrap gap-6">
             
              <div className="sm:w-[45%] w-full ">
                 <Image src={`/images/service-img1.webp`} alt="Fort Knox Solutions" width={205} height={300}  className="w-full h-[360px] border-4 border-[#cfb16b] object-cover"  />
              </div>
             
              <div className="sm:w-[45%] w-full sm:pt-10">
                <Image src={`/images/service-img2.webp`} alt="Fort Knox Solutions" width={205} height={300}  className="w-full h-[360px] border-4 border-[#cfb16b] object-cover"  />
              </div>
              
              <div className="sm:w-[45%] w-full">
                <Image src={`/images/service-img3.webp`} alt="Fort Knox Solutions" width={205} height={300}  className="w-full h-[360px] border-4 border-[#cfb16b] object-cover mt-[-30]"  />
              </div>
             
              <div className="sm:w-[45%] w-full ">
                <Image src={`/images/service-img4.webp`} alt="Fort Knox Solutions" width={205} height={300}  className="w-full h-[360px] border-4 border-[#cfb16b] object-cover md:mb-0 mb-8"  />
              </div>
            </div>
          </div>

          {/* Right Side - Services List (40% width on desktop) */}
          <div className="w-full lg:w-[35%]">
            <div className="space-y-8">
              {services.map((service, index) => (
                <div key={index} className="group">
                  <div className="flex items-start space-x-4">
                    {/* Yellow Dot */}
                    <div className="flex-shrink-0 mt-2">
                      <div className="w-3 h-3 bg-[#cfb16b] rounded-full"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h2 className="text-2xl sm:text-3xl  text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-200">
                        {service.title}
                      </h2>
                      {/* <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-200">
                        {service.title}
                      </h3> */}
                      <p className="text-black text-base leading-relaxed mb-6">
                        {service.description}
                      </p>
                      
                      {/* Divider Line */}
                      {index < services.length - 1 && (
                        <div className="h-px bg-gray-200"></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesComponent;