import React, { useContext } from 'react';
import { SpacesContext } from '../../../context/spacesContext';
import Title from '../sectionsLayout/Title';
import Spinner from '../../mainLayout/Spinner';
import Space from '../Space';

const FeaturedSpaces = () => {
  const { featuredSpaces, loading } = useContext(SpacesContext);

  return (
    <section className='section-featured container'>
      <Title title='featured spaces' />
      <div className='grid-sections my-3'>
        {loading ? (
          <Spinner />
        ) : (
          featuredSpaces.map(space => <Space key={space.id} space={space} />)
        )}
      </div>
    </section>
  );
};

export default FeaturedSpaces;
