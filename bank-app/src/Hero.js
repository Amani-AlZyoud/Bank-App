import React from 'react'

const Hero = () => {
  return (
    <div>
    <div className="row text-center p-5 shadow-lg" id="hero">
  <h1 className="fw-bold text-dark display-1">
  Welcome to <span className='text-light'>BANKEY</span>
  </h1>
  <div className="col-lg-6 mx-auto">
    <p className="lead mb-4 fs-2 fw-bold">Your trusted financial partner</p>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
      <button type="button"  className="btn btn-lg shadow  px-4 me-sm-3" id="hero-btn">
          JOIN US
      </button>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Hero