import React from 'react'
import { Link } from 'react-router-dom'

const Navbar_Content = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">Brand</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">                        
                        <li className="nav-item">
                        <Link className="nav-link" to="/">Products</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/add">Add Products</Link>
                        </li>   
                        <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                        </li>   
                        <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                        </li>                 
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar_Content
