import React, { Component, createContext } from 'react';
import items from '../data';

const SpacesContext = createContext();

class SpacesProvider extends Component {
  state = {
    spaces: [],
    sortedSpaces: [],
    featuredSpaces: [],
    loading: true
  };

  //  getData

  componentDidMount() {
    //  this.getData;
    let spaces = this.formatData(items);
    let featuredSpaces = spaces.filter(space => space.featured);

    this.setState({
      spaces,
      sortedSpaces: spaces,
      featuredSpaces,
      loading: false
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

  render() {
    return (
      <SpacesContext.Provider
        value={{ ...this.state, getSpace: this.getSpace }}
      >
        {this.props.children}
      </SpacesContext.Provider>
    );
  }
}

const SpacesConsumer = SpacesContext.Consumer;

export { SpacesProvider, SpacesConsumer, SpacesContext };
