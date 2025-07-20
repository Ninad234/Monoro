import React from 'react'
import Home from './Home/Home'
import { Routes, Route } from 'react-router-dom'
import Collections from './Collections/Collections'
import Signup from './components/Signup'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/collection' element={<Collections/>}/>
      <Route path='/Signup' element={<Signup/>}/>
    </Routes>
    </>
  )
}

export default App