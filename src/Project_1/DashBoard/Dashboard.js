import React from 'react'
import Sidebar from '../Sidebar'
import DashboardData from './DashboardData'
import Navbar from '../Navbar'

const Dashboard = () => {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
            <div className='col-12 col-md-2 col-lg-2'>
                <Sidebar/>
            </div>
            <div className='col-12 col-md-10 col-lg-10'>
              <Navbar/>
                <DashboardData/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
