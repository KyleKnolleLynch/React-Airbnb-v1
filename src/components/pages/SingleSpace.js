import React, { Component, Fragment } from 'react';
import defaultImg from '../../images/spaces/room-5.jpg';
import Banner from '../mainLayout/Banner';
import StyledHero from '../mainLayout/StyledHero';
import Title from '../sections/sectionsLayout/Title';
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
            back to home
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

    const [mainImg, ...detailsImg] = images;
    return (
      <Fragment>
        <StyledHero hero={mainImg || this.state.defaultImg}>
          <Banner title={`${name} room`}>
            <Link to='/spaces' className='btn btn-primary'>
              back to spaces
            </Link>
          </Banner>
        </StyledHero>
        <section className='container single-space py-1'>
          <div className='grid-sections m-2'>
            {detailsImg.map((img, index) => (
              <img key={index} src={img} alt={name} />
            ))}
          </div>
          <Title title={'amenities'} />
          <div className='grid-2 single-space-info m-2'>
            <article className='single-space-list text-center'>
              <h2 className='lead'>details</h2>
              <h3 className='list-li'>
                sq. ft.:
                <span className='text-primary-dark'> {size}</span>
              </h3>
              <h3 className='list-li'>
                adequetly sleeps:
                <span className='text-primary-dark'> {capacity}</span>
              </h3>
              <h3 className='list-li'>
                price:
                <span className='text-primary-dark'> ${price}</span>
              </h3>
              <h3 className='list-li'>
                pets:
                <span className='text-primary-dark'>
                  {' '}
                  {pets ? 'Allowed' : 'Not Allowed'}
                </span>
              </h3>
              <h3 className='list-li'>
                breakfast:
                <span className='text-primary-dark'>
                  {' '}
                  {breakfast ? 'provided' : 'not provided'}
                </span>
              </h3>
            </article>
            <article className='single-space-desc'>
              <h2 className='lead text-center'>description</h2>
              <p>{description}</p>
            </article>
            <article className='single-space-includes text-center'>
              <h5 className='my-1'>Includes: </h5>
              <ul>
                {extras.map((item, index) => (
                  <li key={index} className='text-primary-dark'>
                    <p> - {item}</p>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default SingleSpace;
