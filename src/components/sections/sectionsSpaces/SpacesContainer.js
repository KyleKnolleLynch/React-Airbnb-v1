//    Higher order component method   //

// import React from 'react';
// import SpacesFilter from './SpacesFilter';
// import SpacesList from './SpacesList';
// import { withSpacesConsumer } from '../../../context/spacesContext';
// import Spinner from '../../mainLayout/Spinner';

// function SpacesContainer({context}) {
//   const { loading, sortedSpaces, spaces } = context;

//         if(loading) {
//           return <Spinner />
//         }
//         return (
//           <div className='container'>
//             <h1>Hello from SpacesContainer</h1>
//             <SpacesFilter spaces={spaces} />
//             <SpacesList spaces={sortedSpaces} />
//           </div>
//         );
// }

// export default withSpacesConsumer(SpacesContainer);
// ---    ---   ---    ---    //


//    useContext Hook method    //

import React, { useContext } from 'react';
import SpacesFilter from './SpacesFilter';
import SpacesList from './SpacesList';
import { SpacesContext } from '../../../context/spacesContext';
import Spinner from '../../mainLayout/Spinner';

const SpacesContainer = () => {
  const { loading, sortedSpaces } = useContext(SpacesContext);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className='container'>
      <SpacesFilter />
      <SpacesList spaces={sortedSpaces} />
    </div>
  );
};

export default SpacesContainer;
//  ---   ---   ---   ---   //


//    Consumer with callback method    //

// import React from 'react';
// import SpacesFilter from './SpacesFilter';
// import SpacesList from './SpacesList';
// import { SpacesConsumer, SpacesContext } from '../../../context/spacesContext';
// import Spinner from '../../mainLayout/Spinner';

// const SpacesContainer = () => {
//   return (
//     <SpacesConsumer>
//       {value => {
//         const { loading, sortedSpaces, spaces } = value;

//         if(loading) {
//           return <Spinner />
//         }
//         return (
//           <div className='container'>
//             <h1>Hello from SpacesContainer</h1>
//             <SpacesFilter spaces={spaces} />
//             <SpacesList spaces={sortedSpaces} />
//           </div>
//         );
//       }}
//     </SpacesConsumer>
//   );
// };

// export default SpacesContainer;
