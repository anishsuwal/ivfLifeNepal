


import { useRef, useState } from 'react';
import { sendEmailx } from '../email/sendmail';


export default function ContactUs() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phnumber, setPhnumber] = useState('')
    const [message, setMessage] = useState('')
    const [fieldError, setFieldError] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (name.length == 0) {
            setFieldError(true)
            return
        }
        else if (email.search()) {
            setFieldError(true)
            return
        }
        else if (phnumber.length == 0) {
            setFieldError(true)
            return
        }
        else if (message.length == 0) {
            setFieldError(true)
            return
        }
        else {
            setFieldError(false)

        }
        sendEmailx(form, "template_4q7cnaa")
        e.target.reset()
    };


    return (
        <section id="contactus-id" className="scroll-my-[270px] md:scroll-my-[200px]">
            <div className="justify-center items-center  text-bold px-5 xl:m-32 mt-10 ">

                <div className="text-center">
                    <p className="text-xl md:text-2xl font-semibold text-center text-green-600">Contact Us</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-20 justify-between 
            text-xs lg:text-sm  md:pl-10  mt-5 border-t p-10 shadow-2xl bg-white rounded-lg text-center">
                    <div >
                        <p className="font-semibold text-lg">
                            About the Clinic
                        </p>
                        <div className="text-justify ">
                            <p className="mt-5">
                                We are honored to have helped thousands of couples and single mothers receive the gift of parenthood and being given the opportunity to guide them through their difficult period of infertility.
                            </p>
                            <p className="mt-5">
                                IvfLife Nepal is not just a group of high-end fertility clinics providing low-cost IVF treatment options, but also a source of support for all those coping with infertility. Our clinics represent the very best of reproductive medicine, forged through decades of experience.
                            </p>
                            <p className="mt-5">
                                We treat you with the utmost dignity and respect that you deserve. Every clinic has a comfortable and friendly environment that is optimal for fertility treatment. World fertility Services are dedicated to improving the fertility networks and delivering consistently high quality care. If you are looking for a clinic that treats patient with care, you have reached the right place.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1  mt-10 w-full ">
                        <p className="font-semibold text-sm">
                            Get Free Doctor Consultation
                        </p>
                        <form ref={form} onSubmit={sendEmail}>
                            <input className=" ring-green-600 
                                ring-1
                    rounded-lg w-full py-2 px-4 mt-5 text-black  text-xs lg:text-sm uppercase" placeholder="Enter Your Name Here"
                                id="name" name='name' type="text" onChange={e => setName(e.target.value)} />
                            {
                                fieldError && name.length == 0 ?
                                    <p className="  text-red-600 font-semibold text-xs ">*Name Cannot Be Empty</p>
                                    : ""
                            }

                            <input className=" ring-green-600 
                                ring-1
                    rounded-lg  w-full mt-5 py-2 px-4  text-black  text-xs lg:text-sm" placeholder="Please Enter Valid Email Address"
                                id="email" name='email' type="text" onChange={e => setEmail(e.target.value)} />
                            {
                                fieldError && !email.includes('@') ?
                                    <p className="  text-red-600 font-semibold text-xs ">*Enter The Valid Email Address</p>
                                    : ""
                            }
                            <input className=" ring-green-600 
                                ring-1
                    rounded-lg  w-full py-2 mt-5  px-4  text-black text-xs lg:text-sm " placeholder=" Country Code + Contact Number"
                                id="number" name='phnumber' type="number" onChange={e => setPhnumber(e.target.value)} />
                            {
                                fieldError && phnumber.length == 0 ?
                                    <p className="  text-red-600 font-semibold text-xs ">*Phone Number Cannot Be Empty</p>
                                    : ""
                            }

                            <textarea
                                rows="4"
                                className="block p-2.5 
                            mt-5 py-2 px-4
                                w-full
                                text-sm
                                bg-clip-padding 
                                transition
                                ease-in-out
                                rounded-lg
                                m-0
                                ring-green-600 
                                ring-1" placeholder="Enter Your Message Here"
                                id="message" name='message' type="text" onChange={e => setMessage(e.target.value)} />
                            {
                                fieldError && message.length == 0 ?
                                    <p className="  text-red-600 font-semibold text-xs ">*Message Cannot Be Empty</p>
                                    : ""
                            }
                            <div className="flex p-5 w-full mt-5  items-center justify-center text-center ">
                                <button className=" border bg-green-600 
                    rounded-lg py-2 px-10  text-xs lg:text-sm text-white shadow-2xl shadow-black hover:bg-green-300 hover:text-green-600 "
                                >Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}


