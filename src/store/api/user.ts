import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const baseUrl = `${process.env.NEXT_PUBLIC_APP_API_URL}/`;
export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl,
    }),
    endpoints: (build) => ({

    })
});



