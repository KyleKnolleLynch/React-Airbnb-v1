import React from 'react';
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='text-center m-2 large not-found'>
      <h1><span className='text-danger'>Error:</span> 404!</h1>
        <p className="lead">The page you searched for does not exist!</p>
        <p>Return to <Link to='/' className='text-success'>Home</Link></p>
    </div>
  )
}

export default NotFound;