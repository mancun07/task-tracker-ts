import React, { Fragment } from 'react'
import classes from './Layout.module.css'

const Layout: React.FC<{children: React.ReactNode}> = (props) => {
  return (
    <Fragment>
        <main className={classes.main}>{props.children}</main>
    </Fragment>
  )
}

export default Layout