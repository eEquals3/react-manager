import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
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
    { name: "задача 1", description: "сделать то" },
    { name: "задача 2", description: "сделать то" },
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
