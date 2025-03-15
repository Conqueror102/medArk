import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ProfessionalProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [preview, setPreview] = useState(null);
  const [formData, setFormData] = useState(null);

  const onSubmit = (data) => {
    setFormData(data); // Save submitted data for editing
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-2xl border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Medical Professional Profile</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="text-center">
          {preview ? (
            <img src={preview} alt="Profile Preview" className="w-24 h-24 mx-auto rounded-full object-cover" />
          ) : (
            <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
              No Image
            </div>
          )}
          <input type="file" accept="image/*" className="mt-3" onChange={handleImageChange} />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600">Full Name</label>
          <input
            {...register("fullName", { required: "Full Name is required" })}
            defaultValue={formData?.fullName || ""}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600">Bio</label>
          <textarea
            {...register("bio", { required: "Bio is required" })}
            defaultValue={formData?.bio || ""}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none h-24"
          />
          {errors.bio && <p className="text-red-500 text-sm mt-1">{errors.bio.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600">Specialty</label>
          <input
            {...register("specialty", { required: "Specialty is required" })}
            defaultValue={formData?.specialty || ""}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          {errors.specialty && <p className="text-red-500 text-sm mt-1">{errors.specialty.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600">Years of Experience</label>
          <input
            type="number"
            {...register("experience", { required: "Experience is required", min: 0 })}
            defaultValue={formData?.experience || ""}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600">Certifications</label>
          <input
            {...register("certifications")}
            defaultValue={formData?.certifications || ""}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600">Availability</label>
          <select {...register("availability", { required: "Availability is required" })} defaultValue={formData?.availability || ""} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none">
            <option value="">Select Availability</option>
            <option value="full-time">Full-Time</option>
            <option value="part-time">Part-Time</option>
            <option value="contract">Contract</option>
          </select>
          {errors.availability && <p className="text-red-500 text-sm mt-1">{errors.availability.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600">Location</label>
          <input
            {...register("location", { required: "Location is required" })}
            defaultValue={formData?.location || ""}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>}
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition font-semibold">
          Submit
        </button>
      </form>
    </div>
  );
}
