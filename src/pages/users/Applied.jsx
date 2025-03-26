import React from 'react';
import { useGetUserJobQuery } from '../../service/UseRTK';
import Card from '../../components/Card';
import Search from '../../components/Search';

const Applied = () => {
  const { data, isLoading, error } = useGetUserJobQuery();
  const applications = data?.applications || []; // Ensure it's always an array

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching applied jobs</div>;
  if (applications.length === 0) return <p>You have not applied to any jobs</p>;

  return (
    <div className='bg-gray/50 min-h-screen'>
      <div className='px-20 flex justify-center'>
        <Search />
      </div>
      <div className='px-20 py-15 grid grid-cols-3 gap-6'>
        {applications.map((application) => {
          const job = application.jobId; // Extract the job details

          return (
            <Card
              key={application._id} // Application ID for uniqueness
              logo={job.logo || "/default-logo.png"} // Default logo fallback
              jobType={job.jobType}
              name={job.hospital?.name || "Unknown Hospital"} // Handle missing hospital
              location={job.location}
              title={job.title}
              description={job.description}
              requirements={job.requirements.join(", ")} // Convert array to string
              createdAt={new Date(job.createdAt).toLocaleDateString()}
              status={application.status} // Show application status
              url={`/jobs/${job._id}`} // Ensure correct navigation
            />
          );
        })}
      </div>
    </div>
  );
};

export default Applied;
