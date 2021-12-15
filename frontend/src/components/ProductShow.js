import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import '../style.css'


const ProductShow = (event) => {
    const [products, setProducts] = useState([])
    const { id } = useParams()
    const getproduct = async()=>{
        await axios({
            method:'GET',
            url:'http://127.0.0.1:8000/api/product/',
        }).then(response=>{
            setProducts(response.data)
        })
    }
    useEffect(()=>{
        getproduct()
    }, [])
    const [filter, setFilter] = useState('')
    const searchText = (event) => {
        setFilter(event.target.value)
    }

    let dataSearch = products.filter(item =>{
        return Object.keys(item).some(key =>
            // console.log(item[key]),
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
            )
    })

    return (
        <div className='container'>
            <div className='row justify-content-center'>               

            <div className='col-12 mb-3 mt-3 mb-0 '>
                <div className='mb-3 col-4 mx-auto'>
                    <input 
                        type='text'
                        className='form-control'
                        value={filter}
                        onChange={searchText.bind(this)}
                    />
                </div>
            </div>

            <div className='col-12 mb-3 mb-0 text-center' >
                    
                        <div class="d-grid gap-2 d-md-block">
                            <button class="btn btn-primary mx-2" style={{width:'100px'}} 
                            type="button" >All</button>
                            <button class="btn btn-primary mx-2" style={{width:'100px'}} 
                            type="button">Computer</button>
                            <button class="btn btn-primary mx-2" style={{width:'100px'}} 
                            type="button">Phone</button>
                        </div>
                    
                </div>
                {
                    dataSearch.map((product, index)=>(
                        <div key={index} className='product-info col-11 col-md-6 col-lg-3 mx-0 mb-4'>
                            <div className="card" >
                                <img src={product.image} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">Price: {product.price}$</p>
                                    <p className="card-text">{(product.description).substring(0,70)}<br />
                                    <Link to={`/${product.id}/`}>more</Link> </p>
                                    <Link to={`/${product.id}/`} 
                                    className="btn btn-primary">Details</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductShow
