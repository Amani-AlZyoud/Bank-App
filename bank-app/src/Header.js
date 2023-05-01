import React from "react";
import logo from "./logo.png";
import { Outlet, Link } from "react-router-dom";
export const Header = () => {
  return (
    <>
<header>
  <div className="row">
    <nav className="navbar navbar-expand-lg" id="nav-edit-color">
      <div className="container-fluid align-items-center">
        <a className="navbar-brand me-0 ms-2" href="#" id="logo">
          <img src={logo} alt="LOGO" width={120} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          id="h-menu"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto fs-5 mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="#"
                id="nav-edit"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" id="nav-edit">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" id="nav-edit">
              Cryptocurrency
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" id="nav-edit">
                Accounts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" id="nav-edit">
                About Us
              </a>
            </li>
          </ul>
          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <input
              type="search"
              className="form-control form-control-dark text-bg-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</header>

<Outlet/>
</>
  );}



export default Header;
