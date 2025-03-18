import React from "react";
import Search from "../components/Search";
// import logo from "../assets/logo.png";
import { MdLocalHospital } from "react-icons/md";
import Button from "../components/Button";
import { FaUserDoctor } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa6";
import { TbCancel } from "react-icons/tb";
import { MdLink } from "react-icons/md";
import Card from "../components/Card";
import PageHead from "../components/PageHead";
import {  useGetAllJobsQuery } from '../service/UseRTK'
const Jobs = () => {

  const {data:jobs, isLoading, error } = useGetAllJobsQuery()
  console.log(jobs);
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error fetching Jobs</div>
 
  return (
    <>
        <PageHead content="Jobs"/>
      <div className="px-20  bg-[#e1e1e1f] max-sm:p-5 flex  w-full items-center  flex-col">
        <Search />
        <div className="grid grid-cols-3 py-15 max-sm:grid-cols-1 max-sm:gap-5 w-full gap-8 ">
              {jobs.map((props, index) => (
                <Card key={index} logo={props.logo} jobType={props.jobType} name={props.hospital.name} location={props.location} title={props.title} createdAt={new Date(props.createdAt).toLocaleString()} url={props._id}/>
              ))}
            </div>
      </div>
    </>
  );
};

export default Jobs;
