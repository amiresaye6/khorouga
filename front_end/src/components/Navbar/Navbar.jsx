import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Khorouga</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
              <a class="nav-link" href="/">About</a>
              <a class="nav-link" href="/">Contact</a>
            </div>
            <div>
            <button type="button" class="btn btn-outline-primary">Login</button>
            <button type="button" class="btn btn-outline-secondary">Signup</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
