import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: []
};

export const userSlicer = createSlice({
  name: "Users",
  initialState,
  reducers: {
    setAllUsers: (state, action) => {
      state.users = action.payload;
    },
    deleteAUser: (state, action) => {
      state.users = state.users.filter((items, ind) => {
        return items.id !== action.payload;
      });
    }
  }
});

// export const getAllUsers = (state) =>{
//   retun state.users
// }

export const getAllUsers = (state) => {
  return state.users;
};

export const { setAllUsers, deleteAUser } = userSlicer.actions;

export default userSlicer.reducer;
