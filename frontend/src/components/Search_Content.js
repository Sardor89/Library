import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import ReactPaginate from 'react-paginate'

const Search_Content = () => {
    
    

    const [library, setLibrary] = useState([])

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/')
        .then(res=>{
            // console.log(res)
            setLibrary(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])

    const [filter, setFilter] = useState('')

    const searchText = (event) => {
        setFilter(event.target.value)
    }

    let dataSearch = library.filter(item =>{
        return Object.keys(item).some(key =>
                item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
            )
    })


    const handlePageClick = (data) =>{
        console.log(data.selected)
    }

    const [category, setCategory] = useState([])
    const [categoryId, setCategoryId] = useState([])

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/category/')
        .then(res=>{
            setCategory(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])

    const handleCategoryClick = () => {
        console.log(category)
    }

    return(
        <section className='py-4 container'>
            <div className='row justify-content-center'>

                

                <div className='col-12 mb-3'>
                    <div className='mb-3 col-4 mx-auto'>
                        <input 
                            type='text'
                            className='form-control'
                            value={filter}
                            onChange={searchText.bind(this)}
                        />
                    </div>
                </div>
                <div className='col-12 mb-3 d-flex justify-content-center'>
                    
                        <div class="d-grid gap-2 d-md-block">
                            <button class="btn btn-primary mx-2" style={{width:'100px'}} type="button" 
                            onClick={handleCategoryClick}>All</button>
                            <button class="btn btn-primary mx-2" style={{width:'100px'}} type="button">Romance</button>
                            <button class="btn btn-primary mx-2" style={{width:'100px'}} type="button">Thriller</button>
                            <button class="btn btn-primary mx-2" style={{width:'100px'}} type="button">Adventure</button>
                            <button class="btn btn-primary mx-2" style={{width:'100px'}} type="button">History</button>
                        </div>
                    
                </div>

               


                {dataSearch.map((item, index) =>{
                    return(
                        <div key={item.id} className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
                            <div className='card p-0overflow-hidden h-100 shadow'>
                                <img src='https://images.pexels.com/photos/768125/pexels-photo-768125.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' className='card-image-top' />
                                <div className='card-body'>
                                    <h5  className='card-title' style={{'height':'40px'}}>{item.title}</h5>
                                    <p  className='card-text'>{item.description}</p>
                                    <Link to={'/details/'+item.id} type="button" className="btn btn-warning">Details</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}

                
                <ReactPaginate 
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    pageCount={15}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination justify-content-center'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    activeClassName={'active'}
                />

            </div>
        </section>
    )
}

export default Search_Content

