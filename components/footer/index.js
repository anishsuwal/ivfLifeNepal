
import logo from "../../img/babies.jpg"
import Image from "next/image"
import scrollup from "../../img/scrollup.png"




export default function Footer() {
    return (

        <footer>
            <div className="border-t-2  mt-10">
                <div className="flex justify-between items-center text-center  xl:ml-32 mb-5  text-green-600 font-bold  ">
                    <div className="text-left items-center justify-center mt-2">
                        <a href="#home-id" >
                            <Image
                                alt="ATB"
                                src={logo}
                                layout="fixed"
                                width={150}
                                height={100} priority
                            />
                        </a>
                    </div>
                    <div className="text-center">All Rights Reserved by IvfLife Nepal.</div>
                    <div className=" animate-bounce  flex justify-end mr-10 opacity-40 ">
                        <a href="#home">
                            <Image className=" rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center "

                                alt="ATB"
                                src={scrollup}
                                layout="fixed" priority
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}