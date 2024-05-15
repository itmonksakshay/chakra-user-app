import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_PATH = `${process.env.NEXT_PUBLIC_APP_API_URL}/users`

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_PATH }),
  endpoints: (builder) => ({
    getUsers: builder.query<any, any>({
        query: (data) => data
    }),
    createUser: builder.mutation<any, any>({
        query: (user) => ({
            url: "newroom",
            method: "POST",
            body: user
        }),
    })
  }),
})

export const { useGetUsersQuery, useCreateUserMutation } = userApi
