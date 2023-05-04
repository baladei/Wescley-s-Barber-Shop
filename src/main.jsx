import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Home from './components/pages/Home'
import { Diary } from './components/pages/Diary'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar /> 
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/agendamentos' element={<Diary />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
