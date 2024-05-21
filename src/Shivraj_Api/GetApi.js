import React, { useEffect, useState } from 'react'
import { baseUrl } from './Url'

const GetApp = () => {
    const[data ,setdata]=useState()

    const callApi =  async() =>{
        // const myHeaders = new Headers()
        try{
        const requestOptions = {
            method : 'GET',
            // Headers:myHeaders ,
            redirect: "follow",

        }

        const res = await fetch(
            `${baseUrl}/learner/get/deposits/data`,
            requestOptions


        )

        const result = await res.json()

        if(result.status === "001"){
            setdata(result?.data)
            console.log("res",result);
        }else{
            alert("error occured")
        }
    }
        catch (error){
            console.log(error);
        }

    }

    useEffect(()=>{
        callApi()
    } , [])
  return (
    <div>

    </div>
  )
}

export default GetApp