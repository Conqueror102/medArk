// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const userSlice = createApi({
//   reducerPath: "userApi", 
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://localhost:2909/api",
//   }),
//   tagTypes: ["user"],
//   endpoints: (builder) => ({
//     loginUser: builder.mutation({
//       query: (body) => ({
//         url: "/users/login",
//         method: "POST",
//         body,
//       }),
//     }),
//     registerUser: builder.mutation({
//       query: (body) => ({
//         url: "/users/register",
//         method: "POST",
//         body,
//       }),
//     }),
//     getAllJobs: builder.query({
//       query: () => "/jobCreate",
//     }),
//     // getSingleUser: builder.query({
//     //   query: (id) => `/user/${id}`,
//     // }),
//   }),
// });

// export const {
//   useLoginUserMutation,
//   useRegisterUserMutation,
//   useGetAllJobsQuery
// //   useGetAllUsersQuery,
// //   useGetSingleUserQuery,
// } = userSlice;
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { use } from "react";

export const userSlice = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:2909/api",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user?.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body) => ({
        url: "/users/login",
        method: "POST",
        body,
      }),
    }),
    registerUser: builder.mutation({
      query: (body) => ({
        url: "/users/register",
        method: "POST",
        body,
      }),
    }),
    getAllJobs: builder.query({
      query: () => "/jobCreate",
    }),
    getProfile: builder.query({
      query: () => "/profile/getProfile", // This will fetch the profile (create/update happens in the same endpoint)
      providesTags: ["User"],
    }),
    createOrUpdateProfile: builder.mutation({
      query: (formData) => ({
        url: "/profile/createUpdateProfile",
        method: "POST",
        body: formData, // Send FormData for file uploads
        formData: true, 
      }),
      invalidatesTags: ["User"], // Refresh the profile after update
    }),
    getJobById: builder.query({
      query: (jobId) => `/JobCreate/oneJob/${jobId}`,  // This fetches ONE job
    }),

    getUserJob: builder.query({
      query: () => `jobApplication/my-applications`,  // This fetches ONE job
      providesTags: ["Applications"],
    }),

    apply: builder.mutation({
      query: (jobId) => ({
        url: "jobApplication/apply",
        method: "POST",
        body: { jobId },
      }),
    }),

    createJob: builder.mutation({
      query: (jobData) => ({
        url: "jobCreate/create",
        method: "POST",
        body: jobData,
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useGetAllJobsQuery,
  useGetProfileQuery, // Fetch profile (create/update happens in same endpoint)
  useCreateOrUpdateProfileMutation, // Handles both create and update
 useGetJobByIdQuery,
 useGetUserJobQuery,
 useApplyMutation,
} = userSlice;
