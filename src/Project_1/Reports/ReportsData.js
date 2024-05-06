import React, { useEffect, useState } from 'react'

const ReportsData = () => {
  const [Data,setData] = useState([])
  const [Data2,setData2] = useState([])

  
  const GetApi = ()=>{
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbl9pZCI6NSwiaWF0IjoxNzEyMzgzMDcyLCJleHAiOjE3NDM5MTkwNzJ9.UP90yQ-6_YxC063fkw0uf-tfcDQSArnYXcD18u6XvPs");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("http://98.70.11.123:7001/api/admin/numbers/half/sangam", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    if(result.status === "001"){
      setData(result.halfSangam.openPanna)
      setData2(result.halfSangam.closePanna)

    }

  })
  .catch((error) => console.error(error));} 
  useEffect(()=>{
    GetApi()
  },[])
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <h1 className='p-3'>OpenPanna</h1>
         
          {
            Data?.map((get,index)=>{
              return(
                <div className='col-4 col-md-2 col-lg-2 p-3'>
                  
                  <button style={{width:"80px",height:"40px",backgroundColor:"green",color:"white"}}>{get.number}</button>
                </div>
              )
            })
          }


         <h1 className='p-3'>ClosePanna</h1>
         
         {
           Data2?.map((get,index)=>{
             return(
               <div className='col-4 col-md-2 col-lg-2 p-3'>
                 
                 <button style={{width:"80px",height:"40px",backgroundColor:"orangered",color:"white"}}>{get.panna}</button>
               </div>
             )
           })
         }
        </div>
      </div>
    </div>
  )
}

export default ReportsData
