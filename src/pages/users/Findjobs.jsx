import React from 'react'
import {  useGetAllJobsQuery } from '../../service/UseRTK'
import Card from '../../components/Card'
import Search from '../../components/Search'
const Findjobs = () => {
  const {data:jobs, isLoading, error } = useGetAllJobsQuery()
   if (isLoading) return <div>Loading...</div>
   if (error) return <div>Error fetching Jobs</div>
  return (
    <div className='bg-gray/50 h-screen'>
     <div className='px-20 flex justify-center'>
     <Search/>
     </div>
      <div className='px-20 py-15 grid grid-cols-3'>
      {jobs.map((props, index) => (
                      <Card key={index} logo={props.logo} jobType={props.jobType} name={props.hospital.name} location={props.location} title={props.title} createdAt={new Date(props.createdAt).toLocaleString()} url={props._id}/>
                    ))}
      </div>
    </div>
  )
}

export default Findjobs