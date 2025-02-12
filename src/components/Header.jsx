
import React, { useEffect, useState } from 'react';
import logo from '../assets/logo1.jpg';
import compareIcon from '../assets/compare.png';
import wishlistIcon from '../assets/wishlist.png';
import cartIcon from '../assets/cart.png';
import userIcon from '../assets/user.png';
import SearchIcon from '@mui/icons-material/Search';
import '../styles/Header.css';
import SelectDropdown from './SelectDropdown';
import axios from 'axios';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/PersonOutlined';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import LocationOnIcon from '@mui/icons-material/LocationOnOutlined';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Navbar from './Navbar';


const initialCategories =
  [
    'Baking Material',
    'Bread & Juice',
    'Clothing & Beauty',
    'Fresh Fruits',
    'Fresh SeaFood',
    'Milks and Dairies',
    'Pet Foods & Toys',
    'Vegetables',
    'Wines & Drinks'
  ];

const Header = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const countryList = [];

  useEffect(() => {
    getCountry()
  }, [])

  const getCountry = async () => {
    try {
      let response = await axios.get(`https://restcountries.com/v3.1/all`);
      let cont = response.data;
      cont.map((country, index) => {
        countryList.push(country.name.common);
        // console.log(country.name.common);
      })

    } catch (err) {
      console.log('Error in getting country,', err);
    }
  }

  return (
    <div>
      <header>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-sm-2'>
              <img src={logo} alt="" />
            </div>

            {/* Header Search starts */}
            <div className='col-sm-4 d-flex align-items-center'>
              <div className='headersearch d-flex align-items-center'>
                <SelectDropdown data={categories} placeholder={'All Category'} icon={false} />

                <div className='search'>
                  <input type="text" placeholder='Search for items...' />
                  <SearchIcon className='searchIcon cursor' />
                </div>
              </div>

            </div>
            {/* Header search ends */}

            {/* CountryList */}
            <div className='col-sm-6 d-flex align-items-center'>
              <div className='m1-auto d-flex align-items-center'>
                <div className='countryWrapper'>
                  <SelectDropdown data={countryList} placeholder={'Your Location'} icon={<LocationOnOutlinedIcon style={{ opacity: 'o.5' }} />} />
                </div>

                <ul className='list list-inline mb-0 header-Tabs'>
                  <li className='list-inline-item'>
                    <span>
                      <img src={compareIcon} alt="" />
                      <span className='badge bg-success rounded-circle'>3</span>
                      Compare
                    </span></li>

                  <li className='list-inline-item'>
                    <span>
                      <img src={wishlistIcon} alt="" />
                      <span className='badge bg-success rounded-circle'>3</span>
                      Wishlist
                    </span></li>

                  <li className='list-inline-item'>
                    <span>
                      <img src={cartIcon} alt="" />
                      <span className='badge bg-success rounded-circle'>3</span>
                      Cart
                    </span></li>

                  <ClickAwayListener onClickAway={() => setIsDropdownOpen(false)}>
                  <li className='list-inline-item'>
                    <span onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                      <img src={userIcon} alt="" />
                      Account
                    </span>

                    {isDropdownOpen && (
                      <ul className='dropDownMenu'>
                        <li><Button className='align-items-center'> <PersonIcon /> My Account</Button></li>
                        <li><Button> <LocationOnIcon /> Order Tracking</Button></li>
                        <li><Button> <FavoriteBorderIcon /> My Wishlist</Button></li>
                        <li><Button> <SettingsIcon /> Settings</Button></li>
                        <li><Button> <LogoutIcon /> Sign Out</Button></li>
                      </ul>
                    )}
                  </li>
                  </ClickAwayListener>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </header>

      <Navbar />
    </div>
  )
}

export default Header
