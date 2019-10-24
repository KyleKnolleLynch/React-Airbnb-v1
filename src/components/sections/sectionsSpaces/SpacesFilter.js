import React, { useContext } from 'react';
import { SpacesContext } from '../../../context/spacesContext';

const SpacesFilter = () => {
  const {
    handleChange,
    type,
    capacity,
    price,
    maxPrice,
    minPrice,
    maxSize,
    minSize,
    breakfast,
    pets
  } = useContext(SpacesContext);

  return (
    <section className='container space-filter'>
      <form className="filter-form">
        {/* select type */}
          <div className="form-group">
            <label htmlFor="type"> room type</label>
            <select name="type" id="type" value={type} className='form-text' onChange={handleChange}></select>
          </div>
        {/* end select type */}


      </form>
    </section>
  );
};

export default SpacesFilter;
