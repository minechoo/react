import React from 'react';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
  const active = {color: 'aqua'}
  return (
    <header className={props.type}>
      <h1><NavLink activeStyle={active} exact to='/'>logo</NavLink></h1>

      <ul className='gnb'>
      <li><NavLink activeStyle={{color:'aqua'}} to='/Department'>Department</NavLink></li>
        <li><NavLink activeStyle={active} to='/gallery'>Gallery</NavLink></li>
        <li><NavLink activeStyle={{color:'aqua'}} to='/youtube'>Youtube</NavLink></li>
      </ul>
      {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
      <p className='menu'>
        <FontAwesomeIcon icon={faBars} />
      </p>
    </header>
  )
}

export default Header