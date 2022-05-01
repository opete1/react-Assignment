import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
     <nav className="navbar navbar-expand-lg navbar-light bg-primary text-light mb-4 ">
        <div className="container">
            <a className="navbar-brand" href="/">T. H. A S A R E</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page"  href="/signup">Signup</a>
                    <a className='nav-link' href='/'> Home</a>
                    
                    <a className="nav-link" href="/education">Education</a> 
                    <a className="nav-link" href="/contact">Contact</a>
                    <a className="nav-link" href="/hobby">Hobbies</a> 
                </div>  
            </div>
        </div>
    </nav>

  )
}

export default Header