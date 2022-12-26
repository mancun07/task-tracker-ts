import React from 'react'
import Card from './UI/Card'
import OngoingTaskItem from './OngoingTaskItem'
import classes from './OngoingTasks.module.css'
import { Task } from '../features/tasks/taskSlice';
import {useAppSelector } from '../app/hooks';
import Badge from '@mui/material/Badge';

const OngoingTasks: React.FC = () => {

    const ongoingTasks = useAppSelector(state => state.tasks.ongoingTasks)

    return (
    <div className={classes.ongoingTasks}>
    <Card>
        <div className={classes[`badge-wrapper`]}>
            <Badge badgeContent={ongoingTasks.length} color="primary">
            </Badge>
        </div>
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