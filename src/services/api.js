import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQuery } from "./common";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["User", "Quotes", "Photos"],
  baseQuery: baseQuery({ baseUrl: "http://BACHU-600.local:3000/api/v1" }),
  endpoints: (builder) => ({
    // ======================= User =======================
    getUser: builder.query({
      query: () => `/users/62f96badc7bdebcf17b3de2e`,
      providesTags: ["User"],
      transformResponse: (response) => response.data,
    }),
    patchUser: builder.mutation({
      query: (data) => ({
        url: `/users/62f96badc7bdebcf17b3de2e`,
        method: "PATCH",
        data: { data },
      }),
      invalidatesTags: ["User", "Photos", "Quotes"],
      transformResponse: (response) => response.data,
    }),

    // ======================= Quotes =======================
    getQuotes: builder.query({
      query: (params) => {
        let query = "/quotes?limit=15&maxLength=120";

        if (params) query += `&${params}`;

        return query;
      },
      providesTags: ["Quotes"],
      transformResponse: (response) => response.data.results,
    }),

    // ======================= Photos =======================
    getPhotos: builder.query({
      query: (mood) => {
        const query = `/photos?orientation=square&query=${mood.toLowerCase()}`;
        return query;
      },
      providesTags: ["Photos"],
      transformResponse: (response) => response.data,
    }),

    // ======================= Music =======================
  }),
});

export const { useGetUserQuery, usePatchUserMutation } = api;
export const { useGetQuotesQuery } = api;
export const { useGetPhotosQuery } = api;

export default api;
