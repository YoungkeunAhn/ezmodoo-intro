import ChargeInfomation from 'pages/charge-infomation/ChargeInfomation'
import Main from 'pages/main/Main'
import TestPage2 from 'pages/test-page/TestPage2'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/charge-infomation' element={<ChargeInfomation />} />
          <Route path='/test2' element={<TestPage2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
