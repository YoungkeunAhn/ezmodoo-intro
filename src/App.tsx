import TopMenu from 'components/top-menu/TopMenu'
import { banner } from 'data/top-menu'
import React from 'react'

function App() {
  return (
    <div className='App'>
      <TopMenu />
      <img className='w-full m-auto' src={banner[0].image} alt='' />
      <div className='w-full h-screen'></div>
      <div className='w-full h-screen'></div>
      <div className='w-full h-screen'></div>
      <div className='w-full h-screen'></div>
    </div>
  )
}

export default App
