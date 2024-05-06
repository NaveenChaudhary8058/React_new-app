import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdOutlineDashboard } from "react-icons/md";
import { LuMessageSquare } from "react-icons/lu";
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { IoMdListBox } from "react-icons/io";
import { MdAccountBalanceWallet } from "react-icons/md";
import { GrLineChart } from "react-icons/gr";
import { MdOutlineSubscriptions } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";



const Navbar = () => {
  return (
    <div>
      
      <nav class="navbar navbar-expand-lg navbar-light bg-light mt-5">
  <div class="container-fluid py-2">
    <a class="navbar-brand" href="#">    
    <a
        class="btn btn-primary Menu"
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
        aria-controls="offcanvasExample"> Menu</a>
      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
          <ul style={{ listStyle: "none" }}>
            <NavLink to="/" style={{ textDecoration: "none",background:"blue"}}>
              <button className="d-flex mt-5 btn ms-3 ">
                <span className="px-3">
                  <MdOutlineDashboard />
                </span>Dashboard</button>
            </NavLink>

            <NavLink to="/Inbox" style={{ textDecoration: "none" }}>
              <li className="d-flex mt-5">
                <span className="px-3">
                  <LuMessageSquare />
                </span> Inbox</li>
            </NavLink>

            <NavLink to="/Products" style={{ textDecoration: "none" }}>
              <li className="d-flex mt-5">
                <span className="px-3">
                  <MdProductionQuantityLimits />
                </span> Products
              </li>
            </NavLink>

            <NavLink to="/Customer" style={{ textDecoration: "none" }}>
              <li className="d-flex mt-5">
                <span className="px-3">
                  <MdGroups />
                </span>Customers</li>
            </NavLink>

            <NavLink to="/Orders" style={{ textDecoration: "none" }}>
              <li className="d-flex mt-5">
                <span className="px-3">
                  <IoMdListBox />
                </span> Orders </li>
            </NavLink>

            <NavLink to="/Accounts" style={{ textDecoration: "none" }}>
              <li className="d-flex mt-5">
                <span className="px-3">
                  <MdAccountBalanceWallet />
                </span>Accounts</li>
            </NavLink>

            <NavLink to="/Reports" style={{ textDecoration: "none" }}>
              <li className="d-flex mt-5">
                <span className="px-3">
                  <GrLineChart />
                </span>Reports </li>
            </NavLink>

            <NavLink to="/MyPlans" style={{ textDecoration: "none" }}>
              <li className="d-flex mt-5">
                <span className="px-3">
                  <MdOutlineSubscriptions />
                </span>MyPlans</li>
            </NavLink>
          </ul>
        </div>
      </div></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        <button class="btn  ms-4" type="submit">  Quick Actions</button>
        <button class="btn  bg-info  px-2 py-2 ms-3" type="submit"> <IoMdListBox /> + Create Order</button>
        <button class="btn  bg-info  ms-3 px-2 py-2" type="submit">  <MdAccountBalanceWallet />Share Quote</button>
        <button class="btn  bg-info px-2 py-2 ms-3" type="submit"> <MdProductionQuantityLimits />Add Products</button>
        <button class="btn bg-info  px-2 py-2 ms-3" type="submit"> <IoMdListBox /> Create Invoice</button>
        <button className='ms-5 btn btn-info fs-1 py-2 px-3'><IoIosNotificationsOutline /></button>
        <button className='d-flex gap-3 align-items-center ms-5 px-3 btn btn-info justify-content-center'>
        <h4><FaUser /></h4>
        <h6>Perfect Engneering</h6>
        <FaChevronDown />
        </button>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
