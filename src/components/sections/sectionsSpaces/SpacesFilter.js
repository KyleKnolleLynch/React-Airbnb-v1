import React, { useContext } from 'react';
import { SpacesContext } from '../../../context/spacesContext';

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const SpacesFilter = () => {
  const {
    spaces,
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

  let types = getUnique(spaces, 'type');

  types = ['all', ...types];

  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let guests = getUnique(spaces, 'capacity');

  guests = guests.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <section className='container space-filter'>
      <form className='filter-form'>
        {/* select type */}
        <div className='form-group my'>
          <label htmlFor='type'>
            <strong>space type</strong>
          </label>
          <select
            name='type'
            id='type'
            value={type}
            className='form-text'
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end select type */}
        {/*guests */}
        <div className='form-group my'>
          <label htmlFor='capacity'>
            <strong>guests</strong>
          </label>
          <select
            name='capacity'
            id='capacity'
            value={capacity}
            className='form-text'
            onChange={handleChange}
          >
            {guests}
          </select>
        </div>
        {/* end guest */}
        {/* price */}
        <div className='form-group my'>
          <label htmlFor='price'>
            <strong>space price ${price}</strong>
          </label>
          <input
            type='range'
            name='price'
            min={minPrice}
            max={maxPrice}
            id='price'
            value={price}
            onChange={handleChange}
          />
        </div>
        {/* end price */}
        {/* size */}
        <div className='form-group my'>
          <label htmlFor='size'><strong>space size</strong></label>
          <div className="size-inputs">
            <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className='size-input' />
            <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className='size-input' />
          </div>
        </div>
        {/* end size */}
        {/*  extras  */}
        <div className="form-group">
          <div className="single-extra">
            <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
            <label htmlFor="breakfast">breakfast</label>
            </div>
            <div className='single-extra'>
            <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/*  end extras  */}
      </form>
    </section>
  );
};

export default SpacesFilter;
