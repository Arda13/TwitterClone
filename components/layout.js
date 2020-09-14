import React from 'react'
import useWindowSize from '../hooks/useWindowSize'

import cn from 'classnames'
import styles from './layout.module.css'
import Sidebar from './col-sidebar'
import Main from './col-main'
import Extra from './col-extra'
import CONSTANT from '../constants'

function Layout({ children }) {
  const size = useWindowSize()

  return (
    <div className={cn(styles.layout)}>
      <Sidebar flat={size.width < CONSTANT.DESKTOP_SIZE}>sidebar</Sidebar>
      <Main> {children}</Main>
      {size.width > CONSTANT.TABLET_SIZE && <Extra>extra</Extra>}
    </div>
  )
}

export default Layout
