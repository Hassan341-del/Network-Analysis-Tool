import React, { useState, useEffect } from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Header from './Header/Header'
import Home from './Home/Home'
import Dashboard from './Dashboard/Dashboard'
import Login from './Login/Login'
import Scrapping from './Scrapping/Scrapping'
import Result from './Result/Result'
export default function Container() {
  
const [token, setToken] = useState(null)
const navigate = useNavigate();

useEffect(() => {
  const storedToken = localStorage.getItem('token');
  if (storedToken) {
    setToken(storedToken);
  }
}, []);

const loginHandler = (e) => {
  e.preventDefault()
  fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: 'kminchelle',
      password: '0lelplR',
      expiresInMins: 30,
    })
  })
  .then(res => {
    if (res.ok) {
      return res.json().then(data => {
        localStorage.setItem('token', data.token)
        setToken(data.token)
        navigate('/dashboard')
        return data;
      });
    }
    else {
      throw new Error('Login failed');
    }
  })
  .then(console.log)
  .catch(error => console.error('Error:', error));
}

const logoutHandler = () => {
  localStorage.removeItem('token')
  setToken(null)
  navigate('/login')
}

const scrapping = (e) => {
  e.preventDefault()
  navigate('/results')
}
  return (
    <>
      <Header token={token} logout={logoutHandler} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login login={loginHandler} />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/scrapping' element={<Scrapping scrapping={scrapping} />} />
            <Route path='/results' element={<Result />} />
      </Routes>
    </>
  )
}
