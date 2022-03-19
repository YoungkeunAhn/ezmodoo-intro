import { banner } from 'data/menu'
import React from 'react'

function App() {
  return (
    <div className='App'>
      <div className='text-blue-600'>Hello react with tailwind</div>
      <img src={banner[0].image} alt='' />
    </div>
  )
}

export default App
