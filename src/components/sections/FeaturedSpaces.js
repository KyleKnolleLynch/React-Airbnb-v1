import React, { Component } from 'react';
import { SpacesContext } from '../../context/spacesContext';
import Title from './sectionsLayout/Title';
import Spinner from '../mainLayout/Spinner';
import Space from './Space';

class FeaturedSpaces extends Component {
  static contextType = SpacesContext;

  render() {
    const { featuredSpaces, loading } = this.context;
    console.log(featuredSpaces);

    if (loading) {
      return <Spinner />;
    } else {
      return (
        <section className='section-featured container'>
          <Title title='featured spaces' />
          <div className='grid-sections my-2'>
            {featuredSpaces.map(space => (
              <Space key={space.id} name={space.name} price={space.price} image={space.images[0]} />
            ))}
          </div>
        </section>
      );
    }
  }
}

export default FeaturedSpaces;
