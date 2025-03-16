import React from "react";
import Cards from "./Cards";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { FcProcess } from "react-icons/fc";
import { IoGitNetworkOutline } from "react-icons/io5";
import { FaHospitalAlt } from "react-icons/fa";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { FcAcceptDatabase } from "react-icons/fc";
import { PiEqualizerFill } from "react-icons/pi";
import { FaHandHoldingMedical } from "react-icons/fa";

const Service = () => {
  return (
    <div className="h-[86.4vh] w-[100%] mt-[10px] flex justify-center items-center ">
      <div className="h-[90%] w-[88%] flex flex-wrap gap-6 max-[769px]:w-[100%]">
        <Cards
          icon={<IoNotificationsCircleSharp size={40} fill="#EBF1F8" />}
          heading="Find Qualified Healthcare Professionals"
          content=" Post job openings and connect with top-tier doctors, nurses, and
           medical staff."
          postJob="Post Job"
        />
        <Cards
          icon={<FcProcess size={40} fill="#EBF1F8" />}
          heading="Streamlined Hiring Process"
          content="Simplify recruitment with our easy-to-use job posting and applicant tracking system."
          postJob="Learn More"
        />
        <Cards
          icon={<IoGitNetworkOutline size={40} fill="#EBF1F8" />}
          heading="Hire Faster, Work Better"
          content="Fill vacancies quickly with a large pool of verified healthcare professionals."
          postJob="Start Hiring"
        />
        <Cards
          icon={<FaHospitalAlt size={40} fill="#EBF1F8" />}
          heading="Trusted Healthcare Network"
          content="Gain access to a network of certified medical experts across various specialties."
          postJob="View Candidates"
        />
        <Cards
          icon={<BsFillSearchHeartFill size={40} fill="#EBF1F8" />}
          heading="Find Your Dream Healthcare Job"
          content="Browse openings from top hospitals and healthcare institutions"
          postJob="Search Jobs"
        />
        <Cards
          icon={<FcAcceptDatabase size={40} fill="#EBF1F8" />}
          heading="Apply with Confidence"
          content="Verified job postings ensure you connect with legitimate healthcare employers."
          postJob="Apply Now"
        />
        <Cards
          icon={<PiEqualizerFill size={40} fill="#EBF1F8" />}
          heading="Equal Opportunities for All"
          content="We promote fair hiring practices to ensure everyone gets a chance to excel."
          postJob="Join Today"
        />
        <Cards
          icon={<FaHandHoldingMedical size={40} fill="#EBF1F8" />}
          heading="Grow Your Medical Career"
          content="Get hired, gain experience, and advance in your field with top opportunities."
          postJob="Explore Careers"
        />
      </div>
    </div>
  );
};

export default Service;
