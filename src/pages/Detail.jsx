import React from "react";
import { useParams } from "react-router-dom";
import { useApplyMutation, useGetJobByIdQuery } from "../service/UseRTK"; // Assuming RTK Query is used

const JobDetails = () => {
  const { jobId } = useParams(); // Get Job ID from URL
  const { data: job, isLoading , error } = useGetJobByIdQuery(jobId);
  const [applyForJob, {  isApplying, isSuccess }] =  useApplyMutation();

  if (isLoading) return <p className="text-center">Loading job details...</p>;
  if (error) return <p className="text-center text-red-500">Error loading job.</p>; 
  if (!job) return <p className="text-center text-gray-500">Job not found.</p>;


 

  const handleApply = async () => {
    try {
      await applyForJob(job._id).unwrap();
    } catch (error) {
      console.error("Application failed:", error);
      
    }
  };
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
      <p className="text-gray-500">📍 {job.location}</p>
      <span className="px-3 py-1 text-sm bg-blue-500 text-white rounded">{job.jobType}</span>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Description</h3>
        <p className="text-gray-600">{job.description}</p>
      </div>

      {job.requirements.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Requirements</h3>
          <ul className="list-disc list-inside text-gray-600">
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
      )}

<button
          className={`p-2 text-white rounded ${
            isSuccess ? "bg-gray-400" : "bg-blue-500"
          }`}
          onClick={handleApply}
          disabled={isSuccess || isApplying}
        >
          {isSuccess ? "Applied" : isApplying ? "Applying..." : "Apply"}
        </button>
      <div className="mt-6 flex justify-between">
       <span className="text-gray-500 text-sm">🏥 Hospital: {job.hospital?.name}</span>
<span className="text-gray-500 text-sm">📍 Location: {job.hospital?.location}</span>
        <span className="text-gray-500 text-sm">📅 Posted: {new Date(job.createdAt).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default JobDetails;
