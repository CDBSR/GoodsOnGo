
import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import '../styles/SelectDropdown.css';
import ClickAwayListener from '@mui/material/ClickAwayListener';


const SelectDropdown = ({data, placeholder, icon}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedItem, setSelectedItem] = useState(placeholder);
    const [listData, setListData] = useState(data);
    const [listData2, setListData2] = useState(data);

    const openSelect = () => {
        setIsOpen(!isOpen);
    }

    const closeSelect = (index, name) => {
        setSelectedIndex(index);
        setSelectedItem(name);
        setIsOpen(false);
    }

    const filterList = (e) => {
        const word = e?.target?.value.toLowerCase();
        const list = listData2.filter((item) => {
            return item.toLowerCase().includes(word);
        });

        const list2 = list.filter((item, index) => list.indexOf(item) === index);
        console.log(word);
        setListData(list2);
    }

    //console.log(props);

    return (
        <>
            <ClickAwayListener onClickAway={() => setIsOpen(false)}>
                <div className='selectdropWrapper cursor position-relative'>
                {icon}
                    <span className='openSelect' onClick={() => openSelect()}>{selectedItem.length > 13 ? selectedItem.substr(0, 13)+'...' : selectedItem} <KeyboardArrowDownIcon /></span>
                   
                    {isOpen === true && (
                        <div className='selectdrop'>
                            <div className='searchField'>
                                <input type="text" placeholder='Search here...' onChange={filterList} />
                            </div>
                            <ul className='searchResults'>
                                <li onClick={() => closeSelect(0, placeholder)} className={`${selectedIndex === 0 ? 'active' : ''}`}>{placeholder} </li>
                                {
                                    listData?.map((item, index) => {
                                        //console.log(item);
                                        return (
                                            
                                            <li key={index+1} onClick={() => closeSelect(index+1, item)} className={`${selectedIndex === index+1 ? 'active' : ''}`} >{item}</li>
                                        );
                                    })
                                }
                            </ul>
                        </div>

                    )
                    }

                </div>
            </ClickAwayListener>
        </>
    )
}

export default SelectDropdown;
