import { configureStore } from "@reduxjs/toolkit";
import srcSlice from "./srcSlice";
import searchSlice from "./searchSlice";

export default configureStore({
  reducer: {
    user: srcSlice,
    updateSearch: searchSlice,
  },
});
