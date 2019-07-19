import React, { Component } from 'react';
import '../styles/App.css';
import 'typeface-roboto';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Statistics from './Statistics';
import DataTable from './DataTable';
import DataMap from './DataMap';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dogData: []
    };
  }

  async componentWillMount() {
    // Here is a link to the API Documentation: https://dev.socrata.com/
    try {
      const response = await axios.get(
        'https://data.austintexas.gov/resource/h8x4-nvyi.json'
      );

      this.setState({
        dogData: response.data
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { dogData } = this.state;

    return (
      <div className="App">
        <div className="headContainer">
          <Typography className="headText" variant="h2">
            Dangerous Dogs
          </Typography>
        </div>
        <div className="contentContainer">
          <Statistics dogData={dogData} />
          <DataMap dogData={dogData} />
          <DataTable dogData={dogData} />
        </div>
        <div className="footerContainer">
          <Typography className="footerText" variant="h2">
            Footer (WIP)
          </Typography>
        </div>
      </div>
    );
  }
}

export default App;
