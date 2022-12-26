import React from 'react'
import TaskItem from './TaskItem'
import Card from './UI/Card'
import classes from './Tasks.module.css'
import Badge from '@mui/material/Badge';
import {Task} from '../features/tasks/taskSlice';
import {useAppSelector } from '../app/hooks';


const Tasks: React.FC = () => {

  const tasks = useAppSelector(state => state.tasks.tasks)
  // console.log(tasks)

  return (
    <div className={classes.tasks}>
      <Card>
      <div className={classes[`badge-wrapper`]}>
      <Badge badgeContent={tasks.length} color="primary"  > 
      </Badge> 
      </div> 
          <h2>Задачи в работу</h2>
          <ul>
              {tasks && tasks.map((item: Task) => {
                  return <TaskItem key={item.id} item={item}/>
              })}
          </ul>
          <div className={classes.label}>В работу</div>
      </Card>
    </div>


  )
}

export default Tasks