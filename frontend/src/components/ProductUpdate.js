import React, { useState, useEffect} from 'react';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

const ProductUpdate = () => {
    const [ image, setImage] = useState(null)
    const [ name, setName] = useState("")
    const [ price, setPrice] = useState("")
    const [ description, setDescription] = useState("")
    const [ category, setCategory] = useState("")

    const navigate = useNavigate()
    const { id } = useParams()

    const loadProducts=async()=>{
        const { data } = await axios.get(`http://127.0.0.1:8000/api/product/${id}/`)
        console.log(data);
        setImage(data.image)
        setImage(data.name)
        setImage(data.description)
        setImage(data.price)
        setImage(data.category)
    }
    useEffect(() => {
        loadProducts()
    }, [])
    const UpdateProductInfo = async() =>{
        let formField=new FormData()
        formField.append('name', name)
        formField.append('price', price)
        formField.append('description', description)
        formField.append('category', category)
        if(image !==null){
            formField.append('image', image)
        }
    
        await axios({
            method:'PUT',
            url:`http://127.0.0.1:8000/api/product/${id}/`,
            data:formField
        }).then(response=>{
            console.log(response.data);
            navigate('/')
        })

    }
    return (
        <div>
        <h1>Update product</h1>
        <div className='form-group'>

            <div className='form-group mt-2'>
                    <img src={image} style={{width:'100px', height:'150px'}}/>
                    <p className='text-center'>Select Image to Upload</p>
                    <input 
                        type='file'
                        className='form-control form-control-lg'                          
                        onChange={(e)=>setImage(e.target.files[0])}
                    />
                </div>

                <div className='form-group mt-2'>
                    <input 
                        type='text'
                        className='form-control form-control-lg'
                        placeholder='Enter Product name'
                        name='name'
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                </div>
                <div className='form-group mt-2'>
                    <input 
                        type='text'
                        className='form-control form-control-lg'
                        placeholder='Enter Product Price'
                        name='price'
                        value={price}
                        onChange={(e)=>setPrice(e.target.value)}
                    />
                </div>
                <div className='form-group mt-2'>
                    <textarea 
                        type='text'
                        className='form-control form-control-lg'
                        placeholder='Enter Product Description'
                        name='description'
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                    />
                </div>
                <div className='form-group mt-2'>
                    <input 
                        type='text'
                        className='form-control form-control-lg'
                        placeholder='Enter Product Category'
                        name='category'
                        value={category}
                        onChange={(e)=>setCategory(e.target.value)}
                    />
                </div>
                <button className='btn btn-success' onClick={UpdateProductInfo}>Update Product</button>
            </div>
    </div>
    )
}

export default ProductUpdate
