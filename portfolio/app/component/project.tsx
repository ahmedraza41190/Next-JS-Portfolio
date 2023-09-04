import Link from "next/link";
import React from "react";
import Image from "next/image"

const Project = () => {

    return (
        <div id="project">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-14 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-[cursive,Comforter] text-[#fff] m-5 bg-initial drop-shadow-[2px_2px_2px_red]">
                            My Projects
                        </h1>
                    </div>
                    <div className="flex flex-wrap -m-5 -mt-[3rem]">
                        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={require("../../public/assets/project/expertizo (1).png")} 
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                    Saylani Project
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    Expertizo Website
                                    </h1>
                                    <p className="leading-relaxed line-clamp-2">
                                        This is the project which I've created for class Assisgnment.
                                    </p> 
                                    <Link target="_blank" href={"https://ahmedraza41190.github.io/HTML.Assignment.6/#"}>
                                    <p className="leading-relaxed text-blue-500 hover:underline">
                                       View Project...
                                    </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={require("../../public/assets/project/Crud-App.png")} 
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                    Saylani Project
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    CRUD APP
                                    </h1>
                                    <p className="leading-relaxed line-clamp-2">
                                        This is the project which I've created for class Assisgnment.
                                    </p> 
                                    <Link target="_blank" href={"https://odd-cuff-links-lamb.cyclic.cloud/"}>
                                    <p className="leading-relaxed text-blue-500 hover:underline">
                                       View Project...
                                    </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={require("../../public/assets/project/Blog-App.png")} 
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                    Saylani mini-hackathon Project
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    Personal Blog-App
                                    </h1>
                                    <p className="leading-relaxed line-clamp-2">
                                        This is the project which I've created for class Assisgnment.
                                    </p> 
                                    <Link target="_blank" href={"https://mini-hackathon-gilt.vercel.app/login.html"}>
                                    <p className="leading-relaxed text-blue-500 hover:underline">
                                       View Project...
                                    </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={require("../../public/assets/project/Quiz-App.png")} 
                                />
                                 <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                    Saylani Project
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    Quiz Application
                                    </h1>
                                    <p className="leading-relaxed line-clamp-2">
                                        This is the project which I've created for class Assisgnment.
                                    </p> 
                                    <Link target="_blank" href={"https://ahmedraza41190.github.io/Quiz-App/"}>
                                    <p className="leading-relaxed text-blue-500 hover:underline">
                                       View Project...
                                    </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={require("../../public/assets/project/Weather-App.png")} 
                                />
                              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                    Saylani Project
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    Weather App
                                    </h1>
                                    <p className="leading-relaxed line-clamp-2">
                                        This is the project which I've created for class Assisgnment.
                                    </p> 
                                    <Link target="_blank" href={"https://ahmedraza41190.github.io/Weather-app/"}>
                                    <p className="leading-relaxed text-blue-500 hover:underline">
                                       View Project...
                                    </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={require("../../public/assets/project/OLX.png")} 
                                />
                               <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                    Saylani Project
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    OLX-Website
                                    </h1>
                                    <p className="leading-relaxed line-clamp-2">
                                        This is the project which I've created for class Assisgnment.
                                    </p> 
                                    <Link target="_blank" href={"https://ahmedraza41190.github.io/OLX-Website/"}>
                                    <p className="leading-relaxed text-blue-500 hover:underline">
                                       View Project...
                                    </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Project;