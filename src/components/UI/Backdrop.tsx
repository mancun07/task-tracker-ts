import React from 'react'
import classes from './Backdrop.module.css'

const Backdrop: React.FC<{children: React.ReactNode}> = (props) => {
  return (
    <div className={classes.backdrop}>{props.children}</div>
  )
}

export default Backdrop