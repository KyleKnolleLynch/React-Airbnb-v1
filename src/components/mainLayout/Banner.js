import React from 'react';

const Banner = ({ children, title, subtitle }) => {
  return (
    <div className='banner'>
      <h1 className='x-large'>{title}</h1>
      <div></div>
      <p className='lead my-2'>{subtitle}</p>
      {children}
    </div>
  );
};

export default Banner;
