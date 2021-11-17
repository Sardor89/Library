import React from 'react'
import img4 from '../image/img4.jpg'

function About() {
    return (
        <section className='py-4 container'>
            <div className='row justify-content-center d-flex'>

                <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
                    <div className="card">
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">John Doe</h5>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                </div>
                <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
                    <div className="card">
                        <img src = 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">John Doe</h5>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                </div>
                <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
                    <div className="card">
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">John Doe</h5>
                            <p className="card-text">SLorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                </div>
               

            </div>
        </section>
    )
}

export default About
