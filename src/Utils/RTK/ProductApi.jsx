 import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

 export const ProductApi = createApi({
    reducerPath: "ProductApis",
    baseQuery: fetchBaseQuery({baseUrl:'https://dummyjson.com'}),
    endpoints:(builder)=>({
        getProducts : builder.query({
            query : ()=> "/products"
        })
    })
 })

 export const { useGetProductsQuery } = ProductApi