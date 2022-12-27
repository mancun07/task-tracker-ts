import React from 'react'
import { useDispatch } from 'react-redux';
import { removeOnGoingTask, saveClickedTask} from '../features/tasks/taskSlice';
import { toggleRemarkState} from '../features/tasks/uiSlice';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { green } from '@mui/material/colors';
import {motion} from 'framer-motion';
import { Task } from '../features/tasks/taskSlice';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Zoom';


const OngoingTaskItem: React.FC<{item: Task}> = (props) => {

    const dispatch = useDispatch();


  const removeTaskHandler = () => {
    dispatch(removeOnGoingTask(props.item.id))  
  }

  const openRemarkHandler = () => {
    dispatch(toggleRemarkState())
    dispatch(saveClickedTask(props.item))
  }

  return (
    <motion.li initial={{y: '-100vh'}} animate={{y: 0}}>
       <Tooltip title="При клике на задачу Вы можете оставлять нужные комментарии" TransitionComponent={Fade}  TransitionProps={{ timeout: 600 }}>
        <span onClick={openRemarkHandler}>{props.item.task}</span>
      </Tooltip>
        <IconButton onClick={removeTaskHandler} aria-label="delete">
            <DeleteIcon sx={{ color: green[500] }}/>
          </IconButton>
    </motion.li>
  )
}

export default OngoingTaskItem