import React from "react";
// import leftImage from "../assets/perfectImgae.avif";
import avatar from "../assets/pro-avater.jpg"
import PageHead from "../components/PageHead";
import Button from "../components/Button";
import catoon from "../assets/catoondoctor.png"

const About = () => {
  return (
    <>
    <PageHead content="About Us"/>
      {/* <div className=" flex justify-center items-center flex-col ">
        <div className="h-[50vh] w-[100%] flex justify-center items-center bg-primary font-primary ">
          <div className="h-[90%] w-[88%] flex items-center ">
            <h1 className="text-[55px] text-tertiary font-bold mb-7">
              About Us
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
      </div> */}
       <section className="px-20 py-15 max-sm:p-5 grid place-items-center">
      <p className="font-semibold text-primary text-lg text-center mt-5">
          What We Do
        </p>
        <h1 className="text-4xl  max-sm:text-2xl w-full text-center font-bold pt-4 text-tertiary p-6">
          About Us
        </h1>
        
          <div className=" w-full flex items-center max-sm:flex-col ">
            <img src={avatar} alt="" className="max-sm:mb-5"/>
            <div className="flex justify-center flex-col">
            <p className="text-primary font-semibold mb-2 max-sm:text-center">About Our Company</p>
              <h1 className="text-tertiary text-4xl max-sm:text-center font-semibold max-sm:text-2xl mb-2">At Medart We Bridge The Gaps</h1>
              
            <p className="text-[16px] text-secondary  text-justify">
             
               Hospitals looking for qualified
              medical professionals and healthcare staff seeking the right
              opportunities. Our platform is designed to simplify the hiring
              process for healthcare facilities while ensuring professionals
              find jobs that match their skills and experience.
              <p className="text-[16px] text-secondary mt-[15px]">
                <span className="text-[16px] text-primary font-bold">
                  For Hospitals & Clinics :
                </span>{" "}
                Finding the right talent is crucial for providing quality
                healthcare. We help hospitals, clinics, and healthcare
                institutions post job openings, connect with top-tier medical
                staff, and streamline their hiring process with ease.
              </p>
            </p>
         
            <Button text="Read More" className="bg-primary  mt-10 text-white w-28  " />
            </div>
          
        </div>
      </section>
      <div className=" bg-accent  pt-10  flex justify-center items-center flex-col  max-[769px]:mt-[200px]">
        <h1 className="text-[35px] text-tertiary font-semibold  underline">
          Why Choose Us?
        </h1>
        <div className="h-[90%] w-[87%] mt-[15px]  max-sm:flex-col flex  gap-30 justify-center items-center">
        <div>
        <ul>
            <li className="text-gray-500 ">
              <span className="text-tertiary text-[18px] font-semibold mr-[10px]">
                Verified Job Listings :
              </span>{" "}
              We ensure all job postings are from legitimate healthcare
              providers.
            </li>
            <li className="text-gray-500 ">
              <span className="text-tertiary text-[18px] font-semibold mr-[10px]">
                Fast & Efficient Hiring :
              </span>{" "}
              We connect hospitals with the right candidates quickly.
            </li>
            <li className="text-gray-500 ">
              <span className="text-tertiary text-[18px] font-semibold mr-[10px]">
                Equal Opportunities :
              </span>{" "}
              We promote fair hiring practices for all healthcare workers.
            </li>
            <li className="text-gray-500 ">
              <span className="text-tertiary text-[18px] font-semibold mr-[10px]">
                Career Growth Support :
              </span>{" "}
              Find the right job, gain experience, and advance in your career.
            </li>
          </ul>
        </div>
        <div>
          <img src={catoon} alt="" className="" />
        </div>
        </div>
      </div>
    </>
  );
};

export default About;
