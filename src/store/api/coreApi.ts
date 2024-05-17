import { IComment, IPost } from '@/types/post';
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
  tagTypes: ["posts", "users", "comments"],
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], void>({
      query: () => "users",
      providesTags: ["users"]
    }),

    getUserById: builder.query<IUser, number>({
      query: (id) => `users/${id}`
    }),

    createUser: builder.mutation<any, any>({
      query: (user) => ({
        url: "users",
        method: "POST",
        body: user
      }),
      invalidatesTags: ["users"]
    }),

    getUserPosts: builder.query<IPost[], number>({
      query: (id) => `users/${id}/posts`,
      providesTags: ["posts"]
    }),

    createPost: builder.mutation<any, any>({
      query: ({ user_id, ...post }) => ({
        url: `users/${user_id}/posts`,
        method: "POST",
        body: post
      }),
      invalidatesTags: ["posts"]
    }),

    getPostComments: builder.query<IComment[], number>({
      query: (id) => `posts/${id}/comments`,
      providesTags: ["comments"]
    }),

    createComment: builder.mutation<any, any>({
      query: ({ post_id, ...comment }) => ({
        url: `posts/${post_id}/comments`,
        method: "POST",
        body: comment
      }),
      invalidatesTags: ["comments"]
    }),

  }),
})

export const { useGetUsersQuery, useGetUserByIdQuery, useCreateUserMutation, useGetUserPostsQuery, useGetPostCommentsQuery, useCreateCommentMutation, useCreatePostMutation } = coreApi;
