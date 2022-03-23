import Main from 'pages/main/Main'
import TestPage from 'pages/test-page/TestPage'
import TestPage2 from 'pages/test-page/TestPage2'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/test' element={<TestPage />} />
          <Route path='/test2' element={<TestPage2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
