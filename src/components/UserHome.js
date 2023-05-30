import React from 'react'
 
import UsersChart from './UsersChart'
import SideBar from './SideBar'
import '../scss/admindashboard.scss'

function UserHome() {
  return (
    <div className='admindashboard-container'>
        <SideBar/>
        <UsersChart/>
        
    </div>
  )
}

export default   UserHome