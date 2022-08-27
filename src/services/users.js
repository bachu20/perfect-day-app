import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async (request, api) => {
    const {
      url = request,
      method = "GET",
      data,
      params,
    } = typeof request === "object" ? request : {};

    const headers = { "Content-Type": "application/json" };

    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });

      return { data: result.data };
    } catch (error) {
      console.log("error:", error);

      const isAuthError =
        error.response.status === 401 &&
        error.response.data.code === "Unauthorized";

      isAuthError && api.dispatch(setToken(null));

      return {
        error: {
          status: error.response?.status,
          data: error.response?.data || error.message,
        },
      };
    }
  };

export const userApi = createApi({
  reducerPath: "user",
  baseQuery: axiosBaseQuery({ baseUrl: "http://BACHU-600.local:3000/api/v1" }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => `/users/62f96badc7bdebcf17b3de2e`,
      providesTags: ["User"],
    }),
  }),
});

export const { useGetUserQuery } = userApi;
export default userApi;
