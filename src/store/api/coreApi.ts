import { IUser } from '@/types/users';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_PATH = `${process.env.NEXT_PUBLIC_APP_API_URL}public/v2/`
const token = `${process.env.NEXT_PUBLIC_APP_PRIMARY_TOKEN}`

export const coreApi = createApi({
  reducerPath: 'coreApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: API_PATH,
    prepareHeaders(headers) {
      if (token) {
          headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
  },
  }),
  tagTypes: ["posts","users"],
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], void>({
      query: () => "users",
      providesTags: ["users"]
    }),
    createUser: builder.mutation<any, any>({
      query: (user) => ({
        url: "users",
        method: "POST",
        body: user
      }),
      invalidatesTags: ["users"]
    }),
    getPosts: builder.query<any, any>({
      query: (data) => data,
      providesTags: ["users"]
    }),
    createPost: builder.mutation<any, any>({
      query: (post) => ({
        url:"posts",
        method: "POST",
        body: post
      }),
      invalidatesTags: ["posts"]
    })
  }),
})

export const { useGetUsersQuery, useCreateUserMutation } = coreApi;
