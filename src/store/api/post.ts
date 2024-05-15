import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_PATH = `${process.env.NEXT_PUBLIC_APP_API_URL}/posts`

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_PATH }),
  endpoints: (builder) => ({
    getPosts: builder.query<any, any>({
        query: (data) => data
    }),
    createPost: builder.mutation<any, any>({
        query: (post) => ({
            url: "",
            method: "POST",
            body: post
        }),
    })
  }),
})

export const { useGetPostsQuery, useCreatePostMutation } = postApi
