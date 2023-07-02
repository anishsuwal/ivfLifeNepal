
import WelcomeDoctor from "../../img/stage.jpg"
import Image from "next/image"


export default function Welcome() {

    

    return (
        <section id="home" className="scroll-my-[250px] md:scroll-my-[166px]">
            <div className="flex flex-col lg:flex-row justify-between       text-bold">
                  <div className="flex  p-5 m-5 md:m-0 shadow-lg lg:p-10 mt-28 lg:mt-0 opacity-90 items-center justify-center  
             bg-white rounded-lg ">
                 <div className=" bg-white rounded-xl shadow-md overflow-hidden w-full mt-2 ">
                        <div className="md:flex items-center justify-center text-center gap-10">
                            <div className="md:shrink-0">
                                <Image className="h-48 w-full object-cover md:h-full md:w-48"
                                    alt="IVFLIFENEPAL"
                                    src={WelcomeDoctor}
                                    layout="fixed"
                                    height={400}
                                    width={700}
                                    priority
                                />
                            </div>
                            <div className="p-8 ">
                                <p className="mt-2 text-black  text-sm lg:text-xl text-justify">
                                Motherhood is a journey of love, sacrifice, and immeasurable joy. From the first kicks to the tender moments of holding your child,
                                 every step reflects the incredible power of a mother&apos;s love. In sleepless nights and endless diaper changes, you discover 
                                 strength you never knew you had. Your words become their guiding light, and your support the foundation for their dreams.
                                  Motherhood isn&apos;t easy, but the moments of wonder and independence make every sacrifice worth it. As a nurturer, teacher,
                                   and role model, your love knows no bounds. Thank you, incredible mothers, for the love, sacrifices, and beautiful souls you raise.
                                    Embrace this transformative gift.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            
              
            </div>
        </section>

    )
}