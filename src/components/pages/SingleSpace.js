import React, { Component } from 'react';
import defaultImg from '../../images/spaces/room-5.jpg';
import Banner from '../mainLayout/Banner';
import StyledHero from '../mainLayout/StyledHero';
import { Link } from 'react-router-dom';
import { SpacesContext } from '../../context/spacesContext';

class SingleSpace extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slug: this.props.match.params.slug,
      defaultImg
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
    const {
      name,
      description,
      images,
      size,
      price,
      capacity,
      extras,
      pets,
      breakfast
    } = space;
    return (
      <div>
        <StyledHero hero={images[0] || this.state.defaultImg}>
          <Banner title={`${name} room`}>
            <Link to='/spaces' className='btn btn-primary'>back to spaces</Link>
          </Banner>
        </StyledHero>
      </div>
    );
  }
}

export default SingleSpace;
