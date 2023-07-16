
import Hero from '../components/hero/hero'

import Welcome from '../components/welcome/welcome'
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
import Team from '../components/team'
import Servies from '../components/services'
import Setup from '../components/services'
import OurSetup from '../components/setup'
import Carousel from '../components/carousel'

import urmila from "../img/urmila.jpg"
import merina from "../img/merina.jpg"
import Pradeep from "../img/Pradeep.jpg"
import suresh from "../img/Suresh.jpg"

const images = [urmila, merina, suresh, Pradeep].map((url, index) => ({
  url,
  description: `Slide ${index}`,
}));

export default function Home() {
  return (
    <>
      <div className='font-Montserrat'>
      <div className="flex md:flex-row flex-col  justify-between  border-b   xl:px-32">
        <div className="flex p-5 text-xs 2xl:text-sm ">
          <p>Welcome to a Professional IVF Health Center</p>
        </div>
        <div className=" flex md:flex-row flex-col justify-between text-xs 2xl:text-sm  md:gap-x-5 p-5 ">
          <span className="  inline-flex items-center md:border-r lg:pr-5"><BsFillTelephoneForwardFill className='mr-2 text-green-600' /> +977 - 9761 682 874</span>
          <span className="inline-flex items-center md:border-r lg:pr-5"><FaBusinessTime className='mr-2 text-green-600' /> 10:00 AM - 6:00 PM (Sun-Fri)</span>
          <span className="inline-flex items-center "><IoMdMail className='mr-2 text-green-600' /> <a href="#">suwalanupama@gmail.com</a></span>
        </div>
      </div>
        //<Navbar />
        <Hero />
        <Welcome/>
        <Ivfdetails />
        <Testimonials />
        <Calculate />
        <Videos />
        <Servies/>
<OurSetup/>
<div className="container mx-auto mt-4">
      <Carousel images={images} />
    </div>
        <ContactUs />
        <Team/>
        <Footer />
      </div>
      <TawkMessengerReact
                propertyId="62ee3d5b37898912e9618fcb"
                widgetId="1g9p9vca3"/>


    </>
  )
}
