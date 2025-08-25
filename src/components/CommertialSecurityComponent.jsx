import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Elements/Button";








const CommertialSecurityComponent =()=>{
    return (
        <>
        <div className="w-full py-12 bg-[#131311]">
            <div className="max-w-7xl mx-auto px-4">
               {/* <div className="flex items-center space-x-32">
                           <Image src={`/images/logo.webp`} alt="Fort Knox Solutions" width={205} height={60} className="h-[60px] w-auto  py-" />
                </div> */}
                
                    <div className="md:w-[70%] w-full flex flex-col gap-6 mt-6">
                       <h2 className="text-4xl sm:text-5xl md:text-7xl text-white text-bold leading-tight w-full uppercase md:max-w-3xl w-full">
               Commercial Security film  </h2>
                 <h3 className="text-xl sm:text-4xl  text-[#cfc793] text-bold leading-tight   md:max-w-xl w-full md:pr-6">Protecting Bussinesses with Strength and Clarity </h3>
                    </div>
            </div>
        </div>
        <div className="w-full bg-[#faf3eb] ">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex md:flex-row flex-col gap-10 ">
                    <div className="flex flex-col gap-8 md:w-[50%] w-full py-12">
                        <h4 className="md:text-4xl text-3xl text-black uppercase max-w-lg leading-[100%]">Why commercial security film?</h4>
                        <p className="text-xl text-black md:max-w-lg w-full leading-[140%]"> At Fort knox Solutions, we beleave every family deserves to feel safe their own home.Based in Toronto,we specialize in window security film, door reinforcement.</p>
                        <ul className=" list-disc list-inside marker:text-[#d2af5b] text-black">
                            <li className=" py-2"><Link href="#" className=" text-xl">Prevents quick forced entry</Link></li>
                            <li className=" py-2"><Link href="#" className=" text-xl">Adds UV protection and reduces glare</Link></li>
                            <li className="py-2"><Link href="#" className=" text-xl">Reduces ifability by protecting staff and customers from flying glass</Link></li>
                            
                        </ul>

                          <h4 className="md:text-4xl text-3xl text-black uppercase max-w-lg leading-[100%]">features of our film</h4>
                        <ul>
                            <li className="flex flex-row gap-1 items-center py-1"> <svg fill="#ceb968" width="40px" height="40px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M760 380.4l-61.6-61.6-263.2 263.1-109.6-109.5L264 534l171.2 171.2L760 380.4z"/></svg><Link href="#" className="text-black text-xl">Available in clear, tinted and reflective options</Link></li>
                            <li className="flex flex-row gap-1 items-center py-1"><svg fill="#ceb968" width="40px" height="40px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M760 380.4l-61.6-61.6-263.2 263.1-109.6-109.5L264 534l171.2 171.2L760 380.4z"/></svg><Link href="#" className="text-black text-xl">Thickness option for varying level of protection</Link></li>
                            <li className="flex flex-row gap-1 items-center py-1"><svg fill="#ceb968" width="40px" height="40px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M760 380.4l-61.6-61.6-263.2 263.1-109.6-109.5L264 534l171.2 171.2L760 380.4z"/></svg><Link href="#" className="text-black text-xl">Professionally installed with a flawless finish</Link></li>
                             <li className="flex flex-row gap-1 items-center py-1"><svg fill="#ceb968" width="40px" height="40px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M760 380.4l-61.6-61.6-263.2 263.1-109.6-109.5L264 534l171.2 171.2L760 380.4z"/></svg><Link href="#" className="text-black text-xl">Backed by manufacturer wranties</Link></li>
                            
                        </ul>
                        <div className="bg-[#ccb16a] py-6 ">
                            <div className="flex flex-col gap-6 justify-center items-center">
                            <p className="text-black text-xl text-center max-w-sm mx-auto">Don't let weak glass put your bussiness at risk.</p>
                            
                            <Button text="Request free commencciale" />
                            </div>

                        </div>
                          <h4 className="text-4xl text-black uppercase max-w-lg leading-[100%]">ideal for:</h4>
                        <div className="flex flex-row gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#ccb16a" viewBox="0 0 24 24"><path d="M16 6v-2c0-2.209-1.791-4-4-4s-4 1.791-4 4v2h-5v18h18v-18h-5zm-7-2c0-1.654 1.346-3 3-3s3 1.346 3 3v2h-6v-2zm10 8h-14v-4h3v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h3v4z"/></svg>
                            <div className="">
                            <h5 className="text-black text-xl">Retail stores & showrooms</h5>
                            <p className="text-black text-xl">Stop smash and grab thefts</p>
                            </div>
                        </div> 

                        <div className="flex flex-row gap-4">
                            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ccb16a" fill-rule="evenodd" clip-rule="evenodd"><path d="M6 7v-7h13v10h5v14h-23v-17h5zm0 16v-4h-1v4h1zm8-4h-3v4h3v-4zm6 0h-1v4h1v-4zm2-7h-3v6h2v4h1v-10zm-5-10h-9v20h1v-5h7v5h1v-20zm-13 20v-4h2v-9h-3v13h1zm17-6h-1v-2h1v2zm-17-2h1v2h-1v-2zm8 1h-2v-2h2v2zm3 0h-2v-2h2v2zm-10-4v2h-1v-2h1zm7 1h-2v-2h2v2zm3 0h-2v-2h2v2zm-3-3h-2v-2h2v2zm3 0h-2v-2h2v2zm-3-3h-2v-2h2v2zm3 0h-2v-2h2v2z"/></svg>
                            <div className="">
                            <h5 className="text-black text-xl">office buildings</h5>
                            <p className="text-black text-xl">For employee and equipment</p>
                            </div>
                        </div>      

                        <div className="flex flex-row gap-4">
                            <><svg width="40" height="40" fill="#ccb16a" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M13 2h2v2h1v19h1v-15l6 3v12h1v1h-24v-1h1v-11h7v11h1v-19h1v-2h2v-2h1v2zm8 21v-2h-2v2h2zm-15 0v-2h-3v2h3zm8 0v-2h-3v2h3zm-2-4v-13h-1v13h1zm9 0v-1h-2v1h2zm-18 0v-2h-1v2h1zm4 0v-2h-1v2h1zm-2 0v-2h-1v2h1zm9 0v-13h-1v13h1zm7-2v-1h-2v1h2zm-18-1v-2h-1v2h1zm2 0v-2h-1v2h1zm2 0v-2h-1v2h1zm14-1v-1h-2v1h2zm0-2.139v-1h-2v1h2z"/></svg></>
                            <div className="">
                            <h5 className="text-black text-xl">Schools & institutions</h5>
                            <p className="text-black text-xl">Added safety and protection students and stafi</p>
                            </div>
                        </div>      

                        <div className="flex flex-row gap-4">
                            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ccb16a" fill-rule="evenodd" clip-rule="evenodd"><path d="M6 23h-3v-10l8.991-8.005 9.009 8.005v10h-3v-9h-12v9zm1-2h10v2h-10v-2zm0-3h10v2h-10v-2zm10-3v2h-10v-2h10zm-5-14.029l12 10.661-1.328 1.493-10.672-9.481-10.672 9.481-1.328-1.493 12-10.661z"/></svg>
                            <div className="">
                            <h5 className="text-black text-xl">Warehouses & industrial facilities</h5>
                            <p className="text-black text-xl">Protect large glass surfaces for damaze and instrution</p>
                            </div>
                        </div> 
                    </div>
                      <div className="flex flex-col gap-8 md:w-[50%] w-full ">
                         <Image
                                                  src={`/images/commercial-image.webp`}
                                                  alt="testimonials"
                                                  width={500}
                                                  height={500}
                                                  className="w-full object-cover lg:mt-[-150] md:mt-[-120] rounded-2xl shadow-lg "
                                                />
                                               
                        <div>
                        <h4 className="md:text-4xl text-3xl text-black uppercase md:max-w-lg w-full leading-[100%]">why choose </h4>
                        <span className="md:text-4xl text-3xl text-black uppercase md:max-w-lg w-full leading-[100%]"> fort knox solutions?</span> 
                        </div>
                        <div className="flex flex-row gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ccb16a"  viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/></svg>
                       <div className="">
                            <h5 className="text-black text-xl">Commercial-grade protection</h5>
                            <p className="text-black sm:text-xl text-lg">Premium films build for businesses </p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ccb16a" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/></svg>
                       <div className="">
                            <h5 className="text-black text-xl">Fast installation </h5>
                            <p className="text-black sm:text-xl text-lg">Minimum discruption to operations</p>
                            </div>
                        </div>     

                        <div className="flex flex-row gap-4 mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ccb16a" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/></svg>
                       <div className="">
                            <h5 className="text-black text-xl">Trusted by local bussiness</h5>
                            <p className="text-black sm:text-xl text-lg">Protect large glass surfaces for damaze and instrution</p>
                            </div>
                        </div>                                
                      </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default CommertialSecurityComponent