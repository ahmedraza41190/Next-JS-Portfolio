import React from "react";
import Link from "next/link"
import Image from "next/image"
import { AiFillGithub } from 'react-icons/Ai';
import { AiFillFacebook } from 'react-icons/Ai';
import { AiFillInstagram } from 'react-icons/Ai';
import { AiFillLinkedin } from 'react-icons/Ai';
import { AiFillYoutube } from 'react-icons/Ai';

const Footer = () => {
    return (
        <div className="bg-white sticky z-50">
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col ">
                    <Link href={"/"} className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 z-50">
                        <Image  src={require("../../public/assets/picture/my-logo.jpg")} className="fill-[#f6b40080]" alt="Ahmed Raza" width={50} height={50} />
                        <span className="ml-3 text-xl">PORTFOLIO</span>
                    </Link>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 z-50">
                        © 2023 AHMED RAZA —
                        <Link href={""} className="text-gray-600 ml-1">
                            @ahmedraza41190
                        </Link>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start z-50">
                        <Link target="_blank" href={"https://www.facebook.com/profile.php?id=100009195927085"} className="text-gray-500">

                            <AiFillFacebook className="text-3xl hover:text-[#3b5998]" />

                        </Link>
                        <Link target="_blank" href={"https://github.com/ahmedraza41190"} className="ml-2 text-gray-500">

                            <AiFillGithub className="text-3xl hover:text-[#171515]" />

                        </Link>
                        <Link target="_blank" href={"https://www.instagram.com/ahmed_raza41190/?hl=en"} className="ml-2 text-gray-500">

                            <AiFillInstagram className="text-3xl hover:text-[#E4405F]" />

                        </Link>
                        <Link target="_blank" href={"https://www.linkedin.com/in/ahmed-raza-252bbb288/"} className="ml-2 text-gray-500">

                            <AiFillLinkedin className="text-3xl hover:text-[#0e76a8]" />

                        </Link>
                        <Link target="_blank" href={"https://www.youtube.com/@ahmedraza8592"} className="ml-2 text-gray-500 w-10 h-10">

                            <AiFillYoutube className="text-3xl hover:text-[#ff0000]" />

                        </Link>
                    </span>
                </div>
            </footer>

        </div>
    )
}

export default Footer