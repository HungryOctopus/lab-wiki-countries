import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';

const axios = require('axios');

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: null,
    };
  }

  componentDidMonunt() {
    this.loadCountries();
  }
  loadCountries() {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        if (!this.state.countries) {
          this.setState(() => {
            return { countries: [...response.data] };
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App ">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-5 ">
              <CountriesList countries={this.state.countries} />
            </div>
            <div className="col-7">
              <Route
                path="/country/:cca3"
                render={(props) => (
                  <CountryDetails {...props} countries={this.state.countries} />
                )}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
