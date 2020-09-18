import React from 'react';

function NewListCreateBtn() {
  return (
    <div className='newlist-create-btn'>
      <div className='plus-icon'>
        <img src='img/add.svg' alt='plus icon' />
      </div>
      <span className='newlist-create-btn-text'>Create new list</span>
    </div>
  );
}

export default NewListCreateBtn;
