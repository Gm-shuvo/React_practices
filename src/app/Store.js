import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlicer";
export const store = configureStore({
  reducer: {
    users: userReducer
  }
});
