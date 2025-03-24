import React from "react";
import image from "../assets/group.jpg";
import Button from "../components/Button";
import Steps from "../components/steps";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import LandingPageCard from "../components/LandingPageCards";
import { TbNurse } from "react-icons/tb";
import { LuStethoscope } from "react-icons/lu";
import { GiMedicines } from "react-icons/gi";
import { ImLab } from "react-icons/im";
import logo from "../assets/logo.png";
import Card from "../components/Card";
import hospital1 from "../assets/images.jpg";
import hospital2 from "../assets/images1.png";
import hospital3 from "../assets/imge.jpg";
import hospital4 from "../assets/logos.png";
import hospital5 from "../assets/logos1.png";
import StaffCard from "../components/StaffCard";
import avatar from "../assets/pro-avater.jpg"
import catoon from "../assets/catoon.jpg"
import Contactcard from "../components/Contactcard";
import { FaClipboardList, FaProjectDiagram, FaUserMd, FaUserTie } from "react-icons/fa";
import { IoCallOutline, IoMailOpenOutline } from "react-icons/io5";
import { MdOutlineLocationOn, MdSpeed } from "react-icons/md";
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const card = [
    {
      logo: logo,
      jobType: "Assistant doctor",
      hosName: "Adoba hospital",
      address: "Lagos",
      locum: "FullTime",
      time: "20/10/2015",
    },
    {
      logo: logo,
      jobType: "Mid Wife",
      hosName: "Medark hospital",
      address: "Lagos",
      locum: "PerTime",
      time: "20/10/2015",
    },
    {
      logo: logo,
      jobType: "Dentist",
      hosName: "Total hospital",
      address: "Lagos",
      locum: "FullTime",
      time: "20/10/2015",
    },
  ];

  return (
    <div>
      {/* text side */}
      <div className="px-4 md:px-24 flex flex-col md:flex-row py-10">
        <div className="w-full md:w-1/2  flex flex-col max-sm:items-center md:mt-10 max-sm:justify-center">
          <h1 className="text-3xl md:text-5xl  max-sm:text-center font-bold text-tertiary mb-5 leading-10  md:leading-15 ">
          Bridging the gap between{" "}
            <span className="px-1 max-sm:text-2xl  rounded-md bg-accent">
              Hospitals 
            </span>{" "}
           and top-tier medical {" "}
            <span className="text-primary">professionals.</span>{" "}
          </h1>
          <p className="text-md max-sm:text-center text-secondary">
            Find the right healthcare professionals for your hospital or
            discover your next job opportunity—all in one smart, AI-powered
            platform.
          </p>
          <div className="flex gap-3 mt-7 max-sm:pb-4">
            {/* <Button text="Find Jobs" className="bg-primary text-white" /> */}
           <Link to="about">
           <Button text="Learn More" className="bg-accent text-primary" />
           </Link>
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
          <h1 className="text-4xl max-sm:text-3xl font-bold pt-4 text-tertiary p-6">
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
        <div className="py-15 max-sm:px-6 flex justify-center bg-[#F9FCFF] items-center flex-col p">
          <p className="font-semibold text-primary text-lg">Jobs By Categories</p>
          <h1 className="text-4xl max-sm:text-3xl font-bold pt-4 text-tertiary p-6">
            Categories
          </h1>
          <div className="grid grid-cols-4 gap-8 max-sm:grid-cols-1 ">
            <LandingPageCard
              icons={<LuStethoscope />}
              headings="Doctors"
              contents="Physicians, surgeons, and specialists."
            />
            <LandingPageCard
              icons={<TbNurse />}
              headings="Nurse"
              contents="Permanent positions in reputable hospitals and clinics."
            />
            <LandingPageCard
              icons={<GiMedicines />}
              headings="Phamasist"
              contents="Flexible shifts and contract-based jobs."
            />
            <LandingPageCard
              icons={<ImLab />}
              headings="Allied Health Professionals"
              contents="Laboratory technicians, radiologists, physiotherapist."
            />
          </div>
          <Button text="View Jobs" className="bg-primary mt-10 text-white " />
        </div>
      </section>

      <section>
        <div className="px-20 max-sm:px-5 max-sm:py-5 py-15 flex items-center flex-col justify-center">
          <p className="font-semibold text-primary text-lg">All Posted Jobs</p>
          <h1 className="text-4xl max-sm:text-3xl font-bold pt-4 text-tertiary p-6">
            Browse Jobs
          </h1>
          <div className="w-full flex flex-col items-center">
            <div className="grid grid-cols-3 max-sm:grid-cols-1 max-sm:gap-5 w-full gap-3">
              {card.map((e, index) => (
                <Card key={index} {...e} />
              ))}
            </div>
            <Button text="View Jobs" className="bg-primary mt-10 text-white " />
          </div>
        </div>
      </section>

      <section>
        <div className="px-20 max-sm:px-5 flex flex-col items-center pb-15">
          <p className="font-semibold text-primary text-lg">Top hospitals</p>
          <h1 className="text-4xl max-sm:text-2xl w-full text-center font-bold pt-4 text-tertiary p-6">
            Get hired By Top Hospitals
          </h1>
          <div className="flex justify-between max-sm:flex-col gap-3 w-full max-sm:w-39">
            <img src={hospital1} alt="" className="h-30" />
            <img src={hospital2} alt="" className="h-30" />
            <img src={hospital3} alt="" className="h-30" />
            <img src={hospital4} alt="" className="h-30" />
            <img src={hospital5} alt="" className="h-30" />
          </div>
        </div>
      </section>

      {/* <section className="bg-accent px-20 py-15 max-sm:p-5 flex flex-col">
        <p className="font-semibold text-primary text-lg text-center mt-5">
          Top Professionals
        </p>
        <h1 className="text-4xl max-sm:text-2xl w-full text-center font-bold pt-4 text-tertiary p-6">
          Hire Qualified Staff
        </h1>
        <div className="grid grid-cols-4 gap-4 max-sm:grid-cols-1 ">
          <StaffCard  image={hospital1} bio="my name is victor am a doctor with 5 yrs exprience" field="Doctor" name="victor Onyema"/>
          <StaffCard  image={hospital1} bio="my name is victor am a doctor with 5 yrs exprience" field="Doctor" name="victor Onyema"/>
          <StaffCard  image={hospital1} bio="my name is victor am a doctor with 5 yrs exprience" field="Doctor" name="victor Onyema"/>
          <StaffCard  image={hospital1} bio="my name is victor am a doctor with 5 yrs exprience" field="Doctor" name="victor Onyema"/>
        </div>
        <Button text="View Staff" className="bg-primary mt-10 text-white m-auto " />
      </section> */}

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
         
            <Button text="Read More" className="bg-primary mt-10 text-white w-28  " />
            </div>
          
        </div>
      </section>

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

      <section className="px-20 py-15 max-sm:p-5">
      <p className="font-semibold text-primary text-lg text-center mt-5">
          Lets Talk
        </p>
        <h1 className="text-4xl max-sm:text-2xl w-full text-center font-bold pt-4 text-tertiary p-6">
         Contact Us
        </h1>
        <div className="grid grid-cols-3 max-sm:grid-cols-1">
        <Contactcard icon={<IoCallOutline />} content="contact our phone with our number" con="0834434665" title="Phone" />
        <Contactcard icon={<IoMailOpenOutline />} content="contact our phone with our number" con="VictorVector608@gmail.com" title="Mail" />
        <Contactcard icon={<MdOutlineLocationOn />} content="contact our phone with our number" con="59 ekudayo street" title="Location" />
        </div>
      </section>

      <section>

      </section>
    </div>
  );
};

export default LandingPage;
