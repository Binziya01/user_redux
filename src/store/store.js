import { configureStore } from "@reduxjs/toolkit";
import detailsSlice from "./detailsSlice";
import userSlice from "./userSlice";

const store = configureStore({
    reducer :{
        details : detailsSlice,
        users : userSlice
        

    }
})

export default store