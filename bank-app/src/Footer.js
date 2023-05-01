import React from 'react'

const Footer = () => {
  return (
    <><div className="container-fluid " id='footer'> 
    <footer className="py-3 ">
      <ul className="nav justify-content-center fs-5 border-bottom pb-3 mb-3">
      <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="#"
                id="footer-edit"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" id="footer-edit">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" id="footer-edit">
              Cryptocurrency
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" id="footer-edit">
                Accounts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" id="footer-edit">
                About Us
              </a>
            </li>
      </ul>
      <p className="text-center text-body-secondary">© 2023 Company, Inc</p>
    </footer>
  </div>
  </>
  )
}

export default Footer