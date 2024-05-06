import React from 'react'
import Sidebar from '../Sidebar'
import AccountsData from '../Accounts/AccountsData'
import Navbar from '../Navbar'
import '../Sidebar.css'

const Accounts = () => {
  return (
    <div>
      

      <div className='container-fluid'>
        <div className='row'>
            <div className='col-12 col-md-2 col-lg-2 sidebar'>
                <Sidebar/>
            </div>
            <div className='col-12 col-md-10 col-lg-10'>
              <Navbar/>
                 <AccountsData/>
            </div>
        </div>

      </div>

    </div>
  )
}

export default Accounts
