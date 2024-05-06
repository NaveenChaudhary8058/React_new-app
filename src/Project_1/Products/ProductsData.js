import React, { useEffect, useState } from 'react'

const ProductsData = () => {
  const [Data,setData] = useState([])
  const GetApi = ()=>{
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    
    fetch("https://fakestoreapi.com/products?sort=desc", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData(result)
      })
      .catch((error) => console.error(error));
  }
  useEffect(()=>{
    GetApi()
  },[])
  return (
    <div>
      <div className='container'>
        <div className='row'>
          {
            Data?.map((get)=>{
              return(
                <div className='col-12 col-md-4 col-lg-4 p-3'>
                  <div className='card w-100 h-100'>
                    <img style={{width:"100%",height:"40vh"}} src={get.image} alt=''/>
                   <h5 className='card-title'>{get.title}</h5>
                   <h5 className='card-text'>{get.price}</h5>
                   {/* <p className='card-text'>{get.description}</p> */}
                   <h5 className='card-text'>{get.category}</h5>
                   <h5 className='card-text'>{get.rating.rate}</h5>
                   <h5 className='card-text'>{get.rating.count}</h5>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ProductsData
