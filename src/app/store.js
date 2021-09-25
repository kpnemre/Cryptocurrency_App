import { configureStore} from "@reduxjs/toolkit";
import {cryptoApi} from "../services/cyrptoApi"

export default configureStore({
    reducer:{
        [cryptoApi.reducerPath]: cryptoApi.reducer
    }
})