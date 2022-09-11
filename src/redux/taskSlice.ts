import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  name: string;
  description: string;
}

export interface TaskState {
  currentTask: string;
  tasks: Task[];
}

const initialState: TaskState = {
  currentTask: "",
  tasks: [
    { name: "задача 1", description: "сделать 1" },
    { name: "задача 2", description: "сделать 2" },
    { name: "задача 3", description: "сделать 3" },
    { name: "задача 4", description: "сделать 4" },
    { name: "задача 5", description: "сделать 5" },
    { name: "задача 6", description: "сделать 6" },
    { name: "задача 7", description: "сделать 7" },
    { name: "задача 8", description: "сделать 8" },
    { name: "задача 9", description: "сделать 9" },
    { name: "задача 10", description: "сделать 10" },
    { name: "задача 11", description: "сделать 11" },
    { name: "задача 12", description: "сделать 12" },
    { name: "задача 13", description: "сделать 13" },
    { name: "задача 14", description: "сделать 14" },
    { name: "задача 15", description: "сделать 15" },
  ],
};

interface Props {
  name: string;
  description: string;
}

export const taskSlice = createSlice({
  name: "Task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Props>) => {
      if (action.payload.name.length > 3)
        state.tasks.push({
          name: action.payload.name,
          description: action.payload.description,
        });
      console.log(state.tasks);
      state.tasks.sort();
    },
    reduceTask: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        commands: state.tasks.filter((task) => task.name !== action.payload),
      };
    },
    setCurrentTask: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        currentCommand: action.payload,
      };
    },
  },
});

export const { addTask, reduceTask, setCurrentTask } = taskSlice.actions;

export default taskSlice.reducer;
