import React, { useEffect, useState } from 'react'

const CustomersData = () => {
  const [Data,setData] = useState([])
  const GetApi = ()=>{
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    
    fetch("https://fakestoreapi.com/products/category/women's clothing", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData(result)
        console.log(result)})
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
                <div className='col-12 col-md-4 col-lg-4 p-2'>
                  <div className='card w-100 h-100'>
                  <img src={get.image} alt=''/>
                    <h3 className='card-title'>{get.title}</h3>
                    <h6 className='card-text'>{get.price}</h6>
                    <h4 className='card-text'>{get.category}</h4>
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

export default CustomersData
