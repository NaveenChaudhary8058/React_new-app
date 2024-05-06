import React from 'react'
import Sidebar from '../Sidebar' 
import InboxData from '../Inbox/InboxData'
import Navbar from '../Navbar'
import '../Sidebar.css'

const Inbox = () => {
  return (
    <div>
      
      <div className='container-fluid'>
        <div className='row'>
            <div className='col-12 col-md-2 col-lg-2 sidebar'>
                <Sidebar/>
            </div>
            <div className='col-12 col-md-10 col-lg-10'>
            <Navbar/>
            <InboxData/>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Inbox
