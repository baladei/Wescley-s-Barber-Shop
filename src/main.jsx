import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Home from './components/pages/Home'
import { Diary } from './components/pages/Diary'
import { Jobs } from './components/pages/Jobs'
import { Contact } from './components/pages/Contact'
import { Company } from './components/pages/Company'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Container } from './components/layout/Container'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
    <Container customClass='min-height'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/diary' element={<Diary />} />
        <Route path='/company' element={<Company />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </Container>
    <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
