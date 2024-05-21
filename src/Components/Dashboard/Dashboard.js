import React from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom';
import Result from '../Result/Result'
import Active from '../../Assests/active.webp'
import Blocked from '../../Assests/blocked.webp'
import Total from '../../Assests/accounts.webp'
import Follower from '../../Assests/follower.jpg'
import Following from '../../Assests/following.jpg'
export default function Dashboard() {
  return (
    <>

      {/* ---------- OverView ---------- */}

      <div className='mx-5 mbl-margin'>
        <h2 className='page-title'>Dashboard</h2>
        <h3 style={{marginBottom: '1.5rem'}}>Overview</h3>
        <div className="parent">

        <Link to='/accounts' className='text-dark text-decoration-none'>
          <div className="total-account">
            <div className="d-flex  justify-content-between align-items-center">
              <div className="number">
                <h1>25</h1>
              </div>
              <div className="icon">
                <img src={Total} alt="" />
              </div>
            </div>
            <p>Total Accounts</p>
          </div>
        </Link>

        <Link to='/accounts' className='text-dark text-decoration-none'>
          <div className="active-account mx-4">
            <div className="d-flex  justify-content-between align-items-center">
              <div className="number">
                <h1>25</h1>
              </div>
              <div className="icon">
                <img src={Active} alt="" />
              </div>
            </div>
              <p>Active Accounts</p>
          </div>
        </Link>

        <Link to='/accounts' className='text-dark text-decoration-none'>
          <div className="blocked-account">
            <div className="d-flex  justify-content-between align-items-center">
              <div className="number">
                <h1>25</h1>
              </div>
              <div className="icon">
                <img src={Blocked} alt="" />
              </div>
            </div>
              <p>Blocked Account</p>
          </div>
        </Link>

        </div>
        <div className="parent scrap-data">
          <div className="total-scrap-followers">
            <div className="d-flex  justify-content-between align-items-center">
              <div className="number">
                <h1>25</h1>
              </div>
              <div className="icon">
                <img src={Follower} alt="" />
              </div>
            </div>
              <p>Total Scrapped Followers</p>
          </div>
          <div className="total-scrap-followings mx-4">
            <div className="d-flex  justify-content-between align-items-center">
              <div className="number">
                <h1>25</h1>
              </div>
              <div className="icon">
                <img src={Following} alt="" />
              </div>
            </div>
              <p>Total Scrapped Followings</p>
          </div>
          <div className="g3"></div>
        </div>
      </div>

      {/* ---------- Recently Scrapped Accounts ---------- */}

      <div className="mx-5 mbl-margin">
        <h2 className='recent-scrapp'>Recently Scrapped Accounts</h2>
        <div className="parent  justify-content-between align-items-center">
          <div className="account-name">
            <h4 className='mb-4'>Account Name</h4>
            <p><b><span>Last Scrapped :</span></b> Jan 20, 2024 </p>
            <p><b><span>Followers :</span></b> 5000 </p>
            <p><b><span>Followings :</span></b> 300 </p>
          </div>
          <div className="account-name account-name-2 mx-4">
            <h4 className='mb-4'>Account Name</h4>
            <p><b><span>Last Scrapped :</span></b> Jan 20, 2024 </p>
            <p><b><span>Followers :</span></b> 5000 </p>
            <p><b><span>Followings :</span></b> 300 </p>
          </div>
          <div className="account-name">
            <h4 className='mb-4'>Account Name</h4>
            <p><b><span>Last Scrapped :</span></b> Jan 20, 2024 </p>
            <p><b><span>Followers :</span></b> 5000 </p>
            <p><b><span>Followings :</span></b> 300 </p>
          </div>
        </div>
      </div>
    </>
  )
}
