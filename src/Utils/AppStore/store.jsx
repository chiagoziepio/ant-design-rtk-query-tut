import { configureStore } from "@reduxjs/toolkit";
import UserTableReducer from "../features/Users/userSlice";
import { ProductApi } from "../RTK/ProductApi";
import ProductsReducer from "../features/Products/productsSlice"
import LoginReducer from "../features/Users/loginSlice";

const store = configureStore({
    reducer:{
        userTable : UserTableReducer,
        products: ProductsReducer,
        login :  LoginReducer,
        [ProductApi.reducerPath] : ProductApi.reducer,
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(ProductApi.middleware)
})

export default store