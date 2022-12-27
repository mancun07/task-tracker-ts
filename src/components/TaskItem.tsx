import React, {Fragment} from 'react'
import { addOnGoingTask, removeTask, saveClickedTask } from '../features/tasks/taskSlice';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { green } from '@mui/material/colors';
import { yellow } from '@mui/material/colors';
import {motion} from 'framer-motion';
import { toggleRemarkState } from '../features/tasks/uiSlice';
import {Task} from '../features/tasks/taskSlice';
import {useAppDispatch } from '../app/hooks';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Zoom';

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const TaskItem: React.FC<{item: Task}> = (props) => {

  const dispatch = useAppDispatch();

  // const remarkIsShown = useAppSelector(state => state.ui.remarkIsShown);

  const addOngoingTaskHandler = () => {
    dispatch(removeTask(props.item.id))  
    dispatch(addOnGoingTask(props.item))
  }

  // const addCompletedTaskHandler = () => {
  //   dispatch(removeTask(props.item.id))  
  //   dispatch(addCompletedTask(props.item))
  // }

  const removeTaskHandler = () => {
    dispatch(removeTask(props.item.id))
  }

  const openRemarkHandler = () => {
    dispatch(toggleRemarkState())
    dispatch(saveClickedTask(props.item))
  }


  return (
    <Fragment>
      <motion.li initial={{x: '-100vw'}} animate={{ x: 0 }}>
          <Tooltip title="При клике на задачу Вы можете оставлять нужные комментарии" TransitionComponent={Fade}  TransitionProps={{ timeout: 600 }}>
            <span onClick={openRemarkHandler}>{props.item.task}</span>
          </Tooltip>
          <IconButton onClick={addOngoingTaskHandler} aria-label="add to shopping cart">
            < ArrowForwardIcon   sx={{ color: yellow[500] }}/>
          </IconButton>
          {/* <IconButton aria-label="delete">
            <CheckIcon onClick={addCompletedTaskHandler}/>
          </IconButton> */}
          {/* <Button variant="contained" onClick={removeTaskHandler}>Уд.</Button> */}
          <IconButton onClick={removeTaskHandler} aria-label="delete">
            <DeleteIcon sx={{ color: green[500] }}/>
          </IconButton>
          {/* <Checkbox {...label} /> */}
          {/* <IconButton onClick={openRemarkHandler} aria-label="delete">
            <AppleIcon  sx={{ color: yellow[500] }}/>
          </IconButton> */}
      </motion.li>
      {/* {remarkIsShown && <NewRemark />} */}
    </Fragment>

  )
}

export default TaskItem