import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Response} from "./types.ts";


export const dataService = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: `https://www.bd-event.ru/external/2024/`,
    }),
    endpoints: builder => {
        return {
            getMessage: builder.query<Response, { date: string; type: string; }>({
                query: (data) => ({
                    body: data,
                    method: "POST",
                    url: `trans-ai_oracle/`,
                })
            })
        }
    },

})

export const {useGetMessageQuery, useLazyGetMessageQuery} = dataService
