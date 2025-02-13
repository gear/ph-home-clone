import { NavBar } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  currentTab: NavBar;
}

const initialState: AppState = {
  currentTab: "home",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCurrentTab: (state, action: PayloadAction<NavBar>) => {
      state.currentTab = action.payload;
    },
    initializeTab: (state, action: PayloadAction<NavBar>) => {
      state.currentTab = action.payload;
    },
  },
});

export const { setCurrentTab, initializeTab } = appSlice.actions;

export default appSlice.reducer;
