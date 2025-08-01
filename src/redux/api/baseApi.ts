import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://roadmap-app-backend.vercel.app/api",
    // baseUrl: "http://localhost:5000/api",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (userData) => ({
        url: "/users/create-user",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["user"],
    }),
    loginUser: builder.mutation({
      query: (userData) => ({
        url: "/auth/login",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["user"],
    }),
    getRoadmapItems: builder.query({
      query: () => ({
        url: "/roadmap",
        method: "GET",
      }),
      providesTags: ["roadmap"],
    }),
  }),
  tagTypes: ["user", "roadmap"],
});

export const {
  useLoginUserMutation,
  useCreateUserMutation,
  useGetRoadmapItemsQuery,
} = baseApi;
