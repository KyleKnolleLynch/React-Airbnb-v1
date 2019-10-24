import React from 'react';
import SpacesFilter from './SpacesFilter';
import SpacesList from './SpacesList';
import { SpacesConsumer, SpacesContext } from '../../../context/spacesContext';
import Spinner from '../../mainLayout/Spinner';

const SpacesContainer = () => {
  return (
    <SpacesConsumer>
      {value => {
        

        return (
          <div className='container'>
            <h1>Hello from SpacesContainer</h1>
            <SpacesFilter />
            <SpacesList />
          </div>
        );
      }}
    </SpacesConsumer>
  );
};

export default SpacesContainer;
