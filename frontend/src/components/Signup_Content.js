import React from 'react'


function Signup_Content() {
    return (
        <div className='container' style={{'height':'480px', 'width':'400px', marginBottom:'10px'}}>
            <form>
                <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-control" id="first_name" />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="last_name" />                    
                </div>
                <div className="mb-3">
                    <label  className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" aria-describedby="emailHelp" />                    
                </div>
                <div className="mb-3">
                    <label  className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input ml-5" id="exampleCheck1" />
                    <label className="form-check-label align-items-center" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary mb-2">Submit</button>
            </form>
        </div>
    )
}

export default Signup_Content
