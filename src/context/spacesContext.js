import React, { Component, createContext } from 'react';
import items from '../data';

const SpacesContext = createContext();

class SpacesProvider extends Component {
  state = {
    spaces: [],
    sortedSpaces: [],
    featuredSpaces: [],
    loading: true,
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };

  //  getData

  componentDidMount() {
    //  this.getData;
    let spaces = this.formatData(items);
    let featuredSpaces = spaces.filter(space => space.featured);

    let maxPrice = Math.max(...spaces.map(space => space.price));
    let maxSize = Math.max(...spaces.map(space => space.size));

    this.setState({
      spaces,
      sortedSpaces: spaces,
      featuredSpaces,
      loading: false,
      price: maxPrice,
      maxPrice, 
      maxSize
    });
  }

  formatData = items => {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(img => img.fields.file.url);
      let space = { ...item.fields, images, id };
      return space;
    });
    return tempItems;
  };

  getSpace = slug => {
    let tempSpaces = [...this.state.spaces];
    const space = tempSpaces.find(space => space.slug === slug);
    return space;
  };

  handleChange = e => {
    const type = e.target.type;
    const name = e.target.name;
    const value = e.target.value;
    console.log(type, name, value);
  }

  filterSpaces = () => {
    console.log('hello from filterSpaces');
  }

  render() {
    return (
      <SpacesContext.Provider
        value={{ ...this.state,
           getSpace: this.getSpace,
           handleChange: this.handleChange
          }}
      >
        {this.props.children}
      </SpacesContext.Provider>
    );
  }
}

const SpacesConsumer = SpacesContext.Consumer;

//    Higher order component method   //

// export function withSpacesConsumer(Component) {
//   return function ConsumerWrapper(props) { 
//     return <SpacesConsumer>
//       {value => <Component {...props} context={value} />}
//     </SpacesConsumer>
//   }
// }



export { SpacesProvider, SpacesConsumer, SpacesContext };
