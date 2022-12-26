import React, { useState} from 'react'
import { useDispatch } from 'react-redux';
import { addRemark } from '../features/tasks/taskSlice';
import { toggleRemarkState } from '../features/tasks/uiSlice';
import classes from './NewRemark.module.css'
import {useAppSelector} from '../app/hooks'


const NewRemark = () => {

  // const chosenTask = useAppSelector(state => state.tasks.chosenTask);
  const userRemark = useAppSelector(state => state.tasks.chosenTask?.remark);

  // const {remark} = chosenTask;

  const [remark, setRemark] = useState<string|null|undefined>(userRemark);

    // const inputRef = useRef();
    const dispatch = useDispatch(); 

    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        // const inputRefValue = inputRef.current.value;
        // console.log(inputRefValue);
        if (remark) {
          dispatch(addRemark(remark));
        }    
        dispatch(toggleRemarkState());
    }

    const onCloseHandler = () => {
      dispatch(toggleRemarkState());
    }

  return (
    <div className={classes.remark}>
        <div className={classes.notes}>Пометки к задаче</div>
        <form onSubmit={onSubmitHandler} className={classes.form}>
            <textarea onChange={e => setRemark(e.target.value)} rows={10} cols={45} name="text"></textarea>
            <button className={classes.btn}>Добавить</button>
        </form>
        <div className={classes.close} onClick={onCloseHandler}>X</div>
    </div>

  )
}

export default NewRemark