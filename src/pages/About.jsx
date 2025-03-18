import React from "react";
import leftImage from "../assets/perfectImgae.avif";
import nurses from "../assets/medical-people-staff-vector.avif";

const About = () => {
  return (
    <>
      <div className=" flex justify-center items-center flex-col ">
        <div className="h-[50vh] w-[100%] flex justify-center items-center bg-primary font-primary ">
          <div className="h-[90%] w-[88%] flex items-center ">
            <h1 className="text-[55px] text-tertiary font-bold mb-7">
              ABOUT US
            </h1>
          </div>
        </div>
        <div className="h-[550px] w-[87%] flex mt-[20px] max-[769px]:w-[100%] max-[769px]:flex-col-reverse max-[769px]:mt-[250px]">
          <div className="h-[100%] w-[48%] max-[769px]:w-100%] max-[769px]:w-[100%]">
            <img src={leftImage} alt="" className="rounded-[10px] h-[100%]" />
          </div>
          <div className="h-[100%] w-[48%] flex justify-center items-center max-[769px]:h-[80%] max-[769px]:w-[100%] max-[769px]:p-10">
            <p className="text-[16px] text-tertiary">
              At{" "}
              <span className="text-[16px]  text-primary font-bold">
                MEDARK
              </span>
              , we bridge the gap between hospitals looking for qualified
              medical professionals and healthcare staff seeking the right
              opportunities. Our platform is designed to simplify the hiring
              process for healthcare facilities while ensuring professionals
              find jobs that match their skills and experience.
              <p className="text-[16px] text-tertiary mt-[15px]">
                <span className="text-[16px] text-primary font-bold">
                  For Hospitals & Clinics :
                </span>{" "}
                Finding the right talent is crucial for providing quality
                healthcare. We help hospitals, clinics, and healthcare
                institutions post job openings, connect with top-tier medical
                staff, and streamline their hiring process with ease.
              </p>
            </p>
          </div>
        </div>
      </div>
      <div className="h-[80vh] w-[100%] flex justify-center items-center mb-10 mt-[60px] max-[769px]:mt-[0px]">
        <div className="h-[500px] w-[87%] flex max-[769px]:flex-wrap max-[769px]:h-[250px]">
          <div className="h-[100%] w-[50%] flex justify-center items-center p-[10px] max-[769px]:w-[100%] max-[769px]:50% max-[769px]:p-[10px]">
            <p className="text-[16px] text-tertiary">
              <span className="text-[16px] text-primary font-bold">
                For Hospitals & Clinics :
              </span>{" "}
              Finding the right talent is crucial for providing quality
              healthcare. We help hospitals, clinics, and healthcare
              institutions post job openings, connect with top-tier medical
              staff, and streamline their hiring process with ease.
            </p>
          </div>
          <div className="h-[100%] w-[50%] max-[769px]:w-[100%]">
            <img
              src={nurses}
              alt=""
              className="h-[100%] w-[100%] rounded-[10px]"
            />
          </div>
        </div>
      </div>
      <div className="h-[50vh] w-[100%] flex justify-center items-center flex-col mb-10 max-[769px]:mt-[200px]">
        <h1 className="text-[35px] text-tertiary font-semibold mt-[15px] underline">
          Why Choose Us?
        </h1>
        <div className="h-[90%] w-[87%] mt-[15px] flex flex-col gap-30 justify-center items-center">
          <ul>
            <li className="text-gray-500 text-[18px]">
              <span className="text-primary text-[16px] font-semibold mr-[10px]">
                Verified Job Listings :
              </span>{" "}
              We ensure all job postings are from legitimate healthcare
              providers.
            </li>
            <li className="text-gray-500 text-[18px]">
              <span className="text-primary text-[16px] font-semibold mr-[10px]">
                Fast & Efficient Hiring :
              </span>{" "}
              We connect hospitals with the right candidates quickly.
            </li>
            <li className="text-gray-500 text-[18px]">
              <span className="text-primary text-[16px] font-semibold mr-[10px]">
                Equal Opportunities :
              </span>{" "}
              We promote fair hiring practices for all healthcare workers.
            </li>
            <li className="text-gray-500 text-[18px]">
              <span className="text-primary text-[16px] font-semibold mr-[10px]">
                Career Growth Support :
              </span>{" "}
              Find the right job, gain experience, and advance in your career.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
