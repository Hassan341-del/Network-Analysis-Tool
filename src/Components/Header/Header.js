import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
export default function Header() {
  return (
    <>
        <nav className='navbar navbar-expand-lg navbar-light bg-dark'>
            <div className="container-fluid">
                <Link to='/' className='navbar-brand logo'>Network Analysis Tool</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" style={{ borderColor: 'white' }}>
                  <span className="">
                    <i className="fas fa-bars" style={{ color: 'white' }}></i>
                  </span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <Link to='/dashboard' className='nav-link'>Dashboard</Link>
                    <Link to='/login' className='nav-link'>Login</Link>
                    <Link to='/scrapping' className='nav-link'>Scrapping</Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}
