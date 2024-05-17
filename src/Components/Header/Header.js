import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'

import './Header.css';

export default function Header(props) {
const navigate = useNavigate();
const [token, setToken] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
    setLoading(false);
  }, []);

useEffect(() => {
    if (!token && !loading) {
      navigate('/login');
    }
  }, [token, loading, navigate]);

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
              {props.token ? (
                <>
                  <Link to='/dashboard' className='nav-link'>Dashboard</Link>
                  <Link to='/scrapping' className='nav-link'>Scrapping</Link>
                  <Link to='/login' className='nav-link' onClick={props.logout}>Log Out</Link>

                </>
              ) : (
                <Link to='/login' className='nav-link'>Login</Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
