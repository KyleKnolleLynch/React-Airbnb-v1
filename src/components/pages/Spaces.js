import React from 'react';
import Hero from '../mainLayout/Hero';
import Banner from '../mainLayout/Banner';
import { Link } from 'react-router-dom';

const Spaces = () => {
  return (
    <div>
      <Hero hero={'spacesHero'}>
        <Banner title='our spaces'>
          <Link to='/' className='btn btn-primary'>
            return home
          </Link>
        </Banner>
      </Hero>
    </div>
  );
};

export default Spaces;
