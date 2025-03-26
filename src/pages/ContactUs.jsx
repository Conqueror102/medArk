import React from 'react'
import Contactcard from '../components/Contactcard'
import { IoCallOutline, IoMailOpenOutline } from 'react-icons/io5'
import { MdOutlineLocationOn } from 'react-icons/md'
import PageHead from '../components/PageHead'
// import ContactUsCard from "../components/ContactUsCard";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
<<<<<<< HEAD
import contactUsImage from "../assets/contact.svg";
=======
import contactUsImage from "../assets/contactUsPageImage.jpg";
>>>>>>> 58c3978 (Updated job features)
import Button from "../components/Button";

const ContactUs = () => {
  return (
   <>
   <PageHead content="Contact Us"/>
   <section>
   <section className="px-20 py-15 max-sm:p-5">
      <p className="font-semibold text-primary text-lg text-center mt-5">
          Lets Talk
        </p>
        <h1 className="text-4xl max-sm:text-2xl w-full text-center font-bold pt-4 text-tertiary p-6">
         Contact Us
        </h1>
        <div className="grid grid-cols-3 max-sm:grid-cols-1">
        <Contactcard icon={<IoCallOutline />} content="contact our phone with our number" con="0834434665" title="Phone" />
        <Contactcard icon={<IoMailOpenOutline />} content="contact our phone with our number" con="VictorVector608@gmail.com" title="Mail" />
        <Contactcard icon={<MdOutlineLocationOn />} content="contact our phone with our number" con="59 ekudayo street" title="Location" />
        </div>
      </section>

      <div className="w-[100%] bg-[#edf5fd] pt-15 flex justify-center items-center flex-col">
       
        <div className=" mt-[25px] w-[86%] flex justify-center max-sm:flex-col items-center mb-6">
          <div className="h-[100%] w-[60%] flex justify-start items-center">
            <img src={contactUsImage} alt="" className="h-[90%] w-[90%]" />
          </div>
          <div className=" flex justify-center bg-white  px-4 h-full py-7 items-center  rounded-2xl shadow-md  ">
           
            <form className=" flex gap-4 items-center flex-col">
              <div className=" flex justify-start items-center">
                <h1 className="text-2xl font-semibold text-primary">Get In Touch!</h1>
              </div>
              <div className=" flex items-center gap-4">
                <div className="flex  items-baseline flex-col">
                  <label htmlFor="" className="text-[16px] text-tertiary">Your Name:</label>
                  <input type="text" placeholder="Name:" className=" w-[100%]  border-gray-200  border p-2 rounded-[4px] outline-primary"/>
                </div>
                <div className=" flex  items-baseline flex-col">
                  <label htmlFor="" className="text-[16px] text-tertiary">Your Email:</label>
                  <input type="text" placeholder="Email:" className="w-[100%]  border-gray-200 border p-2 rounded-[4px] outline-primary"/>
                </div>
              </div>
            
              <div className="flex items-start w-full flex-col">
                  <label htmlFor="" className="text-[16px] text-tertiary">Your Question:</label>
                  <input type="text" placeholder="Subject:" className="w-full  border-gray-200 border p-2 rounded-[4px] outline-primary"/>
                </div>
            
             
              <div className=" flex w-full items-start flex-col">
                  <label htmlFor="" className="text-[16px] text-tertiary">Your Comment:</label>
                  <textarea type="text" placeholder="Message:" className="w-[100%]  border-gray-200 border p-3 h-30 rounded-[4px] outline-primary"/>
                </div>
            
              <div className=" flex items-center mt-4">
                <Button text="Send Message" className=" bg-primary flex justify-center items-center text-[14px] text-white  shadow-primary/10 border-gray-200 border"/>
              </div>
            </form>
          </div>
<<<<<<< HEAD
=======
        </div>
        <div className="h-[80vh] mt-[25px] w-[86%] flex justify-center items-center mb-6">
          <div className="h-[100%] w-[60%] flex justify-start items-center">
            <img src={contactUsImage} alt="" className="h-[90%] w-[90%]" />
          </div>
          <div className="h-[100%] w-[40%] flex justify-center items-center  shadow-primary/10 border-gray-200 border">
            <form className="h-[100%] w-[90%] flex justify-around items-center flex-col">
              <div className="h-[10%] w-[90%] flex justify-start items-center">
                <h1 className="text-2xl font-semibold text-primary">Get In Touch!</h1>
              </div>
              <div className="h-[20%] w-[90%] flex justify-between items-center">
                <div className="h-[100%] w-[47%] flex justify-around items-baseline flex-col">
                  <label htmlFor="" className="text-[16px] text-tertiary">Your Name:</label>
                  <input type="text" placeholder="Name:" className="w-[100%] shadow-primary/10 border-gray-200 h-[50%] border p-3 rounded-[3px] outline-0"/>
                </div>
                <div className="h-[100%] w-[47%] flex justify-around items-baseline flex-col">
                  <label htmlFor="" className="text-[16px] text-tertiary">Your Email:</label>
                  <input type="text" placeholder="Email:" className="w-[100%] shadow-primary/10 border-gray-200 h-[50%] border p-3 rounded-[3px] outline-0"/>
                </div>
              </div>
              <div className="h-[20%] w-[90%] flex justify-center items-center">
              <div className="h-[100%] w-[100%] flex justify-around items-start flex-col">
                  <label htmlFor="" className="text-[16px] text-tertiary">Your Question:</label>
                  <input type="text" placeholder="Subject:" className="w-[100%] shadow-primary/10 border-gray-200 h-[50%] border p-3 rounded-[3px] outline-0"/>
                </div>
              </div>
              <div className="h-[25%] w-[90%] flex justify-center items-center">
              <div className="h-[100%] w-[100%] flex justify-around items-start flex-col">
                  <label htmlFor="" className="text-[16px] text-tertiary">Your Comment:</label>
                  <input type="text" placeholder="Message:" className="w-[100%] shadow-primary/10 border-gray-200 h-[70%] border p-3 rounded-[3px] outline-0"/>
                </div>
              </div>
              <div className="h-[15%] w-[90%] flex items-center">
                <Button text="Send Message" className="h-[55%] w-[34%] bg-primary flex justify-center items-center text-[14px] text-white  shadow-primary/10 border-gray-200 border"/>
              </div>
            </form>
          </div>
>>>>>>> 58c3978 (Updated job features)
        </div>
      </div>
    
   </section>
   
   </>
  )
}

export default ContactUs