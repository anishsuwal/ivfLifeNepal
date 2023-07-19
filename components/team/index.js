
import anupama from "../../img/anupama.jpg"
import anupama1 from "../../img/anupama1.jpg"
import melina from "../../img/MelinaBhandari.jpg"
import urmila from "../../img/urmila.jpg"
import merina from "../../img/merina.jpg"
import Pradeep from "../../img/Pradeep.jpg"
import suresh from "../../img/Suresh.jpg"
import Image from "next/image"
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { AiOutlineCloseCircle } from "react-icons/ai";



export default function Team() {

    const notify = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className=" bg-white border-2  rounded-3xl shadow-2xl w-[129px] h-[283px] lg:w-[950px] lg:h-[680px]">
                    <div className="flex text-right items-end justify-end p-2 ">
                        <AiOutlineCloseCircle className="cursor-pointer hover:bg-red-300 rounded-full"  fontSize={35} color="#f0000" onClick={onClose}/>

                </div>
                    <div className=" flex flex-row gap-2 p-5 ">
                 
                        <div className="md:shrink-0 items-center justify-center text-center">
                            <Image className=" rounded-lg  w-full object-cover md:h-full md:w-48"
                                alt="IVFLIFENEPAL"
                                src={anupama1}
                                layout="fixed"
                                height={400}
                                width={250}
                                priority
                            />
                            <p className=" font-bold p-1 mt-2">Dr Anupama Suwal Gurung   </p>
                            <p className="  text-xs font-semibold p-1">MBBS, MD in Obstetrics and Gynecology</p>
                            <p className="  text-xs font-semibold p-1">Fellowship in Reproductive medicine and Infertility</p>
                            <p className="  text-xs font-semibold p-1">Senior fertility specialist (8 years of experience)</p>
                            <p className="  text-xs font-semibold p-1">Senior obstetrician / gynecologist (12 years of experience)</p>
                            <p className="  text-xs font-semibold p-1">Gynae laparoscopic surgeon</p>

                        </div>
                        <div className="custom-ui   border-l ">
                            <div>
                                <h1 className="pl-40 text-[#4b318d]  text-lg lg:text-2xl">
                                    <strong> About Anupama Suwal </strong>
                                </h1>
                            </div>
                            <div className="text-[12px] p-2 text-justify">
                                <h1>
                                    Dr. Anupama earned her medical degree (MBBS) from Kathmandu Medical College Teaching Hospital in Nepal. She did her Master degree in Obstetrics and gynecology in College of Medical Sciences Teaching Hospital, Bharatpur in Nepal. After residency, she was offered to work as a lecturer in the Obstetrics and Gynecology department of Kathmandu Medical College Teaching Hospital. She was honored to serve as a lecturer in the department of Obstetrics and Gynecology in Nepal Medical College Teaching Hospital.
                                </h1>
                                <h1 className="pt-2">
                                    Prior to becoming engaged in only infertility patients, she was actively participating in Health camps in rural areas of Nepal and had done many vaginal hysterectomies of Village patients with uterovaginal prolapse. Apart from that she had worked as a consultant Obstetrician and Gynecologist in different private health centers.
                                </h1>
                                <h1 className="pt-2">
                                    She received her fellowship degree in Reproductive medicine from Rainbow IVF, Agra, India and the course included hands on training in IUI, IVF/ART, ultrasonography, laparoscopy and hysteroscopy. She was also honored with a Diplomate certificate of Ian Donald School and one year membership during the Ian Donald Obstetrics and Gynecology ultrasound course in Delhi, India.
                                </h1>
                                <h1 className="pt-2">
                                    She also did fellowship in reproductive medicine from RISAA IVF in Delhi.
                                </h1>
                                <h1 className="pt-2">
                                    After that she focused her career  in infertility and IVF. She started working as an IVF specialist in Grande City Hospital in Nepal and gave pregnancies to many infertile couples. Currently she is persuading her career as an IVF specialist in Venus IVF Center . In Nepal, she is one of the few doctors involved in infertility clinics who is genuinely trained in this field. Recently she has started practicing in Ishan hospital as a consultant obstetrician gynecologist and IVF specialist.
                                </h1>
                                <h1 className="pt-2">
                                    She believes in updating her knowledge every second. That is why she had attended many national and international gynecological and fertility conferences. She had also done many presentations in national and international conferences and received awards at times. She has authored many publications and scientific abstracts on obstetrics, gynecology and reproductive medicine.
                                </h1>

                            </div>

                        </div>
                    </div>
                    </div>
                );
            }
        });
    }

    return (
        <section id="team-id" className="scroll-my-[130px] md:scroll-my-[200px]">
            <div className="justify-center items-center  text-bold px-5 shadow-2xl">

                <div className="text-center">
                    <p className="text-xl md:text-2xl font-semibold text-center text-green-600">Our Team</p>
                </div>

                <div className="flex flex-row md:gap-2 justify-between 
            text-xs lg:text-sm  md:pl-10  mt-5 border-t p-5 shadow-2xl bg-white rounded-lg text-center">
                    <div className=" bg-white  shadow-md overflow-hidden w-full mt-2 pb-5 ">
                        <div className="md:flex items-center justify-center text-center">
                            <div className="md:shrink-0 cursor-pointer hover:bg-green-200"  onClick={() => { notify() }}>
                                <Image className=" rounded-full bg-slate-500  w-full object-cover md:h-full md:w-48"
                                    alt="IVFLIFENEPAL"
                                    src={anupama}
                                    layout="fixed"
                                    height={200}
                                    width={200}
                                    priority
                                />
                                <p className="border-t font-bold p-2">Dr Anupama Suwal Gurung   </p>
                                <p className=" border-t font-semibold p-2">Senior fertility specialist <br></br>Gynae laparoscopic surgeon</p>
                                <p className=" border-t font-semibold p-2">12 years of experience</p>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-white  shadow-md overflow-hidden w-full mt-2 ">
                        <div className="md:flex items-center justify-center text-center">
                            <div className="md:shrink-0">
                                <Image className=" rounded-full bg-slate-500  w-full object-cover md:h-full md:w-48"
                                    alt="IVFLIFENEPAL"
                                    src={suresh}
                                    layout="fixed"
                                    height={200}
                                    width={200}
                                    priority
                                />
                                <p className="border-t font-bold p-2">Suresh Yadav </p>
                                <p className=" border-t font-semibold p-2">Senior Clinical<br></br> Embryologist</p>
                                <p className=" border-t font-semibold p-2">7 years of experience</p>
                            </div>

                        </div>

                    </div>
                    <div className=" bg-white  shadow-md overflow-hidden w-full mt-2 ">
                        <div className="md:flex items-center justify-center text-center">
                            <div className="md:shrink-0">
                                <Image className=" rounded-full bg-slate-500  w-full object-cover md:h-full md:w-48"
                                    alt="IVFLIFENEPAL"
                                    src={Pradeep}
                                    layout="fixed"
                                    height={200}
                                    width={200}
                                    priority
                                />
                                <p className="border-t font-bold p-2">Dr Pradeep Koirala  </p>
                                <p className=" border-t font-semibold p-2">Anesthesiologist <br></br></p>
                                <p className=" border-t font-semibold p-2">8 years of experience</p>
                            </div>

                        </div>

                    </div>
                    <div className=" bg-white  shadow-md overflow-hidden w-full mt-2 ">
                        <div className="md:flex items-center justify-center text-center">
                            <div className="md:shrink-0">
                                <Image className=" rounded-full bg-slate-500  w-full object-cover md:h-full md:w-48"
                                    alt="IVFLIFENEPAL"
                                    src={melina}
                                    layout="fixed"
                                    height={200}
                                    width={200}
                                    priority
                                />
                                <p className="border-t font-bold p-2">Melina bhandari  </p>
                                <p className=" border-t font-semibold p-2">Receptionist <br></br> Manager / Counseller</p>
                                <p className=" border-t font-semibold p-2">8 years of experience</p>
                            </div>

                        </div>

                    </div>
                   
                    <div className=" bg-white  shadow-md overflow-hidden w-full mt-2 pb-3">
                        <div className="md:flex items-center justify-center text-center">
                            <div className="md:shrink-0">
                                <Image className=" rounded-full bg-slate-500  w-full object-cover md:h-full md:w-48"
                                    alt="IVFLIFENEPAL"
                                    src={urmila}
                                    layout="fixed"
                                    height={200}
                                    width={200}
                                    priority
                                />
                                <p className="border-t font-bold p-2">Urmila chaudhary </p>
                                <p className=" border-t font-semibold p-2">Senior nurse <br></br>Assistant Embryologist</p>
                                <p className=" border-t font-semibold p-2">7 years of experience</p>


                            </div>

                        </div>

                    </div>
                    <div className=" bg-white  shadow-md overflow-hidden w-full mt-2 ">
                        <div className="md:flex items-center justify-center text-center">
                            <div className="md:shrink-0">
                                <Image className=" rounded-full bg-slate-500  w-full object-cover md:h-full md:w-48"
                                    alt="IVFLIFENEPAL"
                                    src={merina}
                                    layout="fixed"
                                    height={200}
                                    width={200}
                                    priority
                                />
                                <p className="border-t font-bold p-2">Merina Khanal </p>
                                <p className=" border-t font-semibold p-2">Staff nurse <br></br>Andrologist</p>
                                <p className=" border-t font-semibold p-2">4 years of experience</p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}


