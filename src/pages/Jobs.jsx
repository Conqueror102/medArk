import React from "react";
import Search from "../components/Search";
import { MdLocalHospital } from "react-icons/md";
import Button from "../components/Button";
import { FaUserDoctor } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa6";
import { TbCancel } from "react-icons/tb";
import { MdLink } from "react-icons/md";

const Jobs = () => {
  return (
    <>
      <div className="h-[100vh] w-[100%] bg-[#e1e1e1f] flex justify-around items-center  flex-col">
        <Search />
        <div className="h-[85%] w-[93%] flex justify-between items-center relative">
          <div className=" h-[80%] w-[60%]  bg-white rounded-[20px] shadow-md flex justify-center items-center border-gray-200 border-2 p-5">
            <div className="h-[90%] w-[100%] overflow-y-auto mt-[20px] ">
              <div className=" h-[35%] w-[100%] flex flex-col gap-10 sticky top-0 bg-white shadow">
                <div className="h-[25%] w-[100%] flex flex-col">
                  <h1 className="text-3xl font-bold flex gap-[7px] items-center ">
                    Experienced Surgeon Doctor
                  </h1>
                  <p className="w-[50%] text-[18px] text-gray-600 mt-1">
                    {" "}
                    Ikorodu Lagos State.
                  </p>
                </div>
                <div className="h-[60%] w-[100%] flex items-center gap-5 ">
                  <Button
                    text="Apply Now"
                    className="bg-tertiary h-[60%] w-[17%] flex justify-center items-center text-hero"
                  />
                  <div className="h-[60%] w-[6%] bg-gray-300 flex justify-center items-center rounded-[7px]">
                    <FaRegBookmark size={20} />
                  </div>
                  <div className="h-[60%] w-[6%] bg-gray-300 flex justify-center items-center rounded-[7px]">
                  <TbCancel size={23} />

                  </div>
                  <div className="h-[60%] w-[6%] bg-gray-300 flex justify-center items-center rounded-[7px]">
                  <MdLink size={30} />

                  </div>
                </div>
              </div>
              <div className="w-[100%] h-[40%] mt-4">
                <h1 className="text-[20px] font-semibold mb-2 text-primary mt-[10px]">
                  Job Summary:
                </h1>
                <p className="text-gray-500 text-[17px]">
                  We are seeking a highly skilled and experienced [Specialty]
                  Surgeon to join our dynamic team at [Hospital Name]. The ideal
                  candidate will be responsible for diagnosing, treating, and
                  performing surgical procedures on patients while ensuring the
                  highest standard of medical care. As a surgeon, you will work
                  closely with a team of healthcare professionals, including
                  anesthesiologists, nurses, and surgical assistants, to provide
                  life-saving and life-enhancing treatments to patients in need.
                </p>
              </div>
              <div className="w-[100%] h-[40%] mt-17">
                <h1 className="text-[20px] font-semibold mb-2 text-primary ">
                  QUALIFICATIONS & REQUIREMENT:
                </h1>
                <p className="text-gray-500 text-[17px]">
                  Medical degree (MD or DO) from an accredited institution.
                  Board certification in [Surgical Specialty] (e.g., American
                  Board of Surgery certification). Valid [State] medical license
                  or eligibility for licensure. Minimum X years of experience in
                  general or specialized surgery. Excellent decision-making and
                  problem-solving skills. Strong communication and teamwork
                  abilities.
                </p>
              </div>
              <div className="w-[100%] h-[40%] mt-12 text-primary ">
                <h1 className="text-[20px] font-semibold mb-2">Job Type:</h1>
                <p  className="text-gray-500 text-[17px]">Full Time</p>
              </div>
            </div>
          </div>
          <div className="h-[80%] w-[38%] bg-white rounded-[20px] shadow-md flex justify-around items-center flex-col border-gray-200 border-2">
            <div className="h-[35%] w-[90%] flex justify-between">
              <div className="h-[70%] w-[30%] bg-hero rounded-[15px]  shadow-md shadow-black-400/50 flex justify-center items-center flex-col mt-[20px]">
                <MdLocalHospital size={30} />
                <h1 className="text-[20px] font-semibold text-primary">
                  MediPlus
                </h1>
              </div>
              <Button
                text="Full Time"
                className="bg-green-600 h-[20%] text-white mt-[10px] flex justify-center items-center py-1"
              />
            </div>
            <div className="h-[35%] w-[90%] flex gap-[20px] flex-col">
              <h1 className="text-[20px] font-bold flex gap-[10px] items-center w-[70%]">
                {" "}
                <FaUserDoctor fill="#172657" size={60} />
                Experienced Surgeon, Doctor{" "}
              </h1>
              <p className="w-[80%] text-[18px] text-gray-600">
                {" "}
                14th Galovita Street Odogunyan Ikorodu Lagos State.
              </p>
              <p className="text-primary font-semibold">Full Time</p>
            </div>
            <div className="h-[20%] w-[90%] flex justify-between items-center">
              <h1 className="text-[20px] font-semibold text-tertiary">
                1 days Ago{" "}
              </h1>
              <Button
                text="Job Details"
                className="bg-primary w-[28%] h-[50%]  flex justify-center items-center text-hero"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
