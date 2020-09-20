import React from 'react';

export default function CardItem(props) {
  return (
    <div className='todoList-item'>
      <div className='todoList-point'>
        {props.task}
      </div>
    </div>
  );
}
