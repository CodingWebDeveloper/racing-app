import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      const newUser = action.payload;
      state.user = newUser;
    },
  },
});

export default usersSlice.reducer;
export const { setUser } = usersSlice.actions;
export const selectUser = (state) => state.users.user;
