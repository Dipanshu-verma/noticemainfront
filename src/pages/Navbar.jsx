import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({handlelogout, login}) => {
  return (
    <div>  <nav>
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
{
  !login? <div><li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup">Signup</Link>
      </li></div>: <div><button onClick={handlelogout}>Logout</button> <Link to="/noticecreate">Create a Notice</Link></div> 
}
     
      <li>
        <Link to="/my-notices">my-notices</Link>
      </li>

    </ul>
  </nav></div>
  )
}

export default Navbar