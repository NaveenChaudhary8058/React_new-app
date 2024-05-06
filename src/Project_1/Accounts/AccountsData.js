import React, { useEffect, useState } from 'react'

const AccountsData = () => {
  const [Data,setData] = useState([])
  const GetApi = ()=>{
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    
    fetch("https://fakestoreapi.com/products/category/jewelery", requestOptions)
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
                <div className='col-12 col-md-6 col-lg-3 p-2 '>
                  <div className='card h-100 '>
                      <img style={{width:"100%",height:"40vh"}} src={get.image} alt=''/>
                      <h5 className='card-title'>{get.title}</h5>
                      <h6 className='card-text'>{get.price}</h6>
                      <h6 className='card-text'>{get.description}</h6>
                      <h3 className='card-text'>{get.category}</h3>
                      <h6>{get.rating.rate}</h6>
                      <h6>{get.rating.count}</h6>
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

export default AccountsData
