import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
interface Params {
    name: string;
    limit: number;
}

const citiesApi = createApi({
    reducerPath: 'cities/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.api-ninjas.com',
        headers: {'X-Api-Key': 'VM50aAqOOHrkD1eZBtgZfg==1u385AXEhvgSyeIx'}
    }),
    endpoints: build => ({
        getCities: build.query<any, string>({
            query: (name: string) => ({
                url: '/v1/city',
                params: {
                    name,
                    limit: 10
                }
            }),
        })
    })
});

export const { useGetCitiesQuery } = citiesApi;
