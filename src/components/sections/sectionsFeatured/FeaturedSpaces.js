import React, { Component } from 'react';
import { SpacesContext } from '../../../context/spacesContext';
import Title from '../sectionsLayout/Title';
import Spinner from '../../mainLayout/Spinner';
import Space from './Space';

class FeaturedSpaces extends Component {
  static contextType = SpacesContext;

  render() {
    let { featuredSpaces, loading } = this.context;
    featuredSpaces = featuredSpaces.map(space => (
      <Space key={space.id} space={space} />
    ));

    return (
      <section className='section-featured container'>
        <Title title='featured spaces' />
        <div className='grid-sections my-3'>
          {loading ? <Spinner /> : featuredSpaces}
        </div>
      </section>
    );
  }
}

export default FeaturedSpaces;
