import React from "react";
import ContactUsCard from "../components/ContactUsCard";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const ContactUs = () => {
  return (
    <>
      <div className="w-[100%] flex justify-center items-center flex-col">
        <div className="h-[50vh] w-[100%] bg-primary flex justify-center items-center">
          <div className="h-[90%] w-[88%] flex items-center">
            <h1 className="text-[55px] text-tertiary font-bold mb-7">
              CONTACT US
            </h1>
          </div>
        </div>
        <div className="h-[50vh] w-[100%] flex justify-center items-center mt-[20px]">
          <div className="h-[90%] w-[88%] flex justify-between items-center">
            <ContactUsCard
              contact={<IoIosCall size={30} fill="#172657" />}
              contactText="Phone"
              contactContents="The phrasal sequence of the is now so that many campaign and benefit"
              contactNumber="+152 534-468-854"
            />
            <ContactUsCard
              contact={<MdOutlineMail size={30} fill="#172657" />}
              contactText="Email"
              contactContents="The phrasal sequence of the is now so that many campaign and benefit"
              contactNumber="contact@example.com"
            />
            <ContactUsCard
              contact={<IoLocationSharp size={30} fill="#172657" />}
              contactText="Location"
              contactContents="The phrasal sequence of the is now so that many campaign and benefit"
              contactNumber="View on Google map"
            />
          </div>
        </div>
        <div className="h-[70vh] mt-[25px] w-[86%] bg-amber-700 flex justify-center items-center mb-6">
          <div className="h-[100%] w-[50%] bg-green-500"></div>
          <div className="h-[100%] w-[50%] bg-red-400"></div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
