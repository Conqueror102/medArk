import { useState } from "react";

export default function MedicalVerificationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    profession: "",
    licenseNumber: "",
    degree: "",
    specialization: "",
    nyscCertificate: null,
    housemanshipCertificate: null,
    practicingLicense: null,
    document: null,
  });

  const professionRequirements = {
    Doctor: ["MDCN License", "NYSC Certificate", "Housemanship Certificate"],
    Pharmacist: ["PCN License"],
    Nurse: ["NMCN License"],
    "Medical Lab Scientist": ["MLSCN License"],
    Radiographer: ["RRBN License"],
    Optometrist: ["ODORBN License"],
    "Community Health Officer": ["CHPRBN License"],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Medical Professional Verification</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Profession</label>
          <select
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          >
            <option value="">Select Profession</option>
            {Object.keys(professionRequirements).map((prof) => (
              <option key={prof} value={prof}>{prof}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-medium">License Number</label>
          <input
            type="text"
            name="licenseNumber"
            value={formData.licenseNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        {professionRequirements[formData.profession]?.map((requirement) => (
          <div key={requirement}>
            <label className="block font-medium">Upload {requirement}</label>
            <input
              type="file"
              name={requirement.replace(/\s+/g, "").toLowerCase()}
              accept=".pdf,.jpg,.png"
              onChange={handleFileChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
        ))}
        <div>
          <label className="block font-medium">Upload Other Credentials (PDF or Image)</label>
          <input
            type="file"
            name="document"
            accept=".pdf,.jpg,.png"
            onChange={handleFileChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Submit for Verification
        </button>
      </form>
    </div>
  );
}
