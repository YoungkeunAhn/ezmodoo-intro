import ChargeInfomation from 'pages/charge-infomation/ChargeInfomation'
import Error404 from 'pages/error404/Error404'
import Main from 'pages/main/Main'
import TestPage2 from 'pages/test-page/TestPage2'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  // const location = useLocation()
  // console.log(location)

  return (
    <div>
      <BrowserRouter basename='/ezmodoo_intro'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/charge-infomation' element={<ChargeInfomation />} />
          <Route path='/test2' element={<TestPage2 />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
