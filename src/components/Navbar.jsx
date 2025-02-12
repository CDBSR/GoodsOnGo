import '../styles/Navbar.css';

import React from 'react'
import Button from '@mui/material/Button';


const Navbar = () => {
  return (
    <div className='navbar d-flex align-items-center'>
      <div className='container-fluid d-flex'>
        <div className='row'>
            <div className='col-sm3 part1'>
                <Button className='bg-g text-w categoryTab'>Browse All Categories</Button>
            </div>

            <div className='col-sm-7 part2'>
                <nav>

                </nav>
            </div>

            <div className='col-sm-2 part3'>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
