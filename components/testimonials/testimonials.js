import Testimonial1 from "../../img/testomonial1.jpg"
import Image from "next/image"
import Testimonial2 from "../../img/testomonial2.jpg"
import Testimonial3 from "../../img/testomonial3.jpg"




export default function Testimonials() {

    return (

        <section id="testimonials" className="scroll-my-[130px] md:scroll-my-[200px]">
            <div className="flex flex-col px-5 xl:m-32 mt-10 text-bold ">

                <div className="  p-5  text-center  ">
                    <p className="text-xl md:text-2xl font-bold text-green-600">IvfLife Nepal</p>
                    <p className="md:flex text-xs lg:text-sm xl:text-base  pt-5 text-justify">IvfLife Nepal is the
                        leading IVF treatment centre in Nepal. We have done more than 10000 ART cycles with a success
                        rate of over 80%. Exceptional results in egg donor (AID) and embryo transfer. We are committed
                        to excellence in our service offering, backed by a team of highly trained healthcare professionals
                        and specialists.</p>
                </div>
                <div className="shadow-2xl bg-white rounded-lg p-2 ">
                    <div className="shadow-lg  mt-2 border-t rounded-xl border-b p-2">
                        <p className="items-center justify-center text-center text-2xl font-semibold">Testimonials</p>
                        <p className="items-center justify-center text-center text-xs md:text-lg font-semibold mt-5 text-indigo-500">Patient Experiences (Some words of our patients)</p>
                    </div>

                    <div className=" bg-white rounded-xl shadow-md overflow-hidden w-full mt-2 ">
                        <div className="md:flex items-center justify-center text-center">
                            <div className="md:shrink-0">
                                <Image className="h-48 w-full object-cover md:h-full md:w-48"
                                    alt="ATB"
                                    src={Testimonial1}
                                    layout="fixed"
                                    height={300}
                                    width={200}
                                    priority
                                />
                            </div>
                            <div className="p-8 ">

                                <p className="mt-2 text-slate-500 text-xs lg:text-sm text-justify">We are really thankful to IvfLife Nepal for giving us this opportunity and for fighting for our dreams as well. I was terrified and hesitant to try in vitro fertilization, but with the help of my doctor, and the encouragement from my husband and friends who had already done it, a change happened in me. After one round of IVF and having a miscarriage 2 years later (in spite of all the monitoring, testing, and medicine), I found out about going through additional cycles. I will always remember how amazing it felt to hold that baby. </p>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-white rounded-xl shadow-md overflow-hidden  w-full mt-5">
                        <div className="md:flex items-center justify-center text-center">
                            <div className="md:shrink-0">
                                <Image className="h-48 w-full object-cover md:h-full md:w-48"
                                    alt="ATB"
                                    src={Testimonial3}
                                    layout="fixed"
                                    height={300}
                                    width={200}
                                    priority
                                />
                            </div>
                            <div className="p-8 ">
                                <p className="mt-2 text-slate-500 text-xs lg:text-sm text-justify"> We are very thankful to IvfLife Nepal for
                                    all the help from their staff. We are happy that we chose this clinic. Our first
                                    experience with IVF was as good as it can get - the doctors at IvfLife Nepal were excellent, and their facility is clean and professional, very well equipped with all modern technologies.</p>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-white rounded-xl shadow-md overflow-hidden  w-full mt-5">
                        <div className="md:flex items-center justify-center text-center">
                            <div className="md:shrink-0">
                                <Image className="h-48 w-full object-cover md:h-full md:w-48"
                                    alt="ATB"
                                    src={Testimonial2}
                                    layout="fixed"
                                    height={300}
                                    width={200}
                                    priority
                                />
                            </div>
                            <div className="p-8 ">
                                <p className="mt-2 text-slate-500 text-xs lg:text-sm text-justify"> I would like to say thank you for the excellent treatment and care
                                    that I received during my IVF process. Your clinic provides excellent medical services, a caring
                                    and motivated staff, an atmosphere of ease and privacy, a tranquil and relaxing environment. I would like to
                                    highly recommend this clinic to all those who prefer homely human service over big clinics.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}