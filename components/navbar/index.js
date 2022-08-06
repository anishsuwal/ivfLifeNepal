import React, { useState } from 'react'

import logo from "../../img/babies.jpg"
import Image from "next/image"



export default function Navbar() {
  const Links = [
    { name: "Understanding IVF", link: "#understandingivf" },
    { name: "Testimonials", link: "#testimonials" },
    { name: " Calculate Cost", link: "#calculate" },
    { name: " Videos", link: "#videos" },
    { name: "Contact us", link: "#contactus-id" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className=" font-Montserrat  top-0 left-0 sticky  z-50 bg-white">
     
      <div className='shadow-md  top-0 left-0 sticky  z-50 border-b xl:px-32 px-5'>
        <div className='flex items-center justify-between'>
          <div className='font-bold text-lg cursor-pointer flex items-center 
                text-gray-800'>
            <div className="flex mt-2 items-center flex-shrink-0  text-green-900 font-bold  ">
              <a href="#home" className='mr-3 items-center'>
                <Image
                  alt="ATB"
                  src={logo}
                  layout="fixed"
                  width={150}
                  height={100} priority
                />
              </a>
              ivfLife Nepal
            </div>
          </div>
          <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 cursor-pointer lg:hidden'>
            <button name={open ? 'close' : 'menu'}><div className="w-5 h-1 bg-gray-600 mb-1"></div>
              <div className="w-5 h-1 bg-gray-600 mb-1"></div>
              <div className="w-5 h-1 bg-gray-600"></div></button>
          </div>
          <ul className={`lg:flex  lg:items-center lg:pb-0 pb-12 absolute 
       lg:static   lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0
        transition-all duration-500 ease-in ${open ? 'top-20 bg-white text-center lg:pr-5 mt-5 shadow-lg  '
         : 'top-[-490px] lg:pr-5 shadow-lg bg-transparent text-center'}`}>
            {
              Links.map((link) => (
                <li key={link.name} className='lg:ml-5  text-xs  2xl:text-sm lg:my-0 my-7  font-medium'>
                  <a href={link.link} onClick={() => setOpen(!open)} className=' hover:text-green-900 hover:shadow-lg hover:border p-2 duration-500   '>{link.name}</a>
                </li>
              ))
            }
            <div className="flex text-sm  py-3 ml-5 items-center justify-center    leading-none  rounded">

              <a className='p-3 animate-pulse bg-green-600 border text-white rounded-lg 
            hover:shadow-lg hover:bg-green-100 hover:text-green-600 hover:animate-none  '
                href="#calculate"
              >Make an Appoitment</a>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}


