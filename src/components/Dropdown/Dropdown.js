import React from 'react';
import DropdownItem from './DropdownItem/DropdownItem.js'
import './dropdown.css';

export default class Dropdown extends React.Component {

  container = React.createRef();

  state = {
    isOpen: false
  };

  btns = ['My account', 'Settings', 'Log out'];

  dropDownClick = () => {
    this.setState(state => {
      return {
        isOpen: !state.isOpen
      };
    });
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
  handleClickOutside = e => {
    if (this.container.current && !this.container.current.contains(e.target)) {
      this.setState({isOpen: false});
    }
  };

  render() {
    return (
      <div className='arrow-dropdown-btn'
           onClick={this.dropDownClick}
           ref={this.container}>
      <img className={this.state.isOpen ? 'arrow-dropdown-img open' : 'arrow-dropdown-img' }
           src='img/arrow.svg'
           alt='arrow dropdown'/>
        {this.state.isOpen && (
        <ul className='arrow-dropdown-btn-menu'>
          {this.btns.map(item => {
            return <DropdownItem buttonText={item} />;
          })}
        </ul>)
      }
    </div>);
  }
}
