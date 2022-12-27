import React, { useState} from 'react'
import { useDispatch } from 'react-redux';
import { addRemark } from '../features/tasks/taskSlice';
import { toggleRemarkState } from '../features/tasks/uiSlice';
import classes from './NewRemark.module.css'
import {useAppSelector} from '../app/hooks'


const NewRemark = () => {


  const userRemark = useAppSelector(state => state.tasks.chosenTask?.remark);

  const [remark, setRemark] = useState<string|undefined|number>(userRemark);

    const dispatch = useDispatch(); 

    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(addRemark(remark));  
        dispatch(toggleRemarkState());
    }

    const onCloseHandler = () => {
      dispatch(toggleRemarkState());
    }

  return (
    <div className={classes.remark}>
        <div className={classes.notes}>Пометки к задаче</div>
        <form onSubmit={onSubmitHandler} className={classes.form}>
            <textarea value={remark} onChange={e => setRemark(e.target.value)} rows={10} cols={45} name="text"></textarea>
            <button className={classes.btn}>Добавить</button>
        </form>
        <div className={classes.close} onClick={onCloseHandler}>X</div>
    </div>

  )
}

export default NewRemark