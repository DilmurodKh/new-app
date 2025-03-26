import React from 'react'
import { logo } from '../constants'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav class="navbar container d-flex  justify-content-between align-items-center">
        <div className='row d-flex justify-content-around align-items-center w-100' >
            <div class=" col-3">
                <Link class="navbar-brand" href="#" to={'/'}>
                <img src={logo} alt="Logo"  width={100}  className="d-inline-block align-text-top "/>
                </Link>
            </div>
            <div className='col-9  d-flex justify-content-end'> 
                <Link to={'/'} className='text-decoration-none fs-2 text-dark me-3 py-2'>
                    Home
                </Link>
                <Link to={'/register'} className='text-decoration-none fs-2 text-dark me-3 py-2'>
                    Register
                </Link>
                <Link to={'/login'} className='text-decoration-none fs-2 text-dark me-3 py-2'>
                    Login
                </Link>

            </div>
        </div>
    </nav></>
  )
}

export default Navbar