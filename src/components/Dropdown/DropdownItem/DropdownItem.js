import React from 'react';
import './dropdownitem.css';

function DropdownItem(props) {
  return (
    <li className='dropdown-menu-item'>{props.buttonText}</li>
  );
}

export default DropdownItem;
