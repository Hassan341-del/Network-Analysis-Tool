import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import Container from './Components/Container'
export default function App() {
  return (
    <BrowserRouter>
      <Container />
    </BrowserRouter>
  )
}
