import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import defaultImage from '../../images/spaces/room-3.jpg';

const Space = ({ space }) => {
  const { name, slug, images, price } = space;
  return (
    <article className='space-box bg-primary box-shadow'>
      <div className='space-img-container'>
        <img src={images[0] || defaultImage} alt='space-img' />
        <div className='space-price'>
          <p>${price}</p>
          <p>per night</p>
        </div>
        <Link
          to={`/spaces/${slug}`}
          className='btn btn-primary space-btn transition'
        >
          Features
        </Link>
      </div>
      <h3 className='text-center text-dark'>{name}</h3>
    </article>
  );
};

Space.propTypes = {
  space: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};

export default Space;
