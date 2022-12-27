import React, {useRef} from 'react';
import { addTask } from '../features/tasks/taskSlice';
import { toggleNotification } from '../features/tasks/uiSlice';
import classes from './NewTask.module.css';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {v4} from 'uuid';


const NewTask = () => {

  const taskRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const taskRefValue = taskRef.current?.value;

    if (taskRefValue === '' || (typeof(taskRefValue) !== 'string')) {
        dispatch(toggleNotification())
      setTimeout(() => {
        dispatch(toggleNotification())
      }, 3000)
      return;
    }
    dispatch(addTask({
      id: +v4(),
      task: taskRefValue,
      remark: ''
    }));

    if(taskRef.current) {
      taskRef.current.value = '';
    }
  }

  return (
    <form className={classes[`new-task`]} onSubmit={submitHandler}>
      <input type="text" ref={taskRef}/>
      <button>Добавить задачу</button>
    </form>
  )
}

export default NewTask