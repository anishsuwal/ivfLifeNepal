import service from "../../img/services.png"
import Image from "next/image"






export default function OurSetup() {

    return (
        <section id="setup-id" className="scroll-my-[130px] md:scroll-my-[200px]">
            <div className="justify-center items-center  text-bold px-5 xl:m-32 mt-10 ">

                <div className="text-center">
                    <p className="text-xl md:text-2xl font-semibold text-center text-green-600">Our Services</p>
                </div>
                <div className=' flex flex-row gap-10 text-xs lg:text-sm  md:pl-10  mt-5 border-t p-5 shadow-2xl bg-white rounded-lg text-center'>

                    <div className="text-justify ">
                        <p className="mt-5">
                            We offer a wide range of specialized treatments and procedures to cater to the diverse needs of individuals and couples seeking assistance with fertility, reproductive health, and gynecological concerns.
                        </p>
                        <p className="pt-5 font-bold text-lg">Our services include:</p>
                        <div className="flex flex-row gap-2 justify-between">
                            <div className="flex-1">
                        <details className="md:px-5  open:bg-white   border mt-5  open:ring-1 open:ring-black/5
         open:shadow-lg  p-2 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                            <summary className="leading-3 text-slate-900 hover:text-green-600  font-semibold  
                            text-xs  lg:text-smselect-none  cursor-pointer text-left">
                                OPD (Outpatient Department)                        </summary>
                            <div className="mt-2  text-xs md:text-sm  leading-6  text-justify shadow-lg p-5 ring-1 rounded-lg">
                                <p >
                                    Our dedicated team of experienced doctors and staff provide personalized consultations and expert medical advice to address your specific concerns.
                                </p>
                            </div>
                        </details>
                        <details className="md:px-5  open:bg-white   border mt-2  open:ring-1 open:ring-black/5
         open:shadow-lg  p-2 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                            <summary className="leading-3 text-slate-900 hover:text-green-600  font-semibold  
                            text-xs  lg:text-smselect-none  cursor-pointer text-left">
                               TVS (Transvaginal Ultrasound)                       </summary>
                            <div className="mt-2  text-xs md:text-sm  leading-6  text-justify shadow-lg p-5 ring-1 rounded-lg">
                                <p >
                                We utilize advanced imaging techniques to perform detailed diagnostic assessments of the reproductive system, ensuring accurate diagnoses and effective treatment planning.                                </p>
                            </div>
                        </details>
                        <details className="md:px-5  open:bg-white   border mt-2  open:ring-1 open:ring-black/5
         open:shadow-lg  p-2 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                            <summary className="leading-3 text-slate-900 hover:text-green-600  font-semibold  
                            text-xs  lg:text-smselect-none  cursor-pointer text-left">
                               Semen Analysis                      </summary>
                            <div className="mt-2  text-xs md:text-sm  leading-6  text-justify shadow-lg p-5 ring-1 rounded-lg">
                                <p >
                                Our state-of-the-art laboratory facilities offer precise evaluation of semen samples, aiding in the assessment of male fertility and guiding appropriate treatment options.                            </p></div>
                        </details>
                        <details className="md:px-5  open:bg-white   border mt-2  open:ring-1 open:ring-black/5
         open:shadow-lg  p-2 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                            <summary className="leading-3 text-slate-900 hover:text-green-600  font-semibold  
                            text-xs  lg:text-smselect-none  cursor-pointer text-left">
                               SSG (Salpingography)                     </summary>
                            <div className="mt-2  text-xs md:text-sm  leading-6  text-justify shadow-lg p-5 ring-1 rounded-lg">
                                <p >
                                This tube test procedure helps evaluate the fallopian tubes for any blockages or abnormalities that may affect fertility.
                                </p></div>
                        </details>
                        <details className="md:px-5  open:bg-white   border mt-2  open:ring-1 open:ring-black/5
         open:shadow-lg  p-2 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                            <summary className="leading-3 text-slate-900 hover:text-green-600  font-semibold  
                            text-xs  lg:text-smselect-none  cursor-pointer text-left">
                               IUI (Intrauterine Insemination)                    </summary>
                            <div className="mt-2  text-xs md:text-sm  leading-6  text-justify shadow-lg p-5 ring-1 rounded-lg">
                                <p >
                                Whether using self or donor sperm, we provide IUI procedures that enhance the chances of successful conception by placing prepared sperm directly into the uterus.                               
                                 </p></div>
                        </details>
                        <details className="md:px-5  open:bg-white   border mt-2  open:ring-1 open:ring-black/5
         open:shadow-lg  p-2 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                            <summary className="leading-3 text-slate-900 hover:text-green-600  font-semibold  
                            text-xs  lg:text-smselect-none  cursor-pointer text-left">
                               IVF ICSI (In Vitro Fertilization with Intracytoplasmic Sperm Injection)                    </summary>
                            <div className="mt-2  text-xs md:text-sm  leading-6  text-justify shadow-lg p-5 ring-1 rounded-lg">
                                <p >
                                We offer a range of IVF options, including self/donor egg, self/donor sperm, and donor embryo, tailored to individual needs and preferences.      
                                </p></div>
                        </details>
                        <details className="md:px-5  open:bg-white   border mt-2  open:ring-1 open:ring-black/5
                open:shadow-lg  p-2 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                                    <summary className="leading-3 text-slate-900 hover:text-green-600  font-semibold  
                                    text-xs  lg:text-smselect-none  cursor-pointer text-left">
                                    IVF ICSI with PGD (Preimplantation Genetic Diagnosis)                   </summary>
                                    <div className="mt-2  text-xs md:text-sm  leading-6  text-justify shadow-lg p-5 ring-1 rounded-lg">
                                        <p >
                                        Our advanced techniques allow for comprehensive genetic screening of embryos, ensuring the selection of healthy embryos for transfer, thereby increasing the chances of a successful pregnancy.
                                        </p></div>
                        </details>
                        <details className="md:px-5  open:bg-white   border mt-2  open:ring-1 open:ring-black/5
                open:shadow-lg  p-2 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                                    <summary className="leading-3 text-slate-900 hover:text-green-600  font-semibold  
                                    text-xs  lg:text-smselect-none  cursor-pointer text-left">
                                    Laser Hatching                    </summary>
                                    <div className="mt-2  text-xs md:text-sm  leading-6  text-justify shadow-lg p-5 ring-1 rounded-lg">
                                        <p >
                                        We employ laser technology to create a small opening in the outer shell of embryos, promoting their successful implantation into the uterus during IVF treatments.                                </p></div>
                        </details>
                        
                        <details className="md:px-5  open:bg-white   border mt-2  open:ring-1 open:ring-black/5
                open:shadow-lg  p-2 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                                    <summary className="leading-3 text-slate-900 hover:text-green-600  font-semibold  
                                    text-xs  lg:text-smselect-none  cursor-pointer text-left">
                                    Laparoscopy and Hysteroscopy                    </summary>
                                    <div className="mt-2  text-xs md:text-sm  leading-6  text-justify shadow-lg p-5 ring-1 rounded-lg">
                                        <p >
                                        Our minimally invasive surgical procedures allow for thorough examination and treatment of various gynecological conditions, ensuring faster recovery and reduced discomfort.                 
                                        </p></div>    </details>
                        <details className="md:px-5  open:bg-white   border mt-2  open:ring-1 open:ring-black/5
                open:shadow-lg  p-2 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                                    <summary className="leading-3 text-slate-900 hover:text-green-600  font-semibold  
                                    text-xs  lg:text-smselect-none  cursor-pointer text-left">
                                    ANC Check-up for Pregnancy             </summary>
                                    <div className="mt-2  text-xs md:text-sm  leading-6  text-justify shadow-lg p-5 ring-1 rounded-lg">
                                        <p >
                                        Regular check-ups with our experienced gynecologists help ensure early detection and management of gynecological conditions, promoting overall reproductive health. </p></div>              
                         </details>
                         <details className="md:px-5  open:bg-white   border mt-2  open:ring-1 open:ring-black/5
                open:shadow-lg  p-2 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                                    <summary className="leading-3 text-slate-900 hover:text-green-600  font-semibold  
                                    text-xs  lg:text-smselect-none  cursor-pointer text-left">
                                    Gynae Surgeries                  </summary>
                                    <div className="mt-2  text-xs md:text-sm  leading-6  text-justify shadow-lg p-5 ring-1 rounded-lg">
                                        <p >
                                        Our skilled surgeons perform a variety of gynecological surgeries to treat conditions such as fibroids, ovarian cysts, and endometriosis, ensuring optimal reproductive health.                                        </p></div>
                        </details>
                         </div>
                         <div className="flex-1">
                        <details className="md:px-5  open:bg-white   border mt-5  open:ring-1 open:ring-black/5
         open:shadow-lg  p-2 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                            <summary className="leading-3 text-slate-900 hover:text-green-600  font-semibold  
                            text-xs  lg:text-smselect-none  cursor-pointer text-left">
                                Gynae Check-up                       </summary>
                            <div className="mt-2  text-xs md:text-sm  leading-6  text-justify shadow-lg p-5 ring-1 rounded-lg">
                                <p >
                                    Our dedicated team of experienced doctors and staff provide personalized consultations and expert medical advice to address your specific concerns.
                                </p>
                            </div>
                        </details>
                        <details className="md:px-5  open:bg-white   border mt-2  open:ring-1 open:ring-black/5
         open:shadow-lg  p-2 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                            <summary className="leading-3 text-slate-900 hover:text-green-600  font-semibold  
                            text-xs  lg:text-smselect-none  cursor-pointer text-left">
                              Delivery (Normal or Cesarean Section)                      </summary>
                            <div className="mt-2  text-xs md:text-sm  leading-6  text-justify shadow-lg p-5 ring-1 rounded-lg">
                                <p >
                                Our expert obstetricians and well-equipped facilities ensure safe and comfortable deliveries, whether through normal childbirth or cesarean section when necessary.</p>
                            </div>
                        </details>
                        <details className="md:px-5  open:bg-white   border mt-2  open:ring-1 open:ring-black/5
         open:shadow-lg  p-2 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                            <summary className="leading-3 text-slate-900 hover:text-green-600  font-semibold  
                            text-xs  lg:text-smselect-none  cursor-pointer text-left">
                              Pap Smear                     </summary>
                            <div className="mt-2  text-xs md:text-sm  leading-6  text-justify shadow-lg p-5 ring-1 rounded-lg">
                                <p >
                                We offer routine cervical cancer screenings using the Pap smear technique, aiding in the early detection and prevention of cervical abnormalities.</p></div>
                        </details>
                        <details className="md:px-5  open:bg-white   border mt-2  open:ring-1 open:ring-black/5
         open:shadow-lg  p-2 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                            <summary className="leading-3 text-slate-900 hover:text-green-600  font-semibold  
                            text-xs  lg:text-smselect-none  cursor-pointer text-left">
                               Cervical and Endometrial Biopsy                   </summary>
                            <div className="mt-2  text-xs md:text-sm  leading-6  text-justify shadow-lg p-5 ring-1 rounded-lg">
                                <p >
                                Our specialized procedures allow for the sampling and analysis of cervical and endometrial tissues, aiding in the diagnosis of various gynecological conditions.                                </p></div>
                        </details>
                        <details className="md:px-5  open:bg-white   border mt-2  open:ring-1 open:ring-black/5
         open:shadow-lg  p-2 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                            <summary className="leading-3 text-slate-900 hover:text-green-600  font-semibold  
                            text-xs  lg:text-smselect-none  cursor-pointer text-left">
                               Adolescents/Menopausal Female Checkup                    </summary>
                            <div className="mt-2  text-xs md:text-sm  leading-6  text-justify shadow-lg p-5 ring-1 rounded-lg">
                                <p >
                                We provide specialized care and support for adolescent girls and women going through menopause, addressing their unique health needs.                                 </p></div>
                        </details>
                        <details className="md:px-5  open:bg-white   border mt-2  open:ring-1 open:ring-black/5
                open:shadow-lg  p-2 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                                    <summary className="leading-3 text-slate-900 hover:text-green-600  font-semibold  
                                    text-xs  lg:text-smselect-none  cursor-pointer text-left">
                                    TESA (Testicular Sperm Aspiration) and MicroTESE (Microscopic Testicular Sperm Extraction)                    </summary>
                                    <div className="mt-2  text-xs md:text-sm  leading-6  text-justify shadow-lg p-5 ring-1 rounded-lg">
                                        <p >
                                        These specialized procedures retrieve sperm directly from the testicles, offering hope for individuals with male infertility issues.                                </p></div>
                        </details>
                        <details className="md:px-5  open:bg-white   border mt-2  open:ring-1 open:ring-black/5
         open:shadow-lg  p-2 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                            <summary className="leading-3 text-slate-900 hover:text-green-600  font-semibold  
                            text-xs  lg:text-smselect-none  cursor-pointer text-left">
                               Male Infertility Treatment                   </summary>
                            <div className="mt-2  text-xs md:text-sm  leading-6  text-justify shadow-lg p-5 ring-1 rounded-lg">
                                <p >
                                Our comprehensive range of treatments and interventions is designed to address male fertility issues and improve the chances of successful conception.                                </p></div>
                        </details>
                       
                        <details className="md:px-5  open:bg-white   border mt-2  open:ring-1 open:ring-black/5
                open:shadow-lg  p-2 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                                    <summary className="leading-3 text-slate-900 hover:text-green-600  font-semibold  
                                    text-xs  lg:text-smselect-none  cursor-pointer text-left">
                                    Cyst Aspiration by TVS                    </summary>
                                    <div className="mt-2  text-xs md:text-sm  leading-6  text-justify shadow-lg p-5 ring-1 rounded-lg">
                                        <p >
                                        We perform cyst aspiration procedures using transvaginal ultrasound guidance to safely and effectively remove ovarian cysts.</p></div>
                        </details>
                        <details className="md:px-5  open:bg-white   border mt-2  open:ring-1 open:ring-black/5
                open:shadow-lg  p-2 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                                    <summary className="leading-3 text-slate-900 hover:text-green-600  font-semibold  
                                    text-xs  lg:text-smselect-none  cursor-pointer text-left">
                                    Ovulation Induction                  </summary>
                                    <div className="mt-2  text-xs md:text-sm  leading-6  text-justify shadow-lg p-5 ring-1 rounded-lg">
                                        <p >
                                        Through the use of oral medications or injections, we stimulate ovulation in women who may be experiencing difficulties in conceiving naturally.      </p></div>                  </details>
                        <details className="md:px-5  open:bg-white   border mt-2  open:ring-1 open:ring-black/5
                open:shadow-lg  p-2 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                                    <summary className="leading-3 text-slate-900 hover:text-green-600  font-semibold  
                                    text-xs  lg:text-smselect-none  cursor-pointer text-left">
                                    MVA/MA (Manual Vacuum Aspiration/Medical Abortion)                    </summary>
                                    <div className="mt-2  text-xs md:text-sm  leading-6  text-justify shadow-lg p-5 ring-1 rounded-lg">
                                        <p >
                                        We offer safe and compassionate options for pregnancy termination, providing both surgical and medical abortion procedures.                                        </p></div>    </details>
                        <details className="md:px-5  open:bg-white   border mt-2  open:ring-1 open:ring-black/5
                open:shadow-lg  p-2 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                                    <summary className="leading-3 text-slate-900 hover:text-green-600  font-semibold  
                                    text-xs  lg:text-smselect-none  cursor-pointer text-left">
                                   Fertility Preservation Counseling            </summary>
                                    <div className="mt-2  text-xs md:text-sm  leading-6  text-justify shadow-lg p-5 ring-1 rounded-lg">
                                        <p >
                                        Our dedicated team provides comprehensive counseling and guidance on fertility preservation options, ensuring informed decision-making for individuals and couples facing potential fertility challenges in the future.</p></div>              
                         </details>
                         </div>
                         </div>
                        
                        
                    </div>
                    <div>
                        <Image className=" rounded-xl w-full object-cover md:h-full md:w-48 "
                            alt="IVFLIFENEPAL"
                            src={service}
                            layout="fixed"
                            height={578}
                            width={500}
                            priority
                        />

                    </div>

                </div>
            </div>
        </section>
    )
}


