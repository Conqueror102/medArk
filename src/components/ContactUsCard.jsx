import React from "react";


const ContactUsCard = ({contact, contactText, contactContents, contactNumber}) => {
  return (
    <>
      <div className="h-[80%] w-[30%] flex justify-around items-center flex-col">
        <div className="rounded-md p-4 mb-3 shadow-primary/10 border-gray-200 border shadow-lg flex justify-center items-center">
        {contact}
        </div>
        <h1 className="font-semibold text-2xl text-primary">{contactText}</h1>
        <p className="text-center text-[14px] w-[70%] text-gray-400">{contactContents}</p>
        <p className="text-tertiary font-semibold">{contactNumber}</p>
      </div>
    </>
  );
};

export default ContactUsCard;
