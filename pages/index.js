
import Hero from '../components/hero/hero'
import Navbar from '../components/navbar'
import Ivfdetails from '../components/ivfdetails/ivfdetails'
import Testimonials from '../components/testimonials/testimonials'
import Calculate from '../components/calculate/calculate'
import Footer from '../components/footer'
import Videos from '../components/videos/videos'
import ContactUs from '../components/contactus'

import { BsFillTelephoneForwardFill } from 'react-icons/bs'
import { FaBusinessTime } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';


export default function Home() {
  return (
    <>
      <div className='font-Montserrat'>
      <div className="flex md:flex-row flex-col  justify-between  border-b   xl:px-32">
        <div className="flex p-5 text-xs 2xl:text-sm ">
          <p>Welcome to a Professional IVF Health Center</p>
        </div>
        <div className=" flex md:flex-row flex-col justify-between text-xs 2xl:text-sm  md:gap-x-5 p-5 ">
          <span className="  inline-flex items-center md:border-r lg:pr-5"><BsFillTelephoneForwardFill className='mr-2 text-green-600' /> +977 - 97482 64521</span>
          <span className="inline-flex items-center md:border-r lg:pr-5"><FaBusinessTime className='mr-2 text-green-600' /> 10:00 AM - 6:00 PM (Sun-Fri)</span>
          <span className="inline-flex items-center "><IoMdMail className='mr-2 text-green-600' /> <a href="#">ivflifenepal@gmail.com</a></span>
        </div>
      </div>
        <Navbar />
        <Hero />
        <Ivfdetails />
        <Testimonials />
        <Calculate />
        <Videos />
        <ContactUs />
        <Footer />
      </div>
      <TawkMessengerReact
                propertyId="62ee3d5b37898912e9618fcb"
                widgetId="1g9p9vca3"/>


    </>
  )
}
