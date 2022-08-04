import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CommandsState {
  commands: string[];
}

const initialState: CommandsState = {
  commands: [""],
};

interface Props {
  name: string;
  letterCount: number;
}

export const commandsSlice = createSlice({
  name: "Commands",
  initialState,
  reducers: {
    getAllUserCommands: (state, action: PayloadAction<string[]>) => {
      // state.commands = [...action.payload];
      return {
        ...state,
        commands: action.payload,
      };
    },
    addCommand: (state, action: PayloadAction<Props>) => {
      if (action.payload.letterCount > 3)
        state.commands.push(action.payload.name);
    },
  },
});

export const { getAllUserCommands, addCommand } = commandsSlice.actions;

export default commandsSlice.reducer;
