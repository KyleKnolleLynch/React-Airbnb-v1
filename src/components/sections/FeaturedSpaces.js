import React, { useState } from 'react';
import Title from './sectionsLayout/Title';

const FeaturedSpaces = () => {
  return (
    <section className='section-featured container'>
      <Title title='featured spaces' />
      <div className='grid-sections'></div>
    </section>
  );
};

export default FeaturedSpaces;
