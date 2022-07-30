
import { useRef, useState } from 'react';
import { sendEmailx } from '../email/sendmail';


export default function Calculate() {

    const [femaleAge, setFemaleAge] = useState('')
    const [maleAge, setMaleAge] = useState('')
    const [beforePregnant, setbeforePregnant] = useState('')
    const [maleInfertility, setMaleInfertility] = useState('NO')
    const [endometriosis, setEndometriosis] = useState('NO')
    const [tubalDisease, setTubalDisease] = useState('NO')
    const [otherTest, setOtherTest] = useState('NO')
    const [testResult, setTestResult] = useState('')
    const [ivfTest, setIvfTest] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phnumber, setPhnumber] = useState('')
    const [message, setMessage] = useState('')
    const [fieldError, setFieldError] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (femaleAge.length == 0 || (femaleAge < 18 || femaleAge > 70)) {
            setFieldError(true)
            return
        }
        else if (maleAge.length == 0) {
            setFieldError(true)
            return
        }
        else if (beforePregnant == '') {
            setFieldError(true)
            return
        }
        else if (maleInfertility == 'NO' && endometriosis == 'NO' && tubalDisease == 'NO' && otherTest == 'NO') {
            setFieldError(true)
            return
        }

        else if (testResult == '') {
            setFieldError(true)
            return
        }
        else if (ivfTest == '') {
            setFieldError(true)
            return
        }
        else if (name.length == 0) {
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
        sendEmailx(form, "template_lpzdgo6")
        e.target.reset()
    };
    return (

        <section id="calculate" className="scroll-my-[130px] md:scroll-my-[200px]">
            <div className="justify-center items-center  text-bold px-5 xl:m-32 mt-10 ">
                <div className="  p-3 md:mt-10  items-center justify-center text-center ">
                    <p className="text-xl md:text-2xl font-bold text-green-600">Your IVF Success Estimator</p>
                    <p className=" text-xs md:text-lg font-semibold pt-5 text-green-500">Estimate your chance of having a baby using IVF</p>
                    <p className="mt-5 text-xs lg:text-sm  text-justify md:text-center">Your IVF Success Estimator uses the main factors that are known to be associated with the success of
                        IVF treatment. The estimate generated is based on the information you enter, and the chance of a live
                        birth based on women who have had IVF treatment  with the same characteristics as you.</p>
                </div>
                <div className=" items-center rounded-lg shadow-2xl bg-white  p-2 ">
                    <p className="md:text-xs xl:text-lg font-semibold p-5 shadow-lg mt-2 border-t rounded-lg text-center">Enter your details</p>

                    <form ref={form} onSubmit={sendEmail}>

                        <div className="flex flex-col md:flex-row gap-10  md:p-10 text-xs lg:text-sm  justify-between items-center  border-b p-5 ">
                            <div className=" justify-between items-center text-center">
                                <p>Your Age</p>
                                <p>(The age of the female)</p>
                                <input className=" border
                    rounded-lg   py-2 px-4  text-black  text-center text-sm w-28 mt-5" placeholder=" Age"
                                    id="age" type="number" name="femaleAge" onChange={e => setFemaleAge(e.target.value)} /><span className="text-sm ml-2"> years</span>
                                {
                                    fieldError &&  (femaleAge < 18 || femaleAge > 70) ?
                                        <p className=" mt-1 text-red-600 font-semibold text-xs ">*Please Enter The Correct Age</p>
                                        : ""
                                }
                            </div>
                            <div className=" justify-between items-center text-center">
                                <p>Sperm provider&apos;s age</p>
                                <p>(partner or donor)</p>
                                <input className=" border
                    rounded-lg   py-2 px-4  text-black  text-center text-sm w-28 mt-5" placeholder=" Age"
                                    id="age" type="number" name="maleAge" onChange={e => setMaleAge(e.target.value)} /><span className="text-sm ml-2"> years</span>
                                {
                                    fieldError &&  (maleAge < 18 || maleAge > 70) ?
                                        <p className=" mt-1 text-red-600 font-semibold text-xs ">*Please Enter The Correct Age</p>
                                        : ""
                                }
                            </div>
                            <div className=" justify-center  items-center text-center">
                                <p>Have you been pregnant before?</p>
                                <p>(A pregnancy of at least 20 weeks gestation)</p>
                                <div className="inline-flex">
                                    <input className=" sr-only peer" type="radio" value=" Yes" name="beforePregnant" id="Yes" />
                                    <label className=" rounded-full mt-5 p-3 w-12 h-12 text-sm
                                     bg-white border border-gray-300  
                    cursor-pointer focus:outline-none  hover:bg-green-600 hover:text-white 
                     peer-checked:bg-green-600 peer-checked:text-white  font-bold peer-checked:ring-1 
                    peer-checked:border-transparent justify-center"
                                        htmlFor="Yes" onClick={() => {
                                            setbeforePregnant("YES")
                                        }}>{"Yes"}</label>
                                </div>
                                <div className="inline-flex">
                                    <input className="sr-only peer" type="radio" value="No" name="beforePregnant" id="No" />
                                    <label className=" rounded-full p-3 w-12 h-12 ml-20 justify-center  text-sm bg-white border border-gray-300  cursor-pointer focus:outline-none 
                   hover:bg-green-600 hover:text-white   peer-checked:bg-green-600 peer-checked:text-white  font-bold peer-checked:ring-1 peer-checked:border-transparent"
                                        htmlFor="No" onClick={() => {
                                            setbeforePregnant("NO")
                                        }}>{"No"}</label>
                                </div>
                                {
                                    fieldError && beforePregnant == '' ?
                                        <p className=" mt-1 text-red-600 font-semibold text-xs ">*Please Select The Option</p>
                                        : ""
                                }
                            </div>
                        </div>
                        <div className="md:flex  text-xs lg:text-sm  md:pl-10  pt-10 justify-between items-center text-center  ">
                            <div>
                                <p>What are your main infertility diagnoses?</p>
                                <p>Select one or more diagnoses</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row text-xs lg:text-sm gap-y-5 sm:pl-5  md:pl-10 md:p-5 p-3 mb-5  justify-between ">
                            <div className="text-left ">
                                <div>
                                    <label>
                                        <input type="checkbox" className=" accent-green-600" value={maleInfertility} name="maleInfertility"
                                            onChange={(e) => {
                                                e.target.checked
                                                    ? setMaleInfertility("YES")
                                                    : setMaleInfertility("NO")
                                            }}
                                        /> Male infertility
                                    </label>
                                </div>
                                <div className="mt-5">
                                    <label>
                                        <input type="checkbox" className="accent-green-600" value={endometriosis} name="endometriosis"
                                            onChange={(e) => {
                                                e.target.checked
                                                    ? setEndometriosis("YES")
                                                    : setEndometriosis("NO")
                                            }}
                                        /> Endometriosis
                                    </label>
                                </div>
                            </div>
                            <div className="text-left md:ml-20">
                                <div>
                                    <label>
                                        <input type="checkbox" className="accent-green-600 " value={tubalDisease} name="tubalDisease"
                                            onChange={(e) => {
                                                e.target.checked
                                                    ? setTubalDisease("YES")
                                                    : setTubalDisease("NO")
                                            }}
                                        /> Tubal disease
                                    </label>
                                </div>
                                <div className="mt-5">
                                    <label>
                                        <input type="checkbox" className="accent-green-600" value={otherTest} name="otherTest"
                                            onChange={(e) => {
                                                e.target.checked
                                                    ? setOtherTest("YES")
                                                    : setOtherTest("NO")
                                            }}
                                        /> Other causes of infertility (female)
                                    </label>
                                </div>
                                {
                                    fieldError && (maleInfertility == 'NO' && endometriosis == 'NO' && tubalDisease == 'NO' && otherTest == 'NO') ?
                                        <p className=" mt-1 text-red-600 font-semibold text-xs ">*Please Select Atleast One Option</p>
                                        : ""
                                }
                            </div>

                            <div className=" border-b md:border-r " />
                            <div className="text-left ">
                                <div>
                                    <label>
                                        <input type="radio" value={testResult} name="testResult" className="accent-green-600 " id="1"
                                            onChange={e => setTestResult("My tests have not found an explanation for why I have not had a baby")} />
                                        My tests have not found an explanation for why I have not had a baby
                                    </label>
                                </div>
                                <div className="mt-5">
                                    <label>
                                        <input type="radio" name="testResult" value={testResult} className="accent-green-600" id="2"
                                            onChange={e => setTestResult("I have not had any tests carried out")} />
                                        I have not had any tests carried out
                                    </label>
                                </div>
                                {
                                    fieldError && testResult == '' ?
                                        <p className=" mt-1 text-red-600 font-semibold text-xs ">*Please Select The Option</p>
                                        : ""
                                }
                            </div>
                        </div>

                        <div className="flex-1  text-xs lg:text-sm  md:pl-10  pt-10 border-t  text-center">
                            <p>Have you had previous IVF treatment?</p>

                            <div className="inline-flex">
                                <input className=" sr-only peer" type="radio" value="Yes" name="ivfTest" id="Yes1" />
                                <label className="rounded-full mt-5 p-3 w-12 h-12 a text-sm bg-white border border-gray-300  
                    cursor-pointer focus:outline-none  hover:bg-green-600 hover:text-white 
                     peer-checked:bg-green-600 peer-checked:text-white  font-bold peer-checked:ring-1 
                    peer-checked:border-transparent justify-center"
                                    htmlFor="Yes1" onClick={() => {
                                        setIvfTest("YES")
                                    }}>{"Yes"}</label>
                            </div>
                            <div className="inline-flex">
                                <input className="sr-only peer" type="radio" value="No" name="ivfTest" id="No1" />
                                <label className=" rounded-full p-3 w-12 h-12 ml-20 justify-center  text-sm bg-white border border-gray-300  cursor-pointer focus:outline-none 
                   hover:bg-green-600 hover:text-white   peer-checked:bg-green-600 peer-checked:text-white  font-bold peer-checked:ring-1 peer-checked:border-transparent"
                                    htmlFor="No1" onClick={() => {
                                        setIvfTest("NO")
                                    }}>{"No"}</label>
                            </div>
                            {
                                fieldError && ivfTest == '' ?
                                    <p className=" mt-1 text-red-600 font-semibold text-xs ">*Please Select The Option</p>
                                    : ""
                            }
                        </div>
                        <div className="flex flex-col md:flex-row md:gap-20 justify-between text-xs lg:text-sm  md:pl-10  mt-10 border-t pt-10 p-5 text-center">
                            <div className="flex-1  mt-5 w-full ">
                                <input className=" ring-green-600 
                                ring-1
                    rounded-lg w-full py-2 px-4  text-black  text-xs lg:text-sm uppercase" placeholder="Enter Your Name Here"
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
                                    id="email" name='phnumber' type="number" onChange={e => setPhnumber(e.target.value)} />
                                {
                                    fieldError && phnumber.length == 0 ?
                                        <p className="  text-red-600 font-semibold text-xs ">*Phone Number Cannot Be Empty</p>
                                        : ""}
                            </div>
                            <div className=" w-full md:w-1/2    mt-5 ">
                                <textarea
                                    rows="4"
                                    className="block p-2.5 
                                w-full
                                text-sm
                                bg-clip-padding 
                                transition
                                ease-in-out
                                rounded-lg
                                m-0
                                ring-green-600 
                                ring-1"
                                    placeholder="Enter Your Message Here"
                                    id="message" name='message' type="text" onChange={e => setMessage(e.target.value)} />
                                {
                                    fieldError && message.length == 0 ?
                                        <p className="  text-red-600 font-semibold text-xs ">*Message Cannot Be Empty</p>
                                        : ""
                                }
                            </div>
                        </div>
                        <div className="flex p-5 w-full  items-center justify-center text-center ">

                            <button className=" border bg-green-600 
                    rounded-lg py-2 px-10  text-xs lg:text-sm text-white shadow-2xl shadow-black hover:bg-green-300 hover:text-green-600 "
                            >
                                Click Here To Get The Details ...
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}