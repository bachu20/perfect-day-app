import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQuery } from "./common";

const transformResponse = (response) => response;

export const photosApi = createApi({
  reducerPath: "photos",
  tagTypes: ["Photos"],
  baseQuery: baseQuery({ baseUrl: "https://api.pexels.com/v1/search" }),
  endpoints: (builder) => ({
    getPhotos: builder.query({
      query: (mood) => {
        const query = `/photos?orientation=square&query=${mood}`;

        console.log("query:", query);
        return query;
      },
      providesTags: ["Photos"],
      transformResponse,
    }),
  }),
});

export const { useGetPhotosQuery } = photosApi;
export default photosApi;
