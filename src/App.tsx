import ChargeInfomation from 'pages/charge-infomation/ChargeInfomation'
import Error404 from 'pages/error404/Error404'
import Main from 'pages/main/Main'
import TestPage2 from 'pages/test-page/TestPage2'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/charge-infomation' element={<ChargeInfomation />} />
        <Route path='/test2' element={<TestPage2 />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </div>
  )
}

export default App
