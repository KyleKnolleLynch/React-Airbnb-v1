import React, { Component } from 'react';
import defaultImg from '../../images/spaces/room-1.jpg';
import Hero from '../mainLayout/Hero';
import Banner from '../mainLayout/Banner';
import { Link } from 'react-router-dom';
import { SpacesContext } from '../../context/spacesContext';

class SingleSpace extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slug: this.props.match.params.slug,
      defaultImg: ''
    };
  }

  static contextType = SpacesContext;

  componentDidMount() {}

  render() {
    const { getSpace } = this.context;
    const space = getSpace(this.state.slug);

    if (!space) {
      return (
        <div className='container text-center single-space-err'>
          <h2 className='lead'>
            <span className='text-danger'>Error!&nbsp;</span> This space could
            not be found!
          </h2>
          <Link to='/' className='btn btn-primary transition link-err'>
            home
          </Link>
        </div>
      );
    }
    return (
      <div>
        <h1 className='py-2'>hello from single space</h1>
        {space.name}
      </div>
    );
  }
}

export default SingleSpace;
