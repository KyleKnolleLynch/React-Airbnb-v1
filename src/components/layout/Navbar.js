import React, { useState } from 'react';
import { FaAlignRight } from 'react-icons/fa';
import { FaAirbnb } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar bg-light'>
      <div className='nav-head'>
       
        <h1>
        <span className='nav-icon'>
          <FaAirbnb />{' '}
        </span>
          Resort <span className='text-grey'>Rentals</span>
        </h1>

        <button
          type='button'
          className='btn nav-icon'
          onClick={() => toggleNav()}
        >
          <FaAlignRight />
        </button>
      </div>
      <ul
        className={
          isOpen ? 'nav-links nav-show transition-y' : 'nav-links transition-y'
        }
      >
        <li>
          <h3>
            <Link to='/'>Home</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link to='/rooms'>Rooms</Link>
          </h3>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
