import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom';

import img1 from '../image/eye-solid.svg'
import img2 from '../image/heart-regular.svg'

const ProductDetail = () => {
    const [ product, setProduct ] = useState("")

    const { id } = useParams()
    const navigate=useNavigate()
    
    const getSingleProduct=async()=>{
        const { data } = await axios.get(`http://127.0.0.1:8000/api/product/${id}/`)
        console.log(data);
        setProduct(data)     
    }

    useEffect(()=>{
        getSingleProduct()
    },[])

    const deleteProduct = async(id) =>{
        await axios.delete(`http://127.0.0.1:8000/api/product/${id}/`)
        navigate('/')
    }

    var fileDownload = require('js-file-download');
    const handlePDFDownload = () => {
        axios.get('http://127.0.0.1:8000/api/download/', { 
            responseType: 'blob',
        }).then(res => {
            fileDownload(res.data, 'filename.pdf');
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
}

    return (
        <div className='single-product-info'>
            <img src={product.image} />
            <h1>{product.name}</h1>
            <p className="card-text">Price: {product.price}$</p>
            <p className="card-text">{product.description}</p>
            <p className="card-text">{product.category}</p>

            <Link className='btn btn-primary m-2' to={`/${product.id}/update`}>Update</Link>
                <Link className='btn btn-danger m-2' to='/' 
                onClick={()=>deleteProduct(product.id)}>Delete</Link>
            <button className='btn btn-primary' onClick={() => handlePDFDownload()}>
                Download information</button>
                <br />
            <div className='d-flex'>
                <img src={img1} 
                style={{width:'50px', height:'50px', marginLeft:'10px'}} /> 
                <h6 style={{width:'50px', height:'50px', marginLeft:'10px'}} >necha marta ko'rilgan</h6>  
            </div>   
            <div className='d-flex'>
                <img src={img2} 
                style={{width:'50px', height:'50px', marginLeft:'10px'}} /> 
                <h6 style={{width:'50px', height:'50px', marginLeft:'10px'}} >Like</h6>  
            </div>      
        </div>
    )
}

export default ProductDetail
