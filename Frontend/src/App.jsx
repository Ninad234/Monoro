import React from 'react'
import Home from './Home/Home'
import { Routes, Route } from 'react-router-dom'
import Collections from './Collections/Collections'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/collection' element={<Collections/>}/>
    </Routes>
    </>
  )
}

export default App