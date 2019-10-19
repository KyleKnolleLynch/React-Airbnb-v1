import React from 'react';

const Title = ({ title }) => {
  return (
    <header className='text-center text-primary section-title my-2 lead'>
      <h3>{title}</h3>
      <div></div>
    </header>
  );
};

export default Title;
