
import React, { useState } from 'react'
import downArrowIcon from '../assets/down-arrow.png';
import '../styles/SelectDropdown.css';



const SelectDropdown = () => {

    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className='selectdropWrapper cursor position-relative'>
            <span className='openSelect' onClick={()=>setIsOpen(!isOpen)}>All Categories <img src={downArrowIcon} alt="" /></span>
    
            {isOpen === true && (
                <div className='selectdrop'>
                <div className='searchField'>
                    <input type="text" />
                </div>
                <ul className='searchResults'>
                        <li>Milks and Dairies</li>
                        <li>Wines & Drinks</li>
                        <li>Clothing & Beauty</li>
                        <li>Fresh SeaFood</li>
                        <li>Pet Foods & Toys</li>
                        <li>Baking Material</li>
                        <li>Vegetables</li>
                        <li>Fresh Fruits</li>
                        <li>Bread & Juice</li>
                    </ul>
            </div>

            )
            }
            
        </div>
    )
}

export default SelectDropdown;
