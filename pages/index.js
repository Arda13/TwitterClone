import React from 'react'

import CONSTANT from '../constants'
import Layout from '../components/layout'
import useWindowSize from '../hooks/useWindowSize'
import Sidebar from '../components/col-sidebar'
import Main from '../components/col-main'
import Extra from '../components/col-extra'

function HomePage() {
  const size = useWindowSize()
  return (
    <Layout>
      <Sidebar flat={size.width < CONSTANT.DESKTOP_SIZE}>sidebar</Sidebar>
      <Main>main</Main>
      {size.width > CONSTANT.TABLET_SIZE && <Extra>extra</Extra>}
    </Layout>
  )
}

export default HomePage
