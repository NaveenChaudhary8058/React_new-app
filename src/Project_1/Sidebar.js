import React from "react";
import "./Sidebar.css";
import { MdOutlineDashboard } from "react-icons/md";
import { LuMessageSquare } from "react-icons/lu";
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { IoMdListBox } from "react-icons/io";
import { MdAccountBalanceWallet } from "react-icons/md";
import { GrLineChart } from "react-icons/gr";
import { MdOutlineSubscriptions } from "react-icons/md";

import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div>
      <div className="container-fluid mt-5 bg-warning dashbord h-100">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-12">
            <h1 className="text-center mt-1">LOGO</h1>
            <ul  style={{ listStyle: "none" }}>
              <NavLink to="/" style={{ textDecoration: "none",color:"black" }}>
                <li className="d-flex mt-5 ps-4">
                <h4>  <span className="px-3">
                    <MdOutlineDashboard />
                  </span>
                  Dashboard</h4>
                </li>
              </NavLink>
              <h4 className=" ps-4">
              <NavLink to="/Inbox" style={{ textDecoration: "none",color:"black" }} >
                <li className="d-flex mt-5 ">
                  <span className="px-3">
                    <LuMessageSquare />
                  </span>
                  Inbox
                </li>
              </NavLink>
              </h4>
              <NavLink to="/Products" style={{ textDecoration: "none",color:"black" }}>
                <li className="d-flex mt-5   ps-4">
                  <h4><span className="px-3">
                    <MdProductionQuantityLimits />
                  </span>{" "}
                  Products</h4>
                </li>
              </NavLink>
              <NavLink to="/Customer" style={{ textDecoration: "none",color:"black" }}>
                <li className="d-flex mt-5  ps-4">
                  <h4><span className="px-3">
                    <MdGroups />
                  </span>{" "}
                  Customers</h4>
                </li>
              </NavLink>
              <NavLink to="/Orders" style={{ textDecoration: "none",color:"black" }}>
                <li className="d-flex mt-5  ps-4">
                  <h4><span className="px-3">
                    <IoMdListBox />
                  </span>
                  Orders</h4>
                </li>
              </NavLink>
              <NavLink to="/Accounts" style={{ textDecoration: "none",color:"black" }}>
                <li className="d-flex mt-5  ps-4">
                  <h4><span className="px-3">
                    
                    <MdAccountBalanceWallet />
                  </span>
                  Accounts</h4>
                </li>
              </NavLink>
              <NavLink to="/Reports" style={{ textDecoration: "none",color:"black" }}>
                <li className="d-flex mt-5  ps-4">
                 <h4> <span className="px-3">
                    <GrLineChart />
                  </span>
                  Reports</h4>
                </li>
              </NavLink>
              <NavLink to="/MyPlans" style={{ textDecoration: "none",color:"black" }}>
                <li className="d-flex mt-5 mb-5  ps-4">
                 <h4> <span className="px-3">
                    <MdOutlineSubscriptions />
                  </span>
                  MyPlans</h4>
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>

  
    </div>
  );
};

export default Sidebar;
