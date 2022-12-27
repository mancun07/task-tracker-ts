import React, {useRef} from 'react'
import { addTask } from '../features/tasks/taskSlice';
import { toggleNotification } from '../features/tasks/uiSlice';
import classes from './NewTask.module.css'
import {useAppDispatch, useAppSelector} from '../app/hooks'


const NewTask = () => {

  const taskRef = useRef<HTMLInputElement>(null);
  const notificationIsShown = useAppSelector(state => state.ui.notificationIsShown)

  const dispatch = useAppDispatch();
  // const tasks = useAppSelector(state => state.tasks.tasks)

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const taskRefValue = taskRef.current?.value;

    if (taskRefValue === '' || (typeof(taskRefValue) !== 'string')) {
      // alert('Введите задачу! Поле не должно быть пустым. Цифры не являются задачей!!!');
        dispatch(toggleNotification())
      setTimeout(() => {
        dispatch(toggleNotification())
      }, 3000)
      return;
    }
    dispatch(addTask({
      id: Math.random(),
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