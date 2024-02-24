import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Showbooks from './pages/Showbooks'
import Deletebook from './pages/Deletebook'
import Createbook from './pages/Createbook'
import Editbook from './pages/Editbook'
import Login from './pages/Login'
import Register from './pages/Register'
import HeroPage from './pages/HeroPage'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HeroPage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register />} />
      <Route path='/home' element={<Home/>}/>
      <Route path='/books/create' element={<Createbook/>}/>
      <Route path='/books/details/:id' element={<Showbooks/>}/>
      <Route path='/books/edit/:id' element={<Editbook/>}/>
      <Route path='/books/delete/:id' element={<Deletebook/>}/>
    </Routes>
  )
}

export default App
