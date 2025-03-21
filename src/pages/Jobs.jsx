import React from "react";
import Search from "../components/Search";
import logo from "../assets/logo.png";
import { MdLocalHospital } from "react-icons/md";
import Button from "../components/Button";
import { FaUserDoctor } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa6";
import { TbCancel } from "react-icons/tb";
import { MdLink } from "react-icons/md";
import Card from "../components/Card";
import PageHead from "../components/PageHead";

const Jobs = () => {
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
      {
        logo: logo,
        jobType: "Dentist",
        hosName: "Total hospital",
        address: "Lagos",
        locum: "FullTime",
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
    <>
        <PageHead content="Jobs"/>
      <div className="px-20  bg-[#e1e1e1f] flex  w-full items-center  flex-col">
        <Search />
        <div className="grid grid-cols-3 py-15 max-sm:grid-cols-1 max-sm:gap-5 w-full gap-8 ">
              {card.map((e, index) => (
                <Card key={index} {...e} />
              ))}
            </div>
      </div>
    </>
  );
};

export default Jobs;
