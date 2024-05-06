import React, { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { AiFillAccountBook } from "react-icons/ai";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FcCancel } from "react-icons/fc";
import { RiArrowGoBackLine } from "react-icons/ri";
import { LuMessageSquare } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import { MdOutlineDashboard } from "react-icons/md";
import { FaGalacticSenate } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
// import { SlCalender } from "react-icons/sl";
// import { GrRefresh } from "react-icons/gr";
import "../Sidebar.css"

const DashboardData = () => {
  const [data,setdata]=useState(0)
  useEffect(()=>{
    setdata("first")
  },[])

  const Data =[
    {
      A:<CiUser />,
      B:"Abhay Srivastav",
      C:<MdOutlineDashboard />,
      D:"Electronics",
      E:<FaGalacticSenate />,
      F:"IOT Sensor",
      G:<FaCalendarAlt />,
      H:"17/11/2023",
      I:<FaArrowRight />
    },
    {
      A:<CiUser />,
      B:"Abhay Srivastav",
      C:<MdOutlineDashboard />,
      D:"Electronics",
      E:<FaGalacticSenate />,
      F:"IOT Sensor",
      G:<FaCalendarAlt />,
      H:"17/11/2023",
      I:<FaArrowRight />
    },
    {
      A:<CiUser />,
      B:"Abhay Srivastav",
      C:<MdOutlineDashboard />,
      D:"Electronics",
      E:<FaGalacticSenate />,
      F:"IOT Sensor",
      G:<FaCalendarAlt />,
      H:"17/11/2023",
      I:<FaArrowRight />
    },
    {
      A:<CiUser />,
      B:"Abhay Srivastav",
      C:<MdOutlineDashboard />,
      D:"Electronics",
      E:<FaGalacticSenate />,
      F:"IOT Sensor",
      G:<FaCalendarAlt />,
      H:"17/11/2023",
      I:<FaArrowRight />
    },
    {
      A:<CiUser />,
      B:"Abhay Srivastav",
      C:<MdOutlineDashboard />,
      D:"Electronics",
      E:<FaGalacticSenate />,
      F:"IOT Sensor",
      G:<FaCalendarAlt />,
      H:"17/11/2023",
      I:<FaArrowRight />
    },
    {
      A:<CiUser />,
      B:"Abhay Srivastav",
      C:<MdOutlineDashboard />,
      D:"Electronics",
      E:<FaGalacticSenate />,
      F:"IOT Sensor",
      G:<FaCalendarAlt />,
      H:"17/11/2023",
      I:<FaArrowRight />
    },
    {
      A:<CiUser />,
      B:"Abhay Srivastav",
      C:<MdOutlineDashboard />,
      D:"Electronics",
      E:<FaGalacticSenate />,
      F:"IOT Sensor",
      G:<FaCalendarAlt />,
      H:"17/11/2023",
      I:<FaArrowRight />
    },
    {
      A:<CiUser />,
      B:"Abhay Srivastav",
      C:<MdOutlineDashboard />,
      D:"Electronics",
      E:<FaGalacticSenate />,
      F:"IOT Sensor",
      G:<FaCalendarAlt />,
      H:"17/11/2023",
      I:<FaArrowRight />
    },
    {
      A:<CiUser />,
      B:"Abhay Srivastav",
      C:<MdOutlineDashboard />,
      D:"Electronics",
      E:<FaGalacticSenate />,
      F:"IOT Sensor",
      G:<FaCalendarAlt />,
      H:"17/11/2023",
      I:<FaArrowRight />
    },
    {
      A:<CiUser />,
      B:"Abhay Srivastav",
      C:<MdOutlineDashboard />,
      D:"Electronics",
      E:<FaGalacticSenate />,
      F:"IOT Sensor",
      G:<FaCalendarAlt />,
      H:"17/11/2023",
      I:<FaArrowRight />
    },
    {
      A:<CiUser />,
      B:"Abhay Srivastav",
      C:<MdOutlineDashboard />,
      D:"Electronics",
      E:<FaGalacticSenate />,
      F:"IOT Sensor",
      G:<FaCalendarAlt />,
      H:"17/11/2023",
      I:<FaArrowRight />
    },
  ]
  return (
    <div>
      <div className="container ps-3">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">

            <div class="card mt-5 me-3">
              <div class="card-body">
                <h5 class="card-title ms-3">Welcome Back</h5>
                <h4 class="card-text mt-2 ms-3">Perfect Engineering</h4>
                <label for="basic-url" class="form-label mt-3 ms-3">
                  Your Profile URL
                </label>
                <div class="input-group mb-3 w-75">
                  <span class="input-group-text ps-3" id="basic-addon3">
                    https://example.com/Perfect_Engneering
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    id="basic-url"
                    aria-describedby="basic-addon3"
                  />
                  <span class="input-group-text">@ copy</span>
                </div>
              </div>
            </div>

            <div class="card mt-5 me-3 ">
              <div class="card-body">
                <div className="  mt-2 ps-3 Order"> 
                  <h6>Orders</h6>
                  <div><FaCalendarAlt /> 17/11/2023</div>
                  to
                  <div><FaCalendarAlt />17/11/2023</div>
                  <button className="btn btn-info py-2 px-3">+Create</button>
                </div>

               
              <div className="Total">
              <div className="d-flex mt-4 gap-2 border px-5 py-3 align-items-center">
                <h1><AiFillAccountBook /></h1> 
                <div>
                  <h4>3456</h4>
                  <h6>Total Orders</h6>
                  </div> 
                  </div>
                  <div className="d-flex mt-4 gap-2 border px-5 py-3 align-items-center" style={{color:"green"}}>
                 <h1> <RiVerifiedBadgeFill /></h1>
                  <div>
                    <h4>3000</h4>
                    <h6>Confirmed</h6>
                  </div>
                  </div>
              </div>

              <div className="d-flex justify-content-evenly mb-5">
              <div className="d-flex mt-4 gap-2 border px-5 py-3 align-items-center" style={{color:"red"}}>
                <h1><FcCancel /></h1> 
                <div>
                  <h4>45</h4>
                  <h6>Cancelled</h6>
                  </div> 
                  </div>
                  <div className="d-flex mt-4 gap-2 border px-5 py-3 align-items-center" style={{color:"rgb(108,180,238)"}}>
                 <h1> <RiArrowGoBackLine /></h1>
                  <div>
                    <h4>3456</h4>
                    <h6>Returned</h6>
                  </div>
                  </div>
              </div>
               

                
              </div>
            </div>

             

          </div>

          <div className="col-12 col-md-6 col-lg-6 mt-5 Jadu ">

            <div className="border p-3">
            <div className="d-flex justify-content-between border-bottom Inbox">
              <div className="d-flex align-items-center mb-3 gap-3">
              <LuMessageSquare />
              <h6>Inbox</h6>

              </div>
              <div className="d-flex gap-3 mb-3 ">
               <div onClick={()=>{setdata("first")}}> <h4>Leads</h4></div>
                <div onClick={()=>{setdata("second")}}><h4>Chats</h4></div>
              </div>
            </div>

            <div style={{display:data==="first"?"block":"none"}}>

            {
              Data.map((jadu)=>{
                return(
            <div className="d-flex justify-content-between border mt-3 p-3">
              <div>{jadu.A}</div>
              <div>{jadu.B}</div>
              <div>
               <div className="d-flex align-items-center">
               {jadu.C}
              {/* <p>{jadu.D}</p> */}
               </div>
              <div className="d-flex align-items-center">
              {jadu.E}
              <p>{jadu.F}</p>
              </div>
              </div>
              <div>{jadu.G} {jadu.H}</div>
              <div>{jadu.I}</div>
            </div>

                )
              })
            }
            </div>
            <div style={{display:data==="second"?"block":"none"}}>

            {
              Data.map((jadu)=>{
                return(
            <div className="d-flex justify-content-between border mt-3 p-3">
              <div>{jadu.A}</div>
              <div>{jadu.B}</div>
              <div>
               <div className="d-flex align-items-center">
               {jadu.C}
              <p>{jadu.D}</p>
               </div>
              <div className="d-flex align-items-center">
              {jadu.E}
              <p>{jadu.F}</p>
              </div>
              </div>
              <div>{jadu.G} {jadu.H}</div>
              <div>{jadu.I}</div>
            </div>

                )
              })
            }
            </div>

          

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardData;
