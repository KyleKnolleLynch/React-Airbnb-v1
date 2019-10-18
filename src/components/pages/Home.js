import React, { Fragment } from 'react';
import Hero from '../mainLayout/Hero';
import Banner from '../mainLayout/Banner';
import Services from '../sections/Services';
import FeaturedSpaces from '../sections/FeaturedSpaces';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Fragment>
      <Hero>
        <Banner title='desireable rooms' subtitle='starting at $399'>
          <Link to='/spaces' className='btn btn-primary'>
            our spaces
          </Link>
        </Banner>
      </Hero>
      <Services></Services>
      <FeaturedSpaces></FeaturedSpaces>
    </Fragment>
  );
};

export default Home;
