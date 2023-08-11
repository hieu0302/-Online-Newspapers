import { createSlice } from "@reduxjs/toolkit";

export const srcSlice = createSlice({
  name: "srcClick",
  initialState: {
    src: "",
  },
  reducers: {
    update: (state, action) => {
      state.src = action.payload.src;
    },
  },
});

export const { update } = srcSlice.actions;
export default srcSlice.reducer;
