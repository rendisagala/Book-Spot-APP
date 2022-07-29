import React from "react";

export default function NavigationBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white py-3 ">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#">
            BOOK SPOT
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Books
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Subjects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Authors
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
            <div className="buttons">
              <form role="search" className="row">
                <input
                  className="form-control col"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button type="submit" className="btn btn-outline-dark col">
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
