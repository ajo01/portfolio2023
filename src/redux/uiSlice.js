import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    detachNav: false,
  },
  reducers: {
    setDetachNav: (state, action) => {
      state.detachNav = action.payload;
    },
  },
});

export const { setDetachNav } = uiSlice.actions;
export default uiSlice.reducer;
