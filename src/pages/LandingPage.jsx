import React from "react";
import image from "../assets/group.jpg";
import Button from "../components/Button";
import Steps from "../components/steps";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import LandingPageCard from "../components/LandingPageCards";
import { FaUserDoctor } from "react-icons/fa6";
import { FaStamp } from "react-icons/fa6";
import { RiContractLine } from "react-icons/ri";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaPeopleArrows } from "react-icons/fa";
import { TbHomeStats } from "react-icons/tb";
import { FaAmbulance } from "react-icons/fa";
import hospitalLogo1 from "../assets/hospitalLogo10.jpg";
import hospitalLogo2 from "../assets/hospitalLogo14.jpg";
import hospitalLogo3 from "../assets/hospitalLogo16.jpg";
import hospitalLogo4 from "../assets/hospitalLogo8.jpg";
import Card from "../components/Card";
import HospitalComponent from "../components/hospitalComponent";
import logo from "../assets/hospitalLogo2.jpg";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { FcProcess } from "react-icons/fc";
import { PiEqualizerFill } from "react-icons/pi";
import aboutImage from "../assets/perfectImgae.avif";

import Cards from "./Cards";

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
          <h1 className="mb-[20px] text-[30px] font-extrabold text-primary underline">
            CATEGORIES
          </h1>
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
      <section>
        <div className="h-[70vh] w-[100%] mt-[120px] flex justify-center items-center flex-col gap-10">
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-[25px] font-bold mb-[17px] text-primary underline">
              Popular Jobs
            </h1>
            <p className="w-[55%] text-center text-tertiary">
              Search all the open positions on the web. Get your own
              personalized salary estimate. Read reviews on over 30000+
              companies worldwide.
            </p>
          </div>
          <div className="h-[90%] w-[90%] flex gap-8">
            <Card
              className="h-[90%] w-[23%]"
              logo={logo}
              jobType="Assistant doctor"
              hosName="Adoba hospital"
              address="Lagos"
              locum="FullTime"
              time="20/10/2015"
            />
            <Card
              className="h-[90%] w-[23%]"
              logo={logo}
              jobType="Assistant doctor"
              hosName="Adoba hospital"
              address="Lagos"
              locum="FullTime"
              time="20/10/2015"
            />
            <Card
              className="h-[90%] w-[23%]"
              logo={logo}
              jobType="Assistant doctor"
              hosName="Adoba hospital"
              address="Lagos"
              locum="FullTime"
              time="20/10/2015"
            />
            <Card
              className="h-[90%] w-[23%]"
              logo={logo}
              jobType="Assistant doctor"
              hosName="Adoba hospital"
              address="Lagos"
              locum="FullTime"
              time="20/10/2015"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="h-[60vh] w-[100%] mt-[30px] flex justify-center items-center flex-col">
          <div className="h-[20%] w-[90%] flex justify-center items-center text-[20px] font-semibold text-primary">
            <h1 className="underline">HIRING HOSPITALS</h1>
          </div>
          <div className="h-[80%] w-[90%] flex gap-8 mb-[20px]">
            <HospitalComponent
              image={hospitalLogo1}
              hospitalName="Mediplus Premier Hospital"
              hospitalAddress="14 Galovita street Odonla Lagos State"
            />
            <HospitalComponent
              image={hospitalLogo2}
              hospitalName="Vision Eye Clinic Hospital"
              hospitalAddress="14 Galovita street Odonla Lagos State"
            />
            <HospitalComponent
              image={hospitalLogo3}
              hospitalName="Ear Clinic Hospital"
              hospitalAddress="14 Galovita street Odonla Lagos State"
            />
            <HospitalComponent
              image={hospitalLogo4}
              hospitalName="Mediplus Premier Hospital"
              hospitalAddress="14 Galovita street Odonla Lagos State"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="h-[55vh] w-[100%] flex justify-center items-center mt-[30px] flex-col">
          <h1 className="text-2xl font-semibold text-primary underline mb-[7px]">
            OUR SERVICES
          </h1>
          <h1 className="text-[16px] font-semibold text-tertiary ">
            What We Offer
          </h1>
          <div className="h-[90%] w-[90%] mb-[10px] flex gap-8 mt-[20px]">
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
      </section>
      <section>
        <div className="h-[70vh] w-[100%] mt-[40px] flex justify-center items-center flex-col">
          <h1 className="text-2xl font-semibold text-primary underline mb-[10px]">
            ABOUT US{" "}
          </h1>
          <div className="h-[90%] w-[88%] mt-[15px] flex justify-center items-center">
            <div className="h-[100%] w-[50%]">
              <img src={aboutImage} alt="" className="h-[100%] w-[100%] rounded-[10px]" />
            </div>
            <div className="h-[100%] w-[50%] flex justify-center items-center">
              <div className="h-[90%] w-[90%] flex justify-center items-center">
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
                    institutions post job openings, connect with top-tier
                    medical staff, and streamline their hiring process with
                    ease.
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="h-[50vh] w-[100%] bg-pink-700 mt-[20px]"></div>
      </section>
    </div>
  );
};

export default LandingPage;

// image={hospitalLogo1}
