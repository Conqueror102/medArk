import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ logo, jobType, name, location, title, createdAt, url, description, requirements, status }) => {
  return (
    <div className='p-5 shadow-md rounded-md border border-gray-200 bg-white'>
      <div>
        <div className='flex justify-between'>
          <div className='w-20 rounded-md p-4 mb-3 shadow-primary/10 border-gray-200 border shadow-lg'>
            <img src={logo || "/default-logo.png"} alt="Company Logo" className="w-full h-auto" />
          </div>
          <p className='bg-green-200 text-green-600 font-semibold rounded-md p-1 h-8'>
            {jobType}
          </p>
        </div>

        <h1 className='font-semibold text-2xl'>{title}</h1>
        <p className="text-gray-600 mt-2">{description}</p>

        <div className="mt-2">
          <h2 className="font-semibold">Requirements:</h2>
          {Array.isArray(requirements) && requirements.length > 0 ? (
          <ul className='mt-2 text-gray-500 list-disc pl-4'>
            {requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        ) : (
          <p className='text-gray-500'>No specific requirements listed</p>
        )}
        </div>
      </div>

      <h2 className="mt-2 font-medium">{name}</h2>
      <p className="text-gray-500">{location}</p>

      <div className='flex justify-between items-center mt-4'>
        <p className="text-gray-400">{new Date(createdAt).toLocaleDateString()}</p>
        <p className={`px-3 py-1 rounded-md ${status === "Pending" ? "bg-yellow-200 text-yellow-700" : "bg-green-200 text-green-700"}`}>
          {status}
        </p>
      </div>

      <div className="mt-4">
        <Link to={`/userdash/jobs/${url}`}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
