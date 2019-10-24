import React, { Fragment } from 'react';
import Hero from '../mainLayout/Hero';
import Banner from '../mainLayout/Banner';
import Title from '../sections/sectionsLayout/Title';
import SpacesContainer from '../sections/sectionsSpaces/SpacesContainer';
import { Link } from 'react-router-dom';

const Spaces = () => {
  return (
    <Fragment>
      <Hero hero={'spacesHero'}>
        <Banner title='our spaces'>
          <Link to='/' className='btn btn-primary'>
            return home
          </Link>
        </Banner>
      </Hero>
      <Title title='search spaces' />
      <SpacesContainer />
    </Fragment>
  );
};

export default Spaces;
