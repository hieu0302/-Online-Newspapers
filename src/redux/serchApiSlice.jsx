import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "searchClick",
  initialState: {
    text: [],
  },
  reducers: {
    updateSearch: (state, action) => {
      state.text = action.payload.text;
    },
  },
});

export const { updateSearch } = searchSlice.actions;
export default searchSlice.reducer;
