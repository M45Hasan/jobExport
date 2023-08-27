import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice/userSlice";

const store = configureStore({
  reducer: {
    userData: userSlice,
  },
});
export default store;
