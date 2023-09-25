import React, { FormEvent, useState } from "react";



const Contact = () => {

    // const [isSubmitted, setSubmitted] = useState(false)
    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [message, setMessage] = useState('')

    // const onSubmit = async (e: FormEvent) => {
    //     e.preventDefault()

    //     try {
    //         const res = await fetch('/api/contact', {
    //             method: 'POST',
    //             body: JSON.stringify({
    //                 name,
    //                 email,
    //                 message,
    //             }),
    //             headers: {
    //                 'content-type': 'application/json',
    //             },
    //         })
    //         if (res.status === 200) {
    //             setSubmitted(true)
    //         }
    //     } catch (err: any) {
    //         console.error('Err', err)
    //     }
    // }

    return (
        <div id="contact">
            <section className="text-gray-600 body-font relative ">
                <div className="container px-5 py-14 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe
                            width="100%"
                            height="100%"
                            className="absolute inset-0"
                            frameBorder={0}
                            title="map"
                            marginHeight={0}
                            marginWidth={0}
                            scrolling="no"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.3106887908116!2d67.08682007410702!3d24.92148374281543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f33bcb63525%3A0xeed74a6ed910ff0e!2sMona%20Heights!5e0!3m2!1sen!2s!4v1693769032951!5m2!1sen!2s"
                            style={{ filter: "contrast(1.2) opacity(0.4)" }}
                        />
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                    ADDRESS
                                </h2>
                                <p className="mt-1">
                                    B/15 4th FLOOR MONA HEIGHTS BLOCK-5 GULSHAN-E-IQBAL KARACHI
                                </p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                    EMAIL
                                </h2>
                                <a className="text-blue-500 leading-relaxed">ragix.aemi@gmail.com</a>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                                    PHONE
                                </h2>
                                <p className="leading-relaxed">03362187809</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2  p-4 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="sm:text-4xl text-3xl font-[cursive,Comforter] text-[#fff] m-5 bg-initial drop-shadow-[2px_2px_2px_red]">
                            Contact
                        </h2>
                        <form /* onSubmit={onSubmit} */ className="relative mb-4">

                            <label htmlFor="name" className="leading-7 text-sm text-white">
                                Name:
                            </label>

                            <input
                                // value={name}
                                // onChange={(e) => setName(e.target.value)}
                                required
                                type="text"
                                id="name"
                                name="name"
                                placeholder="name"
                                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />

                            <label htmlFor="email" className="leading-7 text-sm text-white">
                                Email:
                            </label>

                            <input
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}
                                required
                                type="email"
                                id="email"
                                name="email"
                                placeholder="name@example.com"
                                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />

                            <label htmlFor="message" className="leading-7 text-sm text-white">
                                Message:
                            </label>

                            <textarea
                                // value={message}
                                // onChange={(e) => setMessage(e.target.value)}
                                required
                                id="message"
                                name="message"
                                placeholder="message"
                                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                defaultValue={""}
                            />

                            <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Contact;
