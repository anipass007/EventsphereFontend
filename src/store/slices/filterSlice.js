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
    setIsPaid(state, action) {
      //   state.isPaid =
      //     action.payload === "free"
      //       ? false
      //       : action.payload === "paid"
      //         ? true
      //         : "";

      state.isPaid = action.payload;
    },
  },
});

export const { setFormat, setIsPaid } = filterSlice.actions;

export default filterSlice.reducer;
