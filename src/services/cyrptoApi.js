import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;
const apiHost = process.env.REACT_APP_API_HOST;

// console.log("apis:", baseUrl,apiKey, apiHost);

const apiHeader = {
  "x-rapidapi-host":  apiHost ,
  "x-rapidapi-key": apiKey ,
};
// console.log("object:d", apiHeader);
const createRequest =(url)=>({url, headers:apiHeader})
// export const apiSlice =createApi({
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl}),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/coins"),
     
    })
  }),
});
// console.log("object",cryptoApi);
export const { useGetCryptosQuery } = cryptoApi;
