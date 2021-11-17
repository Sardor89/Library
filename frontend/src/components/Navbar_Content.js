import React from 'react';
import {Link} from 'react-router-dom'

function Navbar_Content() {

    return (       
        <div>
             
            <nav className="navbar navbar-expand-lg navbar-light bg-light position-sticky">
                <div className="container">
                    <Link className="navbar-brand" to='/'>Logo</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 font-size-4">
                        <li className="nav-item">
                            <Link className="nav-link active" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/about' >About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/contact' >Contact</Link>
                        </li>
                    </ul>                                       
                        <Link to='/login' className="btn btn-outline-success" type="button">Login</Link>                                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar_Content