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
    <nav className='navbar bg-light'>
      <div className='nav-main'>
        <div className='nav-head'>
          <Link to='/' className='btn transition'>
            <h1>
              <FaAirbnb className='nav-icon' /> Resort{' '}
              <span className='text-grey'>Rentals</span>
            </h1>
          </Link>
          <button
            type='button'
            className='btn nav-icon transition'
            onClick={() => toggleNav()}
          >
            <FaAlignRight />
          </button>
        </div>

        <ul
          className={
            isOpen ? 'nav-links nav-show transition' : 'nav-links transition'
          }
        >
          <li>
            <h3>
              <Link to='/' className='transition'>
                Home
              </Link>
            </h3>
          </li>
          <li>
            <h3>
              <Link to='/spaces' className='transition'>
                Spaces
              </Link>
            </h3>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
