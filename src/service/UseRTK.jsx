import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userSlice = createApi({
  reducerPath: "userApi", 
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:2909/api",
  }),
  tagTypes: ["user"],
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
    // getAllUsers: builder.query({
    //   query: () => "/",
    // }),
    // getSingleUser: builder.query({
    //   query: (id) => `/user/${id}`,
    // }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
//   useGetAllUsersQuery,
//   useGetSingleUserQuery,
} = userSlice;
