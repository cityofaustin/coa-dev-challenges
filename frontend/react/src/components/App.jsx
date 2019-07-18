import React, { Component } from 'react';
import '../styles/App.css';
import 'typeface-roboto';
import axios from 'axios';
import DataTable from './DataTable';

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
        <div className="App-header">
          <h2>Dangerous Dogs</h2>
        </div>

        <DataTable dogData={dogData} />
      </div>
    );
  }
}

export default App;
