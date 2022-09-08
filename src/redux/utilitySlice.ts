import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UtilityState {
  windowType: string;
}

const initialState: UtilityState = {
  windowType: "",
};

export const utilitySlice = createSlice({
  name: "Task",
  initialState,
  reducers: {
    setCurrentWinType: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        windowType: action.payload,
      };
    },
  },
});

export const { setCurrentWinType } = utilitySlice.actions;

export default utilitySlice.reducer;
