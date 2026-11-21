import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
    format: "",
    isPaid: "",
    category: "",
  },
  reducers: {
    setFormat(state, action) {
      state.format = action.payload;
    },
  },
});

export const { setFormat } = filterSlice.actions;

export default filterSlice.reducer;
