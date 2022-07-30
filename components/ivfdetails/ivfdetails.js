

import medication from "../../img/medication.png"
import egg from "../../img/egg-retrival.png"
import fertilization from "../../img/fertilization.png"
import culture from "../../img/culture.jpg"
import embryotransfer from "../../img/embryo-transfer.png"
import freezing from "../../img/freezing.jpg"
import pregnancytest from "../../img/pregnancytest.png"
import pregnancytest1 from "../../img/pregnancytest.jpg"
import Image from "next/image"

export default function Ivfdetails() {
    return (

        <section id="understandingivf" className="scroll-my-[130px] md:scroll-my-[200px]">
            <div className="xl:m-32 mt-10">
                <div className="text-center  ">
                    <p className="text-xl md:text-2xl font-bold text-green-600"> Understanding IVF</p>
                </div>
                <div className="flex flex-col md:px-10  bg-white shadow-2xl rounded-lg m-5  md:p-5 p-2">
                    <details className="md:px-20  open:bg-white text-center  border mt-5  open:ring-1 open:ring-black/5
         open:shadow-lg md:p-6 p-2 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                        <summary className="leading-6 text-slate-900 dark:text-white font-semibold  
                text-xs md:text-sm lg:text-xl select-none hover:text-green-600  cursor-pointer transition-all duration-1000 
                overflow-hidden ">
                            What is IVF?
                        </summary>
                        <div className="mt-5  text-xs md:text-sm leading-6  text-justify shadow-lg p-5 ring-1 rounded-lg">
                            <p>IVF (in vitro fertilisation) treatment is the most advanced form of fertility treatment.
                                It includes all fertility treatments in which eggs and sperm or embryos are handled outside of the body with the
                                aim of achieving a pregnancy.</p>
                            <p className="pt-3">
                                IVF involves extracting a woman&apos;s eggs directly from her ovaries, fertilising the eggs in a laboratory setting, growing embryos for 3-6 days in embryo culture, and then usually transferring a single embryo into the woman&apos;s uterus through the cervix. Remaining embryos can also be frozen (cryopreserved), and thawed later and transferred in future IVF cycles. The eggs can either be fertilised using IVF or intracytoplasmic sperm injection (ICSI). Fertilisation by IVF occurs when the eggs and sperm are mixed together to allow fertilisation to create an embryo; ICSI involves an embryologist injecting a single sperm into the egg and is usually used when there are issues with the sperm, or fertilisation does not occur in previous IVF cycles.
                            </p>
                            <p className="pt-3">
                                The source of eggs and sperm usually come from the couple planning to parent the child, but in about
                                5-10% of treatments  they are provided by donors.
                            </p>
                            <p className="pt-3">
                                How successful IVF is depends on a number of factors including, but not limited to, the woman&apos;s age and the cause of infertility. Birth rates generally range from around 5% to 40% per embryo transferred.</p>
                        </div>
                    </details>
                    <details className="md:px-20  open:bg-white text-center  border mt-5  open:ring-1 open:ring-black/5
         open:shadow-lg md:p-6 p-2 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                        <summary className="leading-6 text-slate-900 hover:text-green-600 dark:text-white font-semibold  text-xs md:text-sm lg:text-xl select-none  cursor-pointer">
                            What is involved in and IVF Cycle?
                        </summary>
                        <div className="mt-5  text-xs md:text-sm  leading-6  text-justify shadow-lg p-5 ring-1 rounded-lg">
                            <p>IVF is referred to as a &apos;cycle&apos; of treatment as it involves a number of stages. One cycle of IVF involving an embryo transfer will usually take between four and six weeks.</p>

                            <p className="pt-5 font-bold">
                                Typically there are six stages in a &apos;complete&apos; egg retrieval cycle:
                            </p>
                            <div className="flex flex-col lg:flex-row justify-between items-center mt-5 gap-20 border-t">
                                <div className="flex justify-between items-center mt-10 gap-x-10" >
                                    <span className="rounded-full p-2 md:p-5  items-center text-center text-lg md:text-2xl shadow-xl
                             text-white font-extrabold bg-green-600">1</span>
                                    <div className="lg:hidden ">
                                        <Image
                                            alt="IVF"
                                            src={medication}
                                            layout="fixed"
                                            width={150}
                                            height={150}
                                            priority />
                                    </div>
                                </div>
                                <div >
                                    <p className="font-bold text-xs md:text-sm lg:text-lg text-center mt-5 ">Ovarian Stimulation</p>
                                    <p className="mt-5">Medications are used over a couple of weeks to stimulate the
                                        production of a number of follicles containing eggs. A woman is monitored during
                                        this time which may involve having blood tests and ultrasounds.</p>
                                </div>
                                <div className="lg:flex hidden ">
                                    <Image
                                        alt="IVF"
                                        src={medication}
                                        layout="fixed"
                                        width={200}
                                        height={200}
                                        priority />
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row justify-between border-t items-center mt-5 gap-20">
                                <div className="flex justify-between items-center mt-10 gap-x-10" >
                                    <span className="rounded-full p-2 md:p-5  items-center text-center text-lg md:text-2xl shadow-xl
                             text-white font-extrabold bg-green-600">2</span>
                                    <div className="lg:hidden ">
                                        <Image
                                            alt="IVF"
                                            src={egg}
                                            layout="fixed"
                                            width={150}
                                            height={120}
                                            priority />
                                    </div>
                                </div>
                                <div >
                                    <p className="font-bold text-xs md:text-sm lg:text-lg text-center ">Egg retrieval</p>
                                    <p className="mt-5">Under light sedation or general anaesthetic eggs are collected
                                        transvaginally under ultrasound guidance.</p>
                                </div>
                                <div className="lg:flex hidden ">
                                    <Image
                                        alt="IVF"
                                        src={egg}
                                        layout="fixed"
                                        width={200}
                                        height={180}
                                        priority />
                                </div>
                            </div>

                            <div className="flex flex-col lg:flex-row justify-between border-t items-center mt-5 gap-20">
                                <div className="flex justify-between items-center mt-10 gap-x-10" >
                                    <span className="rounded-full p-2 md:p-5  items-center text-center text-lg md:text-2xl shadow-xl
                             text-white font-extrabold bg-green-600">3</span>
                                    <div className="lg:hidden ">
                                        <Image
                                            alt="IVF"
                                            src={fertilization}
                                            layout="fixed"
                                            width={150}
                                            height={120}
                                            priority />
                                    </div>
                                </div>
                                <div >
                                    <p className="font-bold text-xs md:text-sm lg:text-lg text-center mt-5">Fertilisation</p>
                                    <p className="mt-5">The retrieved eggs are fertilised using IVF or ICSI with either the partner’s or donor sperm
                                        to create an embryo. Fertilisation by IVF occurs when the eggs and sperm are mixed together to
                                        allow fertilisation. ICSI involves an embryologist injecting a single sperm into the egg and is
                                        usually used when there are issues with the sperm or if fertilisation does not occur in previous
                                        IVF cycles.</p>
                                </div>
                                <div className="lg:flex hidden ">
                                    <Image
                                        alt="IVF"
                                        src={fertilization}
                                        layout="fixed"
                                        width={200}
                                        height={180}
                                        priority />
                                </div>
                            </div>

                            <div className="flex flex-col lg:flex-row justify-between border-t items-center mt-5 gap-20">
                                <div className="flex justify-between items-center mt-10 gap-x-10" >
                                    <span className="rounded-full p-2 md:p-5  items-center text-center text-lg md:text-2xl shadow-xl
                             text-white font-extrabold bg-green-600">4</span>
                                    <div className="lg:hidden ">
                                        <Image
                                            alt="IVF"
                                            src={culture}
                                            layout="fixed"
                                            width={150}
                                            height={120}
                                            priority />
                                    </div>
                                </div>
                                <div >
                                    <p className="font-bold text-xs md:text-sm lg:text-lg text-center mt-5">Embryo culture</p>
                                    <p className="mt-5">Embryos are grown for 3-6 days in the laboratory and will be monitored by an
                                        embryologist for development and quality. Viable embryos not selected for Fresh embryo transfer
                                        (Step 5), may undergo cryopreservation and may be used in future embryo transfer cycles (frozen
                                        embryo transfer).</p>
                                </div>
                                <div className="lg:flex hidden ">
                                    <Image
                                        alt="IVF"
                                        src={culture}
                                        layout="fixed"
                                        width={200}
                                        height={180}
                                        priority />
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row justify-between border-t items-center mt-5 gap-20">
                                <div className="flex justify-between items-center mt-10 gap-x-10" >
                                    <span className="rounded-full p-2 md:p-5  items-center text-center text-lg md:text-2xl shadow-xl
                             text-white font-extrabold bg-green-600">5</span>
                                    <div className="lg:hidden ">
                                        <Image
                                            alt="IVF"
                                            src={embryotransfer}
                                            layout="fixed"
                                            width={150}
                                            height={100}
                                            priority />
                                    </div>
                                </div>
                                <div >
                                    <p className="font-bold text-xs md:text-sm lg:text-lg text-center mt-5">Fresh embryo transfer</p>
                                    <p className="mt-5">The 3-6 day old embryo is transferred into the woman’s uterus (womb) through
                                        the cervix using a fine plastic catheter. There is usually no need for any type of anaesthetic for
                                        this procedure.</p>
                                </div>
                                <div className="lg:flex hidden ">
                                    <Image
                                        alt="IVF"
                                        src={embryotransfer}
                                        layout="fixed"
                                        width={200}
                                        height={150}
                                        priority />
                                </div>

                            </div>
                            <div className="flex flex-col lg:flex-row justify-between items-center mt-5 lg:gap-20">
                                <div className="flex justify-between items-center lg:mt-10 gap-x-10" >
                                    <span className="rounded-full p-2 md:p-5  items-center text-center text-lg md:text-2xl
                             text-white font-extrabold ">...</span>
                                </div>
                                <div >
                                    <Image
                                        alt="IVF"
                                        src={freezing}
                                        layout="fixed"
                                        width={200}
                                        height={200}
                                        priority />
                                </div>
                                <div >
                                    <p className="font-semibold text-lg text-center mt-5">Embryo freezing</p>
                                    <p className="mt-5">If extra embryos are available from the egg retrieval
                                        these are usually frozen and may be used in future embryo transfer cycles (frozen embryo transfer).</p>
                                </div>
                            </div>

                            <div className="flex flex-col lg:flex-row justify-between border-t items-center mt-5 gap-20">
                                <div className="flex justify-between items-center mt-10 gap-x-10" >
                                    <span className="rounded-full p-2 md:p-5  items-center text-center text-lg md:text-2xl shadow-xl
                             text-white font-extrabold bg-green-600">6</span>
                                    <div className="lg:hidden ">
                                        <Image
                                            alt="IVF"
                                            src={pregnancytest}
                                            layout="fixed"
                                            width={150}
                                            height={120}
                                            priority />
                                    </div>
                                </div>
                                <div >
                                    <p className="font-bold text-xs md:text-sm lg:text-lg text-center mt-5">Pregnancy test</p>
                                    <p className="mt-5">A pregnancy test is performed (either at home or at the clinic) after a couple of weeks following embryo transfer.</p>
                                </div>
                                <div className="lg:flex hidden ">
                                    <Image
                                        alt="IVF"
                                        src={pregnancytest1}
                                        layout="fixed"
                                        width={200}
                                        height={180}
                                        priority />
                                </div>
                                <div className="lg:flex hidden ">
                                    <Image
                                        alt="IVF"
                                        src={pregnancytest}
                                        layout="fixed"
                                        width={200}
                                        height={180}
                                        priority />
                                </div>
                            </div>
                        </div>
                    </details>
                    <details className="md:px-20  open:bg-white text-center  border mt-5  open:ring-1 open:ring-black/5
         open:shadow-lg md:p-6 p-2 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                        <summary className="leading-6 text-slate-900 hover:text-green-600 dark:text-white font-semibold  text-xs md:text-sm lg:text-xl select-none  cursor-pointer">
                            What is an individual treatment attempt?
                        </summary>
                        <div className="mt-5  text-xs md:text-sm  leading-6  text-justify shadow-lg p-5 ring-1 rounded-lg">
                            <p>This is a single IVF treatment started with the intention of a fresh or frozen embryo transfer procedure.
                                This includes an egg retrieval procedure where a fresh embryo is intended to be transferred, or where
                                frozen embryos are thawed with the intention of transfer.</p>
                        </div>
                    </details>
                    <details className="md:px-20  open:bg-white text-center  border mt-5  open:ring-1 open:ring-black/5
         open:shadow-lg md:p-6 p-2 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                        <summary className="leading-6 text-slate-900 hover:text-green-600 dark:text-white font-semibold  text-xs md:text-sm lg:text-xl select-none  cursor-pointer">
                            What is a complete egg retrival cycle?
                        </summary>
                        <div className="mt-5  text-xs md:text-sm  leading-6  text-justify shadow-lg p-5 ring-1 rounded-lg">
                            <p>Often more than one embryo is created from the eggs collected during an egg retrieval
                                procedure and these can be transferred over many months as part of one or more embryo
                                transfer procedures (for example one fresh embryo transfer followed by one or more frozen
                                embryo transfers).</p>
                            <p className="pt-3">
                                A complete egg retrieval cycle includes all embryo transfers that result from one egg retrieval
                                procedure (fresh and frozen embryo transfers).
                            </p>
                        </div>
                    </details>
                    <details className="md:px-20  open:bg-white text-center  border mt-5  open:ring-1 open:ring-black/5
         open:shadow-lg md:p-6 p-2 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                        <summary className="leading-6 text-slate-900 hover:text-green-600 dark:text-white font-semibold  text-xs md:text-sm lg:text-xl select-none  cursor-pointer">
                            IVF in Nepal?
                        </summary>
                        <div className="mt-5  text-xs md:text-sm  leading-6  text-justify shadow-lg p-5 ring-1 rounded-lg">
                            <p >
                                In Nepal, there are around 15-20 percent infertile couples in Nepal, of these 85 percent
                                can be treated with medication. The remaining 15 percent require IVF technology intervention.
                            </p>
                            <p className="pt-3">The IVF technology in Nepal took its first step in 2004. This procedure resulted
                                in the birth of Om Mani Tamang, the first test-tube baby of Rajendra Tamang and Sandhya Tamang on March
                                3, 2005.
                            </p>
                            <p className="pt-3">
                                With the introduction of IVF technology in Nepal, Nepali couples have stopped going abroad. This is possible
                                because affordable and accessible treatment has been brought to the country by local experts. Affordable
                                price makes it possible for couples from all over the world to embrace this technology in Nepal.
                            </p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    )
}