import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://proxy-backend-coral.vercel.app/api",
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: "/categories",
        method: "GET",
      }),
      providesTags: ["categories"],
    }),
    getProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags: ["products"],
    }),
    getSingleProduct: builder.query({
      query: (slug) => ({
        url: `/product/${slug}`,
        method: "GET",
      }),
      providesTags: ["products"],
    }),
  }),
  tagTypes: ["products", "categories"],
});

export const {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetSingleProductQuery,
} = baseApi;
