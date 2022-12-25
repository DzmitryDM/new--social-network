import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'




export const setProfile = createApi({
  reducerPath: 'setProfile',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://social-network.samuraijs.com/api/1.0/' }),
  endpoints: (builder) => ({
    getProfileByName: builder.query({
      query: (id) => `profile/${id}`,
    }),
  }),
})


export const {useGetProfileByNameQuery} =setProfile