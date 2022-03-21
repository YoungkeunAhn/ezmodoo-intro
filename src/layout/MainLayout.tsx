import TopMenu from 'components/top-menu/TopMenu'
import React from 'react'

type Props = {
  children: React.ReactNode
}

function MainLayout(props: Props) {
  const { children } = props

  return (
    <div>
      <TopMenu />
      <main>{children}</main>
    </div>
  )
}

export default MainLayout
