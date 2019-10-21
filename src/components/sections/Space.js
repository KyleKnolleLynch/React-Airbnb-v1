import React from 'react';
import { Link } from 'react-router-dom';

const Space = ({ name, price, image }) => {
  return (
    <article className='space-box bg-primary box-shadow'>
      <div className='space-img-container'>
        <div className='space-price'>
          <p>${price}</p>
          <p>per night</p>
        </div>
        <Link to='/spaces/:single' className='btn btn-primary space-btn transition'>
          Features
        </Link>
        <img src={image} alt='space-img' />
      </div>
      <h3 className='text-center text-dark'>{name}</h3>
    </article>
  );
};

export default Space;
