import React from 'react';
import NewListCreateBtn from './NewListCreateBtn/NewListCreateBtn.js'
import Dropdown  from './../Dropdown/Dropdown.js'
import './header.css'

function Header() {
  return <header>
    <div className='left-side-items'>
      <div className='header-menu-btn'>
        <div className='menu-btn'>
          <img src='img/menu.svg' alt='menu button' />
        </div>
      </div>
      <div className='title'>
        <div className='name'>
          Awesome Kanban Board
        </div>
      </div>
    </div>
    <div className='right-side-items'>
      <NewListCreateBtn />
      <div className='user-menu'>
        <div className='user-icon'>
          <img src='img/user.svg' alt='user icon' />
        </div>
        <Dropdown />
      </div>
    </div>
  </header>
}

export default Header
