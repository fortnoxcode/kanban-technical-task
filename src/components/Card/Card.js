import React from 'react';
import CardName from './CardName/CardName'
import MoreButton from './MoreButton/MoreButton'
import CardItem from './CardItem/CardItem'
import CreateItem from './CreateItemButton/CreateItem'
import './styles.css'

export default function Card() {
  return (
    <div className='todoList'>
      <div className='todoList-container'>
        <div className='todoList-header'>
          <CardName cardname='zalupa'/>
          <MoreButton />
        </div>
        <div className='todoList-items-container'>
          <CardItem task='pizdec'/>
        </div>
        <div className='todoList-footer'>
          <CreateItem />
        </div>
      </div>
  </div>);
}
