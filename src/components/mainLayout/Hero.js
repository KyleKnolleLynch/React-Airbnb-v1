import React from 'react';

const Hero = ({ children, hero }) => {
  return (
    <header className={hero}>
      <h1>{children}</h1>
    </header>
  );
};

Hero.defaultProps = {
  hero: 'defaultHero'
}

export default Hero;
