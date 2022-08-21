import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

// export const { increment, decrement, incrementByAmount } = userSlice.actions;

export default userSlice.reducer;
