import React from 'react'
import '../scss/notfound.scss'

function NotFound() {
  return (
    <div className='not-found-container'>
        <h1 className='not-found-heading'>Sorry, page not found!</h1>
        <p className='not-found-description'>Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling.</p>
        <img src ="https://i.itworldcanada.com/wp-content/uploads/2021/07/error-repair-animated-feature-696x449.jpg" alt="404"   className="not-found-image"/>
        <button className='not-found-home-btn'>Go To Home</button>
    </div>
  )
}

export default NotFound