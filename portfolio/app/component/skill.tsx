import Link from "next/link";
import React from "react";
import Image from "next/image"

const Skill = () => {
    return (
        <div id="skill">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-14 mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-2xl font-[cursive,Comforter] text-[#fff] m-5 bg-initial drop-shadow-[2px_2px_2px_red]">
                            Skills
                        </h1>
                    </div>
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-3">
                        <div className="p-4 sm:w-1/2 w-full">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center transform hover:scale-[1.1]">
                                <Image src={require("../../public/assets/nextjs-icon.svg")} className="" alt="Ahmed Raza" width={50} height={50} />
                                <span className="title-font font-medium mx-5">
                                    NEXT JS
                                </span>
                            </div>
                        </div>
                        <div className="p-4 sm:w-1/2 w-full">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center transform hover:scale-[1.1]">
                                <Image src={require("../../public/assets/tailwind-css-logo.png")} className="" alt="Ahmed Raza" width={50} height={50} />
                                <span className="title-font font-medium mx-5">
                                    Tailwind CSS
                                </span>
                            </div>
                        </div>
                        <div className="p-4 sm:w-1/2 w-full">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center transform hover:scale-[1.1]">
                                <Image src={require("../../public/assets/Git-Icon-1788C.png")} className="" alt="Ahmed Raza" width={50} height={50} />
                                <span className="title-font font-medium mx-5">
                                    Git
                                </span>
                            </div>
                        </div>
                        <div className="p-4 sm:w-1/2 w-full">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center transform hover:scale-[1.1]">
                                <Image src={require("../../public/assets/github-logo.png")} className="" alt="Ahmed Raza" width={50} height={50} />
                                <span className="title-font font-medium mx-5">
                                    Github
                                </span>
                            </div>
                        </div>
                        <div className="p-4 sm:w-1/2 w-full">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center transform hover:scale-[1.1]">
                                <Image src={require("../../public/assets/nodejs-logo.png")} className="" alt="Ahmed Raza" width={50} height={50} />
                                <span className="title-font font-medium mx-5">NodeJS</span>
                            </div>
                        </div>
                        <div className="p-4 sm:w-1/2 w-full">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center transform hover:scale-[1.1]">
                                <Image src={require("../../public/assets/C-Logo.png")} className="" alt="Ahmed Raza" width={50} height={50} />
                                <span className="title-font font-medium mx-5">
                                    C
                                </span>
                            </div>
                        </div>
                        <div className="p-4 sm:w-1/2 w-full">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center transform hover:scale-[1.1]">
                                <Image src={require("../../public/assets/HTML5-logo.png")} alt="Ahmed Raza" width={50} height={50} />
                                <span className="title-font font-medium mx-5">
                                    HTML 5
                                </span>
                            </div>
                        </div>
                        <div className="p-4 sm:w-1/2 w-full">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center transform hover:scale-[1.1]">
                                <Image src={require("../../public/assets/CSS3-logo.png")} className="" alt="Ahmed Raza" width={50} height={50} />
                                <span className="title-font font-medium mx-5">
                                    CSS 3
                                </span>
                            </div>
                        </div>
                        <div className="p-4 sm:w-1/2 w-full">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center transform hover:scale-[1.1]">
                                <Image src={require("../../public/assets/JavaScript-logo.png")} className="" alt="Ahmed Raza" width={50} height={50} />
                                <span className="title-font font-medium mx-5">
                                    JavaScript
                                </span>
                            </div>
                        </div>
                        <div className="p-4 sm:w-1/2 w-full">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center transform hover:scale-[1.1]">
                                <Image src={require("../../public/assets/TypeScript-logo.png")} className="" alt="Ahmed Raza" width={50} height={50} />
                                <span className="title-font font-medium mx-5">
                                    TypeScript
                                </span>
                            </div>
                        </div>
                        <div className="p-4 sm:w-1/2 w-full">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center transform hover:scale-[1.1]">
                                <Image src={require("../../public/assets/firebase-logo.png")} className="" alt="Ahmed Raza" width={50} height={50} />
                                <span className="title-font font-medium mx-5">
                                    Firebase
                                </span>
                            </div>
                        </div>
                        <div className="p-4 sm:w-1/2 w-full">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center transform hover:scale-[1.1]">
                                <Image src={require("../../public/assets/MongoDB-logo.png")} className="" alt="Ahmed Raza" width={50} height={50} />
                                <span className="title-font font-medium mx-5">
                                    MongoDB Database
                                </span>
                            </div>
                        </div>
                        <div className="p-4 sm:w-1/2 w-full">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center transform hover:scale-[1.1]">
                                <Image src={require("../../public/assets/ExpressJS-logo.png")} className="" alt="Ahmed Raza" width={50} height={50} />
                                <span className="title-font font-medium mx-5">ExpressJS</span>
                            </div>
                        </div>
                        <div className="p-4 sm:w-1/2 w-full">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center transform hover:scale-[1.1]">
                                <Image src={require("../../public/assets/React-logo.png")} className="" alt="Ahmed Raza" width={50} height={50} />
                                <span className="title-font font-medium mx-5">ReactJS</span>
                            </div>
                        </div>
                        <div className="p-4 sm:w-1/2 w-full">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center transform hover:scale-[1.1]">
                                <Image src={require("../../public/assets/cyclic-sh-icon.png")} className="" alt="Ahmed Raza" width={50} height={50} />
                                <span className="title-font font-medium mx-5">Cyclic</span>
                            </div>
                        </div>
                        <div className="p-4 sm:w-1/2 w-full">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center transform hover:scale-[1.1]">
                                <Image src={require("../../public/assets/postman-icon.svg")} className="" alt="Ahmed Raza" width={50} height={50} />
                                <span className="title-font font-medium text-xl mx-5">Postman</span>
                            </div>
                        </div>
                        <div className="p-4 sm:w-1/2 w-full">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center transform hover:scale-[1.1]">
                                <Image src={require("../../public/assets/Vercel_favicon.svg")} className="" alt="Ahmed Raza" width={50} height={50} />
                                <span className="title-font font-medium mx-5">Vercel</span>
                            </div>
                        </div>
                        <div className="p-4 sm:w-1/2 w-full">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center transform hover:scale-[1.1]">
                                <Image src={require("../../public/assets/Bootstrap_logo.svg.png")} className="" alt="Ahmed Raza" width={50} height={50} />
                                <span className="title-font font-medium mx-5">Bootstrap</span>
                            </div>
                        </div>
                        <div className="p-4 sm:w-1/2 w-full">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center transform hover:scale-[1.1]">
                                <Image src={require("../../public/assets/Visual_Studio_Code_1.35_icon.svg.png")} className="" alt="Ahmed Raza" width={50} height={50} />
                                <span className="title-font font-medium mx-5">VS Code</span>
                            </div>
                        </div>
                        <div className="p-4 sm:w-1/2 w-full ">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center transform hover:scale-[1.1]">
                                <Image src={require("../../public/assets/terminal-logo.png")} className="" alt="Ahmed Raza" width={50} height={50} />
                                <span className="title-font font-medium mx-5">Command Line</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Skill;