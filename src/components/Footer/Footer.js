import React from 'react';
import './footer.css'

function Footer() {
  return (
    <footer>
      <div className='footer-info'>
        <div className='active-task'>
          Active tasks: <span id='activeTasks'>&#60;N&#62;</span>
        </div>
        <div className='finished-task'>
          Finished tasks: <span id='finishedTasks'>&#60;N&#62;</span>
        </div>
      </div>
      <div className='copyright'>
        Kanban board by &#60;NAME&#62; ,&#60; YEAR&#62;
      </div>
    </footer>
  );
}

export default Footer;
