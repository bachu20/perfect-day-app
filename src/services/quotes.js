import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQuery } from "./common";

const transformResponse = (response) => response.results;

export const quotesApi = createApi({
  reducerPath: "quotes",
  tagTypes: ["Quotes"],
  baseQuery: baseQuery({ baseUrl: "https://api.quotable.io" }),
  endpoints: (builder) => ({
    getQuotes: builder.query({
      query: (params) => {
        let query = "/quotes?limit=15&maxLength=120";

        if (params) query += `&${params}`;

        console.log("query:", query);
        return query;
      },
      providesTags: ["Quotes"],
      transformResponse,
    }),
  }),
});

export const { useGetQuotesQuery } = quotesApi;
export default quotesApi;
