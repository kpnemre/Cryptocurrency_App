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
      query: (count) => createRequest(`/coins?limit=${count}`),  
    }),
    getCryptoDetails:builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),  
    }),
    // 'https://coinranking1.p.rapidapi.com/coin/1/history/7d'
    getCryptoHistory:builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history/${timeperiod}`),
    }),
    getExchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),
  }),
});
// console.log("object",cryptoApi);
export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetExchangesQuery } = cryptoApi;
