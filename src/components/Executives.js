import React from 'react'
import ExecutivesChart from './ExecutivesChart'
import SideBar from './SideBar'
import '../scss/admindashboard.scss'
import AdminTable from './AdminTable'

function Executives() {
  return (
    <div className='admindashboard-container'>
        <SideBar/>
          <AdminTable/>
        
    </div>
  )
}

export default Executives