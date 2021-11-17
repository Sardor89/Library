import React, { Component } from 'react'
import img1 from '../image/pexels-thought-catalog-904616 (1).jpg';
import img2 from '../image/like.svg';
import img3 from '../image/dislike.svg';
import img5 from '../image/eye.svg';
import axios from 'axios';
class Details extends Component {
    constructor(props){
        super(props);
        this.state={
            obj:{},
        }
    }
    getBooksById=()=>{
        axios.get('http://127.0.0.1:8000/api/'+document.location.pathname.split('/')[2]).then(res=>{
            this.setState({
                obj:res.data,
            })
        }).catch(err=>{
            console.log('error');
        })
    }
    componentDidMount(){
        this.getBooksById()
    }
    render() {
        return (
            <section className='py-2 container'>
                <div className='row justify-content-center d-sm-flex'>
                    <h1 className='text-center'>{this.state.obj.title}</h1> 
                    <div className='col-6 mx-auto d-flex'>
                        <img src = {img1} 
                        className='d-sm-flex '
                        style={{borderRadius:'5px',
                            margin:'10px',                                                       
                        }}/>                         
                    </div>   
                    <div className='col-6'>
                        <div class="card" style={{margin:'10px'}}>
                            <div class="card-body">                                
                                <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
                                <img src = {img2}
                                    className='my-0.5' 
                                    style={{
                                        width:'30px',
                                        height:'30px',
                                        marginLeft:'10px',
                                        cursor:'pointer'
                                    }}
                                />
                                <img src = {img3} 
                                    className='my-1'
                                    style={{
                                        width:'30px',
                                        height:'30px',
                                        marginLeft:'15px',
                                        cursor:'pointer'
                                    }}
                                />
                                <br />
                                <a href="#" className="btn btn-warning my-2">Download</a>
                                <div>
                                    <h4>Do you read this book?</h4>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Yes
                                        </label>
                                        </div>
                                        <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            No
                                        </label>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-warning my-1" style={{width:'100px'}}>Send</a>
                            </div>
                            <div className='d-flex'>
                                <img src={img5} 
                                    className='my-1'
                                    style={{                                        
                                        width:'30px',
                                        height:'30px',
                                        marginLeft:'10px',
                                    }}
                                    disabled='true'
                                />
                                <h6 className='my-2 mx-2'>Necha marta ko'rilgan</h6>
                            </div>
                        </div>
                        
                    </div>         
                </div>
            </section>
        )
    }
}
export default Details