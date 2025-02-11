
import React from 'react';
import logo from '../assets/logo.jpg';
import searchIcon from '../assets/search.svg';
import '../styles/Header.css';
import SelectDropdown from './SelectDropdown';

const Header = () => {
  return (
    <div>
      <header>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-sm-2'>
              <img src={logo} alt="" />
            </div>

            {/* Header Search */}
            <div className='col-sm-5'>
              <div className='headersearch d-flex align-items-center'>
              <SelectDropdown />
              
                <div className='search'>
                  <input type="text" placeholder='Search for items...' />
                  <span className='searchIcon cursor'> <img src={searchIcon} alt="" />
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
