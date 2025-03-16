import React from "react";
import Button from "../components/Button";

const Cards = ({icon, heading, content,postJob}) => {
  return (
    <>
      <div className="h-[55%] w-[23%] bg-hero flex justify-center items-center rounded-[6px]  border-gray-200 border-2 max-[769px]:w-[90%]">
        <div className="h-[90%] w-[90%] flex items-center flex-col justify-around">
          <div className="h-[20%] w-[20%] bg-primary flex justify-center items-center rounded-[6px]">
            {icon}
          </div>
          <h1 className="text-[18px] text-center font-bold text-tertiary">{heading}</h1>
          <p className="text-start text-[13px] font-semibold text-gray-400 ">
           {content}
          </p>
          <p className="text-[18px] text-primary font-semibold">{postJob}</p>
        </div>
      </div>
    </>
  );
};

export default Cards;
