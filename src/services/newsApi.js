import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const baseUrl = process.env.REACT_APP_NEWS_URL;
const apiKey = process.env.REACT_APP_NEWS_KEY;
const apiHost = process.env.REACT_APP_NEWS_HOST;
const apiSdk= process.env.REACT_APP_NEWS_SDK;
console.log(baseUrl,apiKey,apiHost,apiSdk);

const apiHeader = {
    "x-rapidapi-host":  apiHost ,
    "x-rapidapi-key": apiKey ,
    'x-bingapis-sdk': apiSdk,
  };

  const createRequest =(url)=>({url, headers:apiHeader})

  export const newsApi = createApi({
reducerPath:"newsApi",
baseQuery:fetchBaseQuery({baseUrl}),
endpoints:(builder)=>({
    getNews:builder.query({
        query: ({ newsCategory, count }) => createRequest(`/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),

    })  

})
  })

  export const { useGetNewsQuery } = newsApi;