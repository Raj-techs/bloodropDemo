import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Nav = (props) => {
  console.log(props);
  const navigate = useNavigate()
  return (
    <>
      <div className="nav">
      
        <div className="logo" ><h1>BLOOD BANK</h1></div>
        <div className="opts">
            <ul>
                <Link to='/' style={{color:"white",textDecoration:"none"}}><li>Home</li></Link>
                <li>About</li>
                <li>Services</li>
                <li>Blog</li>
                <li>Blood</li>
            </ul>
        </div>
        <div className="more">
            <ul>
                <h5 style={{marginTop:"34px"}}>{props.data.bankName}</h5>
                <button onClick={_=>navigate('/')}>LogOut</button>
            </ul>
        </div>
      </div>
    </>
  )
}

export default Nav
