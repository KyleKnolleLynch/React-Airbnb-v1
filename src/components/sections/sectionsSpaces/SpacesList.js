import React from 'react';
import Space from '../Space';

const SpacesList = ({ spaces }) => {
  if (spaces.length === 0) {
    return (
      <div className='container text-center'>
        <h2>Sorry, none of our spaces matched your search criteria.</h2>
      </div>
    );
  }
  return (
    <section className='container grid-sections my-3 spaces-list'>
      {spaces.map(space => (
        <Space key={space.id} space={space} />
      ))}
    </section>
  );
};

export default SpacesList;
