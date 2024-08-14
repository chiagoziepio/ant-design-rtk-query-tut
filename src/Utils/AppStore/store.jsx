import { configureStore } from "@reduxjs/toolkit";
import UserTableReducer from "../features/Users/userSlice";
import { ProductApi } from "../RTK/ProductApi";
import ProductsReducer from "../features/Products/productsSlice"

const store = configureStore({
    reducer:{
        userTable : UserTableReducer,
        products: ProductsReducer,
        [ProductApi.reducerPath] : ProductApi.reducer,
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(ProductApi.middleware)
})

export default store