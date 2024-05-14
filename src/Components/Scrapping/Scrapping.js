import React from 'react'
import './Scrapping.css'
export default function Scrapping(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className='col-sm-9 col-md-7 col-lg-5 mx-auto'>
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h1 className='card-title text-center mb-5 fw-bold fs-2'>Scraping Details</h1>
                <form action="" onSubmit={props.scrapping}>
                  <div className="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" name='text' placeholder="" required />
                    <label htmlFor="floatingInput">Account ID *</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="number" class="form-control" id="floatingInput" name='sample' placeholder="" required />
                    <label htmlFor="floatingPassword">Follower Sample Size *</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="number" class="form-control" id="floatingInput" name='threshold' placeholder="" required />
                    <label htmlFor="floatingPassword">Following Threshold Value *</label>
                  </div>
                  <div className="d-grid">
                    <button className='btn btn-primary text-uppercase fw-bold'>Start Scrapping</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
