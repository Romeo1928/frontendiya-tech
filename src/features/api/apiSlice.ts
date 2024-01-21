// Import the RTK Query methods from the React-specific entry point

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { GetUsersQueryParams, ResponseType } from 'models/models.ts';

// Define our single API slice object
export const apiSlice = createApi({
  // по какому адресу в нашем store будут храниться все наши закешированные данные, когда мы будем работать с API
  reducerPath: 'api',
  // все наши запросы будут иметь URL-адреса, начинающиеся с 'https://example.com'
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  refetchOnFocus: true,
  // 'endpoints' представляют собой операции и запросы к данному серверу.
  endpoints: (builder) => ({
    // endpoint `searchUsers` - это операция "query/запрос" GET, которая возвращает data/данные.
    // в <Generic> мы указываем, 1) что нам пришло в ответ с сервера, 2) параметр, который мы хотим принимать, чтобы сделать запрос.
    searchUsers: builder.query<ResponseType, GetUsersQueryParams>({
      // описываем сам запрос ⬇⬇⬇
      query: ({ q, page, perPage, sort, order }) => ({
        url: 'search/users',
        params: { q, page, per_page: perPage, sort, order },
      }),
    }),
  }),
});

// export const apiSlice = createApi({
//   // по какому адресу в нашем store будут храниться все закешированные данные, когда мы будем работать с api
//   reducerPath: 'api',
//   // все наши запросы будут иметь URL-адреса, начинающиеся с 'https://example.com'
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com' }),
//   // 'endpoints' представляют собой операции и запросы к данному серверу.
//   endpoints: (builder) => ({
//     // endpoint `searchUsers` - это операция "query/запрос" GET, которая возвращает data/данные
//     searchUsers: builder.query<ResponseType, string>({
//       // описываем сам запрос ⬇⬇⬇
//       // 1-case
//       query: (query: string) => `/search/users?q=${query}`, // поиск users
//       // searchUsers: builder.query<ResponseType, SearchUsersParamsType>({
//       //   query: ({ query, page }) => `users?q=${query}&page=${page}`, // Добавляем параметр пагинации в запрос
//       //   // 2-case
//       //   query: (query: string) => ({
//       //     url: `search/users`,
//       //     params: {
//       //       q: query,
//       //       per_page: 10,
//       //     },
//       //   }),
//       //   // callback с помощью которого мы можем трансформировать данные из response
//       //   transformResponse: (res: ResponseType<UserType>) => res.items,
//       // }),
//     }),
//   }),
// });

// автогенерируемый hook в зависимости от того что мы указали в endpoint, у нас `searchUsers`
export const { useSearchUsersQuery } = apiSlice;
// export const { useLazySearchUsersQuery } = apiSlice;
