import React, { useState} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const ProductAdd = () => {
    const [image, setImage] = useState(null)
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")

    const navigate = useNavigate()

    const ProductAdd=async()=>{
        let formField=new FormData()

        formField.append('name', name)
        formField.append('price', price)
        formField.append('description', description)
        formField.append('category', category)
        if(image !==null){
            formField.append('image', image)
        }
        await axios({
            method:'POST',
            url:'http://127.0.0.1:8000/api/product/',
            data:formField
        }).then(response=>{
            console.log(response.data);
            navigate('/')
        })
    }

    return (
        <div className='container'>
        <h1 className='text-center'>Add Product</h1>
        <div className='form-group'>

        <div className='form-group mt-2'>
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
            <button className='btn btn-success' onClick={ProductAdd}>Add Product</button>
        </div>
    </div>
    )
}

export default ProductAdd
