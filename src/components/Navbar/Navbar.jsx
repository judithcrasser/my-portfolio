import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
        {/* <div className="name">JUDITH CRASSER</div> */}
        <div className="links">
            <Link to='/'>HOME</Link>
            <Link to='/work'>WORK</Link>
            <Link to='/contact'>CONTACT</Link>
        </div>
    </div>
  )
}

export default Navbar