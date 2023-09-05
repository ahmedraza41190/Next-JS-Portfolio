import React from "react";
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
    return (
        <div id="about" className="z-50">
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
                   
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center ">
                        <h1 className="sm:text-4xl text-3xl font-[cursive,Comforter] text-[#fff] m-5 bg-initial drop-shadow-[2px_2px_2px_red]">
                            About
                        </h1>
                        <p className="mb-5 leading-relaxed text-white z-0">
                        Hi, I am a <b>Full-Stack Web Developer</b> born and rased in Karachi,Pakistan.
                        Currently I am a student of <b>BSCS</b> in <strong>"Orasoft Institute"</strong>. 
                        And I am learning <b>web and mobile app development</b> course in <strong>"SMIT"</strong> and also 
                        I am learning <b>web 3.0 and Metaverse</b> in <strong>"PIAIC"</strong>.
                        </p>
                        <p className="mb-5 leading-relaxed text-white">
                        I acheived two time awards in <b>"science exibition"</b> and one time in <strong> "ARTs" </strong> from school.
                        </p>
                        <div className="flex justify-center z-0">
                            <Link href={"/assets/cv/portfolio.docx"}>
                            <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                                View CV
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    )
}

export default About;