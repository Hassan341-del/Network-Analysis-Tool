import React, { useState, useEffect } from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Header from './Header/Header'
import Home from './Home/Home'
import Dashboard from './Dashboard/Dashboard'
import Login from './Login/Login'
import Scrapping from './Scrapping/Scrapping'
import Result from './Result/Result'
import Accounts from './Accounts/Accounts'
import PrivateRoutes from './PrivateRoutes'
export default function Container() {
  
const [token, setToken] = useState(null)
const [disable, setDisable] = useState(0)
const [accountData, setAccountData] = useState(null);
const navigate = useNavigate();

useEffect(() => {
  const storedToken = localStorage.getItem('token');
  if (storedToken) {
    setToken(storedToken);
  }
}, []);

useEffect(() => {
  const accounts = () => {
    fetch('https://dummyjson.com/todos')
    .then(res => res.json())
    .then(data=>setAccountData(data));
  }
  accounts()
}, [])

const loginHandler = (e) => {
  e.preventDefault()
  fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: 'emilys',
      password: 'emilyspass',
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
  setDisable(1)
}

const logoutHandler = () => {
  localStorage.removeItem('token')
  setToken(null)
  navigate('/login')
  setDisable(0)
}

const scrapping = (e) => {
  e.preventDefault()
  navigate('/results')
}

  return (
    <>
      <Header logout={logoutHandler} />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/login' element={ <Login login={loginHandler} disabled={disable} /> } />
          <Route element={ <PrivateRoutes />} >
          <Route path='/dashboard' element={ <Dashboard /> } />
          <Route path='/scrapping' element={ <Scrapping scrapping={scrapping} /> } />
          <Route path='/results' element={ <Result /> } />
          <Route path='/accounts' element={ <Accounts accounts={accountData} /> } />
          </Route>
        </Routes>
    </>
  )
}
