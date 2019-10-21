import React from 'react';
import SpinnerGif from '../../images/gifs/spinner.gif';

const Spinner = () => {
  return (
    <div className='text-center text-primary spinner-gif'>
      <h3 className='my-1'>loading spaces...</h3>
      <img src={SpinnerGif} alt="spinner-gif" className='my-1' />
    </div>
  );
};

export default Spinner;
