import React from "react";
import medArkLogo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import health from '../assets/health-professional.jpg'

const SignUpAs = () => {
  return (
    <>
      <div className="h-[88vh] w-[100%] bg-[#70C1FF] flex justify-center items-center max-[769px]:h-[92vh]">
        <div className="h-[90%] w-[87%] flex ">
          <div className="h-[100%] w-[50%] bg-[#70C1FF] flex justify-center items-center max-[769px]:hidden">
            <img src={health} alt="" className="h-[100%] w-[100%]"/>
          </div>
          <div className="h-[100%] w-[50%] bg-hero flex flex-col justify-center items-center gap-5 rounded-[10px] max-[769px]:w-[100%] max-[769px]:h-[90%]">
            <Link to="/">
              <div className="flex items-center ">
                <div className="  flex items-center justify-center ">
                  <img
                    src={medArkLogo}
                    alt=""
                    className="size-17  object-contain"
                  />
                </div>
                <h1 className="text-blue-950 font-bold text-2xl">
                  <span className="text-primary ">Med</span>ARK
                </h1>
              </div>
            </Link>
            <h1 className="w-[80%] text-tertiary font-semibold text-[18px] text-center max-[769px]:text-[13px] max-[769px]:font-medium">
              Sign up as a Hospital to post jobs and get staff easily. Sign up
              as a professional certified staff to see jobs and get hire easily{" "}
            </h1>
            <div className="h-[25%] w-[80%] flex items-center gap-5 flex-col">
              <Link
                to="/hospitalSignUp"
                className=" bg-primary h-[40%] w-[100%] flex justify-center items-center text-white rounded-[10px]"
              >
                <Button text="Sign Up As Hospital" />
              </Link>
              <Link
                to="/signUp"
                className=" bg-primary h-[40%] w-[100%] flex justify-center items-center text-white rounded-[10px]"
              >
                <Button text="Sign Up As Staff" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpAs;
