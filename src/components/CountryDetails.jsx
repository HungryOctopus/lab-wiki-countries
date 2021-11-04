import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from './../countries.json';

class CountryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: null,
    };
  }

  componentDidMount() {
    this.loadCountryDetail();
  }

  componentDidUpdate(previousProps) {
    if (previousProps.match.params.cca3 !== this.props.match.params.cca3) {
      this.loadCountryDetail();
    }
  }

  loadCountryDetail() {
    const country = countries.find(
      (element) => this.props.match.params.cca3 === element.cca3
    );
    console.log(country);
    this.setState({ country: country });
  }

  render() {
    return (
      (this.state.country && (
        <div>
          <h1>{this.state.country.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{this.state.country.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {this.state.country.area}km<sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  {this.state.country.borders.length === 0 && (
                    <ul>
                      <li key="island">It's an island</li>
                    </ul>
                  )}

                  <ul>
                    {this.state.country.borders.map((border) => (
                      <li key={border}>
                        <Link to={`/country/${border}`}>{border}</Link>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )) || <h1>Loading...</h1>
    );
  }
}

export default CountryDetails;
