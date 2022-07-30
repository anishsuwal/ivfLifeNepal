
import { useRef, useState } from 'react';
import { sendEmailx } from '../email/sendmail';


export default function Hero() {

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
        if (email.search()) {
            setFieldError(true)
            return
        }
        if (phnumber.length == 0) {
            setFieldError(true)
            return
        }
        if (message.length == 0) {
            setFieldError(true)
            return
        }
        sendEmailx(form, "template_4q7cnaa")
        e.target.reset()

    };

    return (
        <section id="home" className="scroll-my-[250px] md:scroll-my-[166px]">
            <div className="flex flex-col lg:flex-row justify-between     bg-no-repeat min-h-[70vh] object-cover  bg-contain lg:bg-cover xl:bg-center 
              bg-partners text-bold">
                <div className="  p-5  xl:pl-32 lg:mt-10  text-green-600 ">
                    <p className="text-xs sm:text-2xl lg:text-4xl font-semibold">Understanding IVF</p>
                    <p className="md:flex hidden md:text-xs 2xl:text-lg pt-5">Before you get started, learn about what&apos;s involved
                        <br />in IVF treatment and different types of IVF cycles.</p>
                </div>
                <div className="flex  p-5  lg:p-10 mt-20 lg:mt-0 opacity-70 items-center justify-center  
             bg-slate-50 ">
                    <div className="flex flex-col md:items-center mb-6  w-fit    items-center justify-center text-center ">
                        <div className=" pb-5">
                            <p className="  font-bold text-lg lg:text-2xl text-red-600 ">
                                100%  GUARANTEED IVF
                            </p>
                            <p className="  font-bold lg:text-lg mt-5 text-black ">
                                Get Cost and Procedure Details
                            </p>
                        </div>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="flex-1 shadow-lg mt-5 w-full ">
                                <input className=" border border-green-600 uppercase
                    rounded-lg w-full py-2 px-4  text-black  text-xs lg:text-sm" placeholder="Enter Your Name Here"
                                    id="name" name='name' type="text" onChange={e => setName(e.target.value)} />
                                {
                                    fieldError && name.length == 0 ?
                                        <p className="  text-red-600 font-semibold text-xs ">*Name Cannot Be Empty</p>
                                        : ""
                                }
                            </div>
                            <div className="flex-1 shadow-lg mt-5  w-full">
                                <input className=" ring-2
                    rounded-lg  w-full py-2 px-4  text-black  text-xs lg:text-sm" placeholder="Please Enter Valid Email Address"
                                    id="email" name='email' type="text" onChange={e => setEmail(e.target.value)} />
                                {
                                    fieldError && !email.includes('@') ?
                                        <p className="  text-red-600 font-semibold text-xs ">*Enter The Valid Email Address</p>
                                        : ""
                                }
                            </div>
                            <div className="flex-1 shadow-lg mt-5  w-full">
                                <input className=" ring-2
                    rounded-lg  w-full py-2 px-4  text-black text-xs lg:text-sm " placeholder=" Country Code + Contact Number"
                                    id="number" name='phnumber' type="number" onChange={e => setPhnumber(e.target.value)} />
                                {
                                    fieldError && phnumber.length == 0 ?
                                        <p className="  text-red-600 font-semibold text-xs ">*Phone Number Cannot Be Empty</p>
                                        : ""
                                }
                            </div>
                            <div className="flex-1 shadow-lg mt-5  w-full">
                                <textarea className=" ring-2
                    rounded-lg  w-full py-2 px-4  text-black  text-xs lg:text-sm" placeholder="Enter Your Message Here"
                                    id="message" name='message' type="text" onChange={e => setMessage(e.target.value)} />
                                {
                                    fieldError && message.length == 0 ?
                                        <p className="  text-red-600 font-semibold text-xs ">*Message Cannot Be Empty</p>
                                        : ""
                                }
                            </div>
                            <div className="flex-1  mt-5  w-full">
                                <button className=" border bg-green-700 
                    rounded-lg py-2 px-10  text-xs lg:text-sm text-white shadow-2xl shadow-black hover:bg-green-300 hover:text-green-600 "
                                >
                                    Click Here To Get The Details ...
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}