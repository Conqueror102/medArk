import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Card = ({ logo, jobType, name, location, title, createdAt, url }) => {
 console.log(url);

  return (
    <div className='p-5 shadow-md rounded-md border border-gray-200 bg-white'>
      <div>
        <div className='flex justify-between'>
          <div className='w-20 rounded-md p-4 mb-3 shadow-primary/10 border-gray-200 border shadow-lg'>
            <img src={logo} alt="Company Logo" />
          </div>
          <p className='bg-green-200 text-green-600 font-semibold rounded-md p-1 h-8'>
            {jobType}
          </p>
        </div>

        <div>
          <h1 className='font-semibold text-2xl'>{title}</h1>
        </div>
      </div>

      <h1>{name}</h1>
      <p>{location}</p>

      <div className='flex text-gray-400 items-center justify-between'>
        <p>{createdAt}</p>
       <Link to={`/userdash/jobs/${url}`}>
       <button  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
          View Details
        </button>
       </Link>
      </div>
    </div>
  );
};

export default Card;
