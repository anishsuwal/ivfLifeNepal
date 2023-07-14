import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


export const sendEmailx = (form, template) => {

  emailjs.sendForm('service_my9vi4e', template, form.current, '6acPh5wRC-oj5wWza')
  //emailjs.sendForm('service_javuv7g', template, form.current, 'v7LTZFXKcMFo3po9m')   // This is for Little Shephard
 
    .then((result) => {
      console.log(result.text);
      notify();
    }, (error) => {
      console.log(error.text);
      errnotify();
    });
  const errnotify = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="bg-white border-2  rounded-3xl shadow-2xl p-10 lg:p-16 w-[329px] h-[283px] lg:w-[570px] lg:h-[280px]">
            <div className="custom-ui text-lg lg:text-2xl text-red-600 text-center ">
              <h1>* Thank you for choosing us! </h1>
              <h1>
                There was an error trying to send your message. Please try again later....</h1>
            </div>
            <div className="flex  mt-10 item-center justify-center gap-x-2 ">

              <button className=" border bg-green-600 rounded-full 
              text-white shadow-2xl shadow-black hover:bg-green-300 hover:text-green-600
                w-[129px] h-[40px] lg:h-[48px] lg:w-[225px] text-lg font-bold items-center"
                onClick={() => {
                  onClose()
                }}>Ok</button>
            </div>
          </div>
        );
      }
    });
  }

  const notify = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="bg-white border-2  rounded-3xl shadow-2xl p-10 lg:p-16 w-[329px] h-[344px] lg:w-[570px] lg:h-[344px]">
            <div className="custom-ui text-lg lg:text-2xl text-center ">
              <h1>* Thank you for choosing us! </h1>
              <h1>
                We are happy to have you as one of our valued patients,
                and look forward to providing you with the care you deserve.Welcome to the family!.</h1>
            </div>
            <div className="flex  mt-5 item-center justify-center gap-x-2 ">

              <button className=" border bg-green-600 rounded-full 
              text-white shadow-2xl shadow-black hover:bg-green-300 hover:text-green-600
                w-[129px] h-[40px] lg:h-[48px] lg:w-[225px] text-lg font-bold items-center"
                onClick={() => {
                  onClose()
                }}>Ok</button>
            </div>
          </div>

        );
      }
    });
  }
};