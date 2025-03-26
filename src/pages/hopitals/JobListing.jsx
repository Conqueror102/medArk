import React, { useState } from "react";
import { useCreateJobMutation } from "../../service/UseRTK";

const CreateJobForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    requirements: "",
    targetProfession: "",
    location: "",
    jobType: "Full-time",
  });

  const [createJob, { isLoading, error }] = useCreateJobMutation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createJob({
        ...formData,
        requirements: formData.requirements.split(","),
      }).unwrap();
      console.log("Job Created:", response);
      alert("Job created successfully!");
    } catch (err) {
      console.error("Error creating job:", err);
    }
  };

  return (
    <>
      <div className="h-[90%] w-[90%] flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="p-5 shadow-md bg-white rounded-md w-[50%]"
        >
          <h2 className="text-xl font-semibold mb-4">Create a New Job</h2>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Job Title"
            className="border p-2 mb-2 w-full outline-0 bg-blue-100 text-[18px] font-semibold outline-primary rounded-[5px]"
            required
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Job Description"
            className="border p-2 mb-2 w-full outline-0 bg-blue-100 text-[18px] font-semibold outline-primary rounded-[5px]"
            required
          />
          <input
            type="text"
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            placeholder="Requirements (comma-separated)"
            className="border p-2 mb-2 w-full outline-0 bg-blue-100 text-[18px] font-semibold outline-primary rounded-[5px]"
            required
          />
          <input
            type="text"
            name="targetProfession"
            value={formData.targetProfession}
            onChange={handleChange}
            placeholder="Target Profession"
            className="border p-2 mb-2 w-full outline-0 bg-blue-100 text-[18px] font-semibold outline-primary rounded-[5px]"
            required
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="border p-2 mb-2 w-full outline-0 bg-blue-100 text-[18px] font-semibold outline-primary rounded-[5px]"
            required
          />
          <select
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
            className="border p-2 mb-2 w-full"
          >
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
          </select>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
            disabled={isLoading}
          >
            {isLoading ? "Creating..." : "Create Job"}
          </button>
          {error && (
            <p className="text-red-500 mt-2">Error creating job. Try again.</p>
          )}
        </form>
      </div>
    </>
  );
};

export default CreateJobForm;
