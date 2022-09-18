import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  name: string;
  description: string;
}

export interface TaskState {
  currentTask: string;
  tasks: Record<string, Task>;
}

const initialState: TaskState = {
  currentTask: "",
  tasks: {
    "u6n5y4y-h5h6j7k8-n3n3n3-j5j6j": { name: "1", description: "1" },
    "uafasfy-h5h6j7k8-n3n3n3-j5j6j": { name: "2", description: "2" },
    "uasfaff-h5h6j7k8-n3n3n3-j5j6j": { name: "3", description: "3" },
    "u6n5y4y-h5hasgg8-n3n3n3-j5j6j": { name: "4", description: "4" },
    "u6n5y4y-h5h6fck8-n3n3n3-j5j6j": { name: "5", description: "5" },
    "u6n5y4y-h5h6j7k8-n3n3n3-sdfgh": { name: "6", description: "6" },
    "u6n5y4y-h5h6xcv8-n3n3n3-j5j6j": { name: "7", description: "7" },
    "u6n5y4y-ijhghjjh-n3n3n3-j5j6j": { name: "8", description: "8" },
    "u6n5y4y-h5h6jdfg-n3n3n3-j5j6j": { name: "9", description: "9" },
    "u6n5y4y-qwertyrt-n3n3n3-j5j6j": { name: "10", description: "10" },
    "u6n5y4y-qwertyyu-n3n3n3-j5j6j": { name: "11", description: "11" },
  },
};

export const taskSlice = createSlice({
  name: "Task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ id: string; task: Task }>) => {
      // if (action.payload.name.length > 3)
      //   state.tasks.push({
      //     name: action.payload.name,
      //     description: action.payload.description,
      //   });
      // console.log(state.tasks);
      // state.tasks.sort();

      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.payload.id]: action.payload.task,
        },
      };
    },
    reduceTask: (state, action: PayloadAction<string>) => {
      const currentTaskList = state.tasks;
      delete currentTaskList[action.payload];

      return {
        ...state,
        tasks: currentTaskList,
      };
    },
    setCurrentTask: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        currentTask: action.payload,
      };
    },
  },
});

export const { addTask, reduceTask, setCurrentTask } = taskSlice.actions;

export default taskSlice.reducer;
