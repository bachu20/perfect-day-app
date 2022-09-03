import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQuery } from "./common";

const transformResponse = (response) => response.data;

export const userApi = createApi({
  reducerPath: "user",
  tagTypes: ["User"],
  baseQuery: baseQuery({ baseUrl: "http://BACHU-600.local:3000/api/v1" }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => `/users/62f96badc7bdebcf17b3de2e`,
      providesTags: ["User"],
      transformResponse,
    }),
    patchUser: builder.mutation({
      query: (data) => ({
        url: `/users/62f96badc7bdebcf17b3de2e`,
        method: "PATCH",
        data: { data },
      }),
      invalidatesTags: ["User"],
      transformResponse,
    }),
  }),
});

export const { useGetUserQuery, usePatchUserMutation } = userApi;
export default userApi;
