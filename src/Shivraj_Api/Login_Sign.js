
// import React, { useState } from 'react'
// import { baseUrl } from './Url'

// const Login_Sign = () => {
//   const [email,setEmail]=useState("")
//   const [password,setPassword]=useState("")
//   const Login = async()=>{


//     try{
//     const myHeaders = new Headers()

//     myHeaders.append('Content-Type', 'application/json')
//     const row = JSON.stringify({
//       "email": email,
//       "password": password
//     })
    
//       const requestOptions ={
//         method: "POST",
//         Headers: myHeaders,
//         redirect:"follow",
//         body:row
        
      
//     } 
//     const res = await fetch(
//       `${baseUrl}/learner/register`,requestOptions
//     )
//     const result = await res.json()
//     if(result.status === "001"){
//       setEmail("")
//       setPassword("")
//       console.log("res",result);
//     }else{
//       alert("error occured")
//     }
//   }catch (error) {
      
//     }

//   }
//   return (
//     <div className='m-5 p-5'>
//        <input type='text' className='py-3' value={email} placeholder='Enter Your Name' onChange={(e)=>{setEmail(e.target.value)}} style={{width:"50%"}}/><br/><br/>

//       <input type='password' className='py-3' value={password} placeholder='Enter Your Password' onChange={(e)=>{setPassword(e.target.value)}} style={{width:"50%"}}/><br/><br/>

//       <button type='btn' onClick={()=>{Login()}} className='btn btn-lg px-5 py-3 btn-warning' style={{width:"50%"}}>Log In</button>


//     </div>
//   )
// }

// export default Login_Sign

import React, { useState } from 'react'
import { baseUrl } from './Url'

const Login_Sign= () => {

  const [email, setEmail] = useState("")
  const [pass, setPassword] = useState("")


  const register = async () => {
    try {


    const myHeaders = new Headers()
    myHeaders.append("Content-Type","application/json")
    myHeaders.append("authorizationj",localStorage.getItem("token"))

    const raw = JSON.stringify({
      "email":email ,
      "password":pass
    })

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
        body : raw
      }

      const res = await fetch(
        `${baseUrl}/learner/login`,
        requestOptions
      )
      const result = await res.json()
      if (result?.status==="001") {
        localStorage.setItem("token", result.token)
        // localStorage.removeItem("token")
        console.log(localStorage.getItem("token"))
        
      } else {
          alert("Sherrrrrrrrr")
      }
      console.log(result)
    }

    catch (error) {
      console.log(error);
    }

  }
  return (
    <div>

<input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
<input type='password' value={pass} onChange={(e)=>setPassword(e.target.value)}/>
<button onClick={register}>
  Submit
</button>

    </div>
  )
}

export default Login_Sign
