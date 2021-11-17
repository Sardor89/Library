import React from 'react'
import {Link} from 'react-router-dom'


function Login_Content(){
    return(
        <div className='container mt-5 text-center' >
        <form style={{'width':'300px', 'height':'400px', 'margin-left':'400px'}}>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check d-flex justify-content-center">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <div className='d-fle'>
                <button type="submit" className="btn btn-primary" style={{'margin-right':'10px'}}>Submit</button>
                <Link to='/signup' type="submit" className="btn btn-primary">SignUp</Link>
            </div>
        </form>
        </div>
    )
}

export default Login_Content
