import TopMenu from 'components/top-menu/TopMenu'
import { banner } from 'data/top-menu'
import React from 'react'

function App() {
  return (
    <div className='App'>
      <div className='text-blue-600'>Hello react with tailwind</div>
      <img src={banner[0].image} alt='' />
      <TopMenu />
    </div>
  )
}

export default App
