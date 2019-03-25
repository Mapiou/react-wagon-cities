import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import City from './city';

class CityList extends Component {
  render() {
    return (
      <ul className="list-group cities">
        {this.props.cities.map(city => <City city={city} key={city.name} />)}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps)(CityList);
