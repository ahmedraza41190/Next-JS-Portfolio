import React from "react"
import Link from "next/link"
import Image from "next/image"
import { AiOutlineCloudDownload } from 'react-icons/Ai';

const Navbar = () => {
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Image src={require("../../public/assets/picture/my-logo.jpg")} className="" alt="Ahmed Raza" width={50} height={50} />
                        <span className="ml-3 text-xl">PORTFOLIO</span>
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link href={"/"} className="mr-5 hover:text-blue-600">Home</Link>
                        <Link href={"#"} className="mr-5 hover:text-blue-600">About</Link>
                        <Link href={"#"} className="mr-5 hover:text-blue-600">Skills</Link>
                        <Link href={"#"} className="mr-5 hover:text-blue-600">Projects</Link>
                        <Link href={"#"} className="mr-5 hover:text-blue-600">Contact</Link>
                    </nav>
                    <Link href={"/assets/cv"}>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                        Download CV
                        <AiOutlineCloudDownload className="text-xl ml-2" />
                    </button>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default Navbar