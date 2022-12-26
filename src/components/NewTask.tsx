import React, {useRef} from 'react'
import { addTask } from '../features/tasks/taskSlice';
import classes from './NewTask.module.css'
import {useAppDispatch} from '../app/hooks'


const NewTask = () => {

  const taskRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();
  // const tasks = useAppSelector(state => state.tasks.tasks)

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const taskRefValue = taskRef.current?.value;

    if (taskRefValue === '' || (typeof(taskRefValue) !== 'string')) {
      alert('Введите задачу! Поле не должно быть пустым. Цифры не являются задачей!!!');
      return;
    }
    // localStorage.setItem('task', JSON.stringify({
    //   id: Math.random(),
    //   task: taskRefValue
    // }))
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
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      <input type="text" ref={taskRef}/>
      <button>Добавить задачу</button>
    </form>
  )
}

export default NewTask