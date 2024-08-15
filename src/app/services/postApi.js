"use client"
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getPostByName: builder.query({
      query: (name) => `posts/${name}`,
    }),
  }),
})

export const { useGetPostByNameQuery } = postApi
