import React from 'react'
import Sidebar from '../Sidebar'
import OrdersData from '../Orders/OrdersData'
import Navbar from '../Navbar'
import '../Sidebar.css'
const Orders = () => {
  return (
    <div>
      
      <div className='container-fluid'>
        <div className='row'>
            <div className='col-12 col-md-2 col-lg-2 sidebar'>
                <Sidebar/>
            </div>
            <div className='col-12 col-md-10 col-lg-10'>
                <Navbar/>
                 <OrdersData/>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Orders
