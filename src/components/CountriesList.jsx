import React, { Component } from 'react';
import countries from './../countries.json';
import { Link } from 'react-router-dom';

class CountriesList extends Component {
  constructor() {
    super();
    this.state = {
      list: countries,
    };
  }

  render() {
    return (
      <ul className="CountriesList overflow-scroll list-group">
        {this.state.list.map((country) => (
          <li
            key={country.cca3}
            className="list-group-item list-group-item-action"
          >
            <Link to={`/country/${country.cca3}`}>{country.name.common}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default CountriesList;
