import React from 'react'


function Contact() {
    return (
        <div className='container' style={{'height':'450px'}}>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Username</label>
                    <input type="text" class="form-control" id="username"/>
                </div>
                <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '100px'}}></textarea>
                    <label for="floatingTextarea2">Comments</label>
                </div>
                <button style={{'margin-top':'10px'}} type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Contact

