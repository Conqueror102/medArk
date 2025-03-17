import React from "react";
import image from "../assets/group.jpg";
import Button from "../components/Button";
import Steps from "../components/steps";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import LandingPageCard from "./LandingPageCards";
import { FaUserDoctor } from "react-icons/fa6";
import { FaStamp } from "react-icons/fa6";
import { RiContractLine } from "react-icons/ri";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaPeopleArrows } from "react-icons/fa";
import { TbHomeStats } from "react-icons/tb";
import { FaAmbulance } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div>
      {/* text side */}
      <div className="px-4 md:px-24 flex flex-col md:flex-row py-10">
        <div className="w-full md:w-1/2 flex flex-col max-sm:items-center md:mt-10 max-sm:justify-center">
          <h1 className="text-3xl md:text-5xl max-sm:text-center font-bold text-tertiary mb-5 leading-8 md:leading-14 ">
            Connecting{" "}
            <span className="px-2 max-sm:text-2xl rounded-md bg-accent">
              Hospitals
            </span>{" "}
            with Top Medical Professionals{" "}
            <span className="text-primary">Instantly!</span>
          </h1>
          <p className="text-md max-sm:text-center text-secondary">
            Find the right healthcare professionals for your hospital or
            discover your next job opportunity—all in one smart, AI-powered
            platform.
          </p>
          <div className="flex gap-3 mt-7 max-sm:pb-4">
            <Button text="Find Jobs" className="bg-primary text-white" />
            <Button text="Post Jobs" className="bg-accent text-primary" />
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full flex justify-end items-center">
          <img
            src={image}
            alt=""
            className="object-cover w-full md:w-[480px]"
          />
        </div>
      </div>

      {/* section2 */}
      <section>
        <div className="flex justify-center items-center flex-col py-10 bg-accent">
          <p className="font-semibold text-primary text-lg">Working Process</p>
          <h1 className="text-4xl font-bold pt-4 text-tertiary p-6">
            How it Works
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-sm:p-5">
            <Steps
              number="01"
              icon={icon1}
              text1="Register your Account"
              text2=""
              className="bg-[#3898E2]"
            />
            <Steps
              number="02"
              icon={icon2}
              text1="Upload your Credentials"
              text2=""
              className="bg-[#BC84CA]"
            />
            <Steps
              number="03"
              icon={icon3}
              text1="Register your Account"
              text2=""
              className="bg-[#56D8B1]"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="h-[100vh] w-[100%] flex justify-center items-center flex-col mt-[30px]">
          <h1 className="mb-[20px] text-[30px] font-extrabold text-primary underline">CATEGORIES</h1>
          <div className="h-[90%] w-[90%] flex flex-wrap gap-8">
            <LandingPageCard
              icons={<FaUserDoctor size={60} fill="#172657" />}
              headings=" 400 Doctors & Specialists"
              contents="Physicians, surgeons, and specialists."
            />
            <LandingPageCard
              icons={<FaStamp size={60} fill="#172657" />}
              headings="100 Full-Time Jobs"
              contents="Permanent positions in reputable hospitals and clinics."
            />
            <LandingPageCard
              icons={<RiContractLine size={60} fill="#172657" />}
              headings="300 PartTime & Contract Work"
              contents="Flexible shifts and contract-based jobs."
            />
            <LandingPageCard
              icons={<FaHandHoldingMedical size={60} fill="#172657" />}
              headings="Allied Health Professionals"
              contents="Laboratory technicians, radiologists, physiotherapist."
            />
            <LandingPageCard
              icons={<FaPeopleGroup size={60} fill="#172657" />}
              headings="Administrative & Support Staff"
              contents=" hospital managers, receptionists, HR personnel, and IT support."
            />
            <LandingPageCard
              icons={<FaPeopleArrows size={60} fill="#172657" />}
              headings="Internships & Training"
              contents="Valuable experience with internship programs in top hospitals."
            />
            <LandingPageCard
              icons={<TbHomeStats size={60} fill="#172657" />}
              headings="Remote & Telehealth Jobs"
              contents="virtual healthcare and online consultations."
            />
            <LandingPageCard
              icons={<FaAmbulance size={60} fill="#172657" />}
              headings=" Emergency & Critical Care "
              contents="Emergency room staff, and ICU specialists."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
