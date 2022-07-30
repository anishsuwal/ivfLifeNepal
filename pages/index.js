
import Hero from '../components/hero/hero'
import Navbar from '../components/navbar'
import Ivfdetails from '../components/ivfdetails/ivfdetails'
import Testimonials from '../components/testimonials/testimonials'
import Calculate from '../components/calculate/calculate'
import Footer from '../components/footer'
import Videos from '../components/videos/videos'
import ContactUs from '../components/contactus'

export default function Home() {
  return (
    <>
      <div className='font-Montserrat'>
        <Navbar />
        <Hero />
        <Ivfdetails />
        <Testimonials />
        <Calculate />
        <Videos />
        <ContactUs />
        <Footer />
      </div>



    </>
  )
}
