import React from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Header from './Header/Header'
import Home from './Home/Home'
import Dashboard from './Dashboard/Dashboard'
import Login from './Login/Login'
import Scrapping from './Scrapping/Scrapping'
import Result from './Result/Result'
export default function Container() {
  
const navigate = useNavigate();

const loginHandler = (e) => {
  e.preventDefault()
}

const scrapping = (e) => {
  e.preventDefault()
  navigate('/result')
}
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/dashboard' element={ <Dashboard />} />
        <Route path='/login' element={ <Login login={loginHandler} />} />
        <Route path='/scrapping' element={ <Scrapping scrapping={scrapping} />} />
        <Route path='/result' element={ <Result />} />
      </Routes>
    </>
  )
}
