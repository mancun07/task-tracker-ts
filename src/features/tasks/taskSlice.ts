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
      state.tasks.push(action.payload)
    },
    removeTask: (state, action: PayloadAction<number>) => {
      console.log(action.payload)
      state.tasks = state.tasks.filter(el => el.id !== action.payload)
    },
    addOnGoingTask: (state, action:PayloadAction<Task>) => {
      state.ongoingTasks.push(action.payload)
    },
    removeOnGoingTask: (state, action: PayloadAction<number>) => {
      state.ongoingTasks = state.ongoingTasks.filter(el => el.id !== action.payload)
    },
    updateRedux: (state, action: PayloadAction<TaskState>) => {
      state.tasks = action.payload.tasks
      state.ongoingTasks = action.payload.ongoingTasks
    },
    addRemark: (state, action:PayloadAction<string|number|undefined>) => {
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
