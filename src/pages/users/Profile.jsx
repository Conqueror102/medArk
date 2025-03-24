import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useGetProfileQuery, useCreateOrUpdateProfileMutation } from "../../service/UseRTK";
import { Camera } from "lucide-react";

const Profile = () => {
    const { data: profile, isLoading } = useGetProfileQuery();
    const [createOrUpdateProfile, { isLoading: isUpdating }] = useCreateOrUpdateProfileMutation();
    const [isEditing, setIsEditing] = useState(false);
    const [profileSubmitted, setProfileSubmitted] = useState(false);
    const [profilePicture, setProfilePicture] = useState(null);
    const [resume, setResume] = useState(null);
    const [previewProfilePicture, setPreviewProfilePicture] = useState("/default-avatar.png");
    const originalProfile = useRef(null); // Store original profile data

    const { register, handleSubmit, reset } = useForm({
        resolver: yupResolver(yup.object({
            profession: yup.string().required("Profession is required"),
            bio: yup.string().required("Bio is required"),
            experience: yup.number().positive().integer().required("Experience is required"),
            phone: yup.string().required("Phone number is required"),
            location: yup.string().required("Location is required"),
        })),
    });

    useEffect(() => {
        if (profile) {
            reset(profile);
            setPreviewProfilePicture(profile.profilePicture || "/default-avatar.png");
            setProfileSubmitted(true);
            originalProfile.current = profile; // Store original data
        }
    }, [profile, reset]);

    const handleProfilePictureChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setProfilePicture(file);
            setPreviewProfilePicture(URL.createObjectURL(file));
        }
    };

    const handleResumeChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setResume(file);
        }
    };

    const onSubmit = async (data) => {
        const formData = new FormData();
        Object.keys(data).forEach((key) => formData.append(key, data[key]));
        if (profilePicture) formData.append("profilePicture", profilePicture);
        if (resume) formData.append("resume", resume);

        try {
            await createOrUpdateProfile(formData).unwrap();
            setProfileSubmitted(true);
            setIsEditing(false);
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    const handleCancel = () => {
        if (originalProfile.current) {
            reset(originalProfile.current); // Restore original data
            setProfilePicture(null);
            setResume(null);
            setPreviewProfilePicture(originalProfile.current.profilePicture || "/default-avatar.png");
            setIsEditing(false);
        }
    };

    return (
        <div className="max-w-5xl mx-auto p-6 bg-white shadow-xl rounded-xl flex gap-8">
            <div className="w-1/3 flex flex-col items-center bg-gray-100 p-6 rounded-lg">
                <label className="relative cursor-pointer">
                    <img
                        src={previewProfilePicture}
                        alt="Profile"
                        className="w-36 h-36 rounded-full object-cover border-2 border-gray-300 shadow-md"
                    />
                    {isEditing && (
                        <div className="absolute bottom-0 right-0 bg-black/50 p-2 rounded-full">
                            <Camera className="text-white w-5 h-5" />
                        </div>
                    )}
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleProfilePictureChange}
                        disabled={!isEditing}
                    />
                </label>
            </div>

            <div className="w-2/3">
                <h2 className="text-2xl font-semibold mb-6">Profile Information</h2>
                {isLoading ? (
                    <p className="text-center">Loading profile...</p>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
                        <input {...register("profession")} disabled={!isEditing} className="w-full p-2 border rounded" placeholder="Profession" />
                        <input {...register("experience")} type="number" disabled={!isEditing} className="w-full p-2 border rounded" placeholder="Experience" />
                        <input {...register("phone")} disabled={!isEditing} className="w-full p-2 border rounded" placeholder="Phone" />
                        <input {...register("location")} disabled={!isEditing} className="w-full p-2 border rounded" placeholder="Location" />
                        <textarea {...register("bio")} disabled={!isEditing} className="w-full col-span-2 p-2 border rounded" placeholder="Bio" />

                        {isEditing && (
                            <div className="col-span-2">
                                <label className="block text-gray-700">Upload Resume:</label>
                                <input type="file" accept=".pdf,.doc,.docx" className="w-full p-2 border rounded" onChange={handleResumeChange} />
                            </div>
                        )}

                        <div className="col-span-2 flex justify-end gap-4 mt-4">
                            {profileSubmitted && (
                                <div className="flex gap-4">
                                    <button
                                        type="submit"
                                        className={`bg-blue-500 text-white px-4 py-2 rounded transition-colors duration-300 ${!isEditing && "hidden"}`}
                                        disabled={isUpdating}
                                    >
                                        {isUpdating ? "Saving..." : "Save"}
                                    </button>
                                    <button
                                        type="button"
                                        className={`bg-gray-500 text-white px-4 py-2 rounded transition-colors duration-300 ${!isEditing && "hidden"}`}
                                        onClick={handleCancel}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        className={`bg-green-500 text-white px-4 py-2 rounded transition-colors duration-300 ${isEditing && "hidden"}`}
                                        onClick={() => setIsEditing(true)}
                                    >
                                        Edit Profile
                                    </button>
                                </div>
                            )}
                            {!profileSubmitted && (
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded transition-colors duration-300">
                                    Submit
                                </button>
                            )}
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Profile;