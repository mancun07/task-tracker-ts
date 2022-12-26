import React from 'react'
import Card from './UI/Card'
import OngoingTaskItem from './OngoingTaskItem'
import classes from './OngoingTasks.module.css'
import { Task } from '../features/tasks/taskSlice';
import {useAppSelector } from '../app/hooks';

const OngoingTasks: React.FC = () => {

    const ongoingTasks = useAppSelector(state => state.tasks.ongoingTasks)

    return (
    <div className={classes.ongoingTasks}>
    <Card>
        <h2>Задачи в работе</h2>
        <ul>
            {ongoingTasks && ongoingTasks.map((item: Task) => {
                return <OngoingTaskItem key={item.id} item={item}/>
            })}
        </ul>
        <div className={classes.label}>В работе</div>
    </Card>
    </div>
  )
}

export default OngoingTasks