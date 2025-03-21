import React from "react";
import Cards from "./Cards";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import catoon from "../assets/catoon.jpg"
import { IoGitNetworkOutline } from "react-icons/io5";
import { FaClipboardList, FaHospitalAlt, FaUserMd, FaUserTie } from "react-icons/fa";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { FcAcceptDatabase } from "react-icons/fc";
import { PiEqualizerFill } from "react-icons/pi";
import { FaHandHoldingMedical } from "react-icons/fa";
import { MdSpeed } from "react-icons/md";
import ServiceCard from "../components/ServiceCard";
import PageHead from "../components/PageHead";

const Service = () => {
  return (
    <>
      <PageHead content="Service"/>
    <div className=" mt-[10px] flex justify-center items-center ">
      <div className=" flex flex-wrap gap-6 max-[769px]:w-[100%]">
      
       
      <section className="px-20 py-15 max-sm:p-5  max-sm:bg-[#F9FCFF]">
      <p className="font-semibold text-primary text-lg text-center mt-5">
          What We Offer
        </p>
        <h1 className="text-4xl max-sm:text-2xl w-full  text-center font-bold pt-4 text-tertiary p-6">
          Our Service
        </h1>
        <div className="flex   justify-between">
        <div className="w-full grid grid-cols-2 place-items-center max-sm:grid-cols-1 max-sm:gap-4">
        <ServiceCard
           icon={<MdSpeed size={40} fill="#7CB5EA"/>}
                    heading="Hire Faster, Work Better"
                    content="Fill vacancies quickly with a large pool of verified healthcare professionals."
                     className="bg-[#7CB5EA] ml-15 max-sm:ml-0"
          />
        <ServiceCard
           icon={<FaUserMd size={40} fill="#F3CA72" />}
                     heading="Find Qualified Healthcare Professionals"
                     content=" Post job openings and connect with top-tier doctors, nurses, and
                      medical staff."
                     className="bg-[#f3ca72]"
          />
        <ServiceCard
            icon={<FaClipboardList size={40} fill="#7DDCBC" />}
                    heading="Streamlined Hiring Process"
                    content="Simplify recruitment with our easy-to-use job posting and applicant tracking system."
                     className="bg-[#7ddcbc]"
          />
        <ServiceCard
            icon={<FaUserTie size={40} fill="#C495D1" />}
                      heading="Find Your Dream Healthcare Job"
                      content="Browse openings from top hospitals and healthcare institutions"
                     className="bg-[#c495d1] ml-16 max-sm:ml-0 "
          />
        </div>
              <div className="w-1/2 flex justify-end max-md:hidden">
                <img src={catoon} alt="" className="grid place-items-end w-[500px] "/>
              </div>
        </div>
      </section>

     <div className="px-20 gap-4 pb-10  grid grid-cols-4 ">
     <Cards
          icon={<BsFillSearchHeartFill size={40} />}
          heading="Find Your Dream Healthcare Job"
          content="Browse openings from top hospitals and healthcare institutions"
          postJob="Search Jobs"
        />
        <Cards
          icon={<FcAcceptDatabase size={40}  />}
          heading="Apply with Confidence"
          content="Verified job postings ensure you connect with legitimate healthcare employers."
          postJob="Apply Now"
        />
        <Cards
          icon={<PiEqualizerFill size={40} />}
          heading="Equal Opportunities for All"
          content="We promote fair hiring practices to ensure everyone gets a chance to excel."
          postJob="Join Today"
        />
        <Cards
          icon={<FaHandHoldingMedical size={40} />}
          heading="Grow Your Medical Career"
          content="Get hired, gain experience, and advance in your field with top opportunities."
          postJob="Explore Careers"
        />
     </div>
      </div>
    </div>
    </>
  );
};

export default Service;
