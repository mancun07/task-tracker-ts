import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface Task {
  id: number;
  task: string;
  remark: string|number|undefined; 
}

export interface TaskState {
  tasks: Task[];
  ongoingTasks: Task[];
  completedTasks: Task[];
  chosenTask: null | Task;
}

// tasks: [],
// ongoingTasks: [],
// completedTasks: []


const initialState:TaskState = {
  tasks: [],
  ongoingTasks: [],
  completedTasks: [],
  chosenTask: null
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action:PayloadAction<Task>) => {
      // console.log(action.payload)
      // console.log(state.tasks)
      state.tasks.push(action.payload)
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter(el => el.id !== action.payload)
    },
    addOnGoingTask: (state, action:PayloadAction<Task>) => {
      state.ongoingTasks.push(action.payload)
    },
    removeOnGoingTask: (state, action: PayloadAction<number>) => {
      state.ongoingTasks = state.ongoingTasks.filter(el => el.id !== action.payload)
    },
    // addCompletedTask: (state, action) => {
    //   state.completedTasks.push(action.payload)
    // },
    // removeCompletedTask: (state, action) => {
    //   state.completedTasks = state.completedTasks.filter(el => el.id !== action.payload)
    // },
    updateRedux: (state, action: PayloadAction<TaskState>) => {
      console.log(action.payload)
      state.tasks = action.payload.tasks
      state.ongoingTasks = action.payload.ongoingTasks
      // state.completedTasks = action.payload.completedTasks
    },
    addRemark: (state, action:PayloadAction<string|number|undefined>) => {
      // const neededItem = state.tasks.find(el => el.id === action.payload.id);
      // neededItem.remark = action.payload.remark;
      const id = state.chosenTask ? state.chosenTask.id : false;
      let requiredTask = state.tasks.find(el => el.id === id);
      if (requiredTask === null || requiredTask === undefined) {
        requiredTask = state.ongoingTasks.find(el => el.id === id);
      }
      if (requiredTask) {
        requiredTask.remark = action.payload;
      }
    },
    saveClickedTask: (state, action:PayloadAction<Task>) => {
      state.chosenTask = action.payload;
    }
  },
})


export const {addTask, removeTask, addOnGoingTask, removeOnGoingTask, updateRedux, 
  addRemark, saveClickedTask } = taskSlice.actions;


export default taskSlice.reducer;
