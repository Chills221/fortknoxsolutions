import Image from 'next/image';

const PageBanner = ({ title }) => {
    return (
        <>
            <div className="w-full relative">
                <Image
                    src={`/images/page-banner.webp`}
                    alt="aboutimg"
                    width={1920}
                    height={350}

                    className="w-full h-[350px] rounded-xl md:block hidden "
                />
                <Image
                    src={`/images/hero-mbl.webp`}
                    alt="aboutimg"
                    width={800}
                    height={1200}

                    className="w-full lg:h-[300px] h-[700px] object-cover rounded-xl md:hidden block  "
                />
                <div className="absolute inset-0 bg-black/50 w-full h-full"></div>

                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-10 container-custom text-center">
                    <div className="max-w-7xl mx-auto sm:py-0 py-6 px-4">
                        <h1 className="sm:text-5xl text-3xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.2] tracking-[5px] uppercase max-w-4xl mx-auto">
                            {title}
                        </h1>
                    </div>
                </div>
            </div>

        </>
    );
};

export default PageBanner;