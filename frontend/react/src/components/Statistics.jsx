import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import '../styles/Statistics.css';

const Statistics = props => {
  const { dogData } = props;

  const calculateStats = () => {
    const totalRecords = dogData.length;
    let recordedMale = 0;
    let recordedFemale = 0;
    let mostDangerousZip = null;

    const tempCounts = {};
    let currentMax = 0;
    dogData.forEach(record => {
      // Record male/female
      if (record.description_of_dog.match(/\bfemale\b/i)) {
        recordedFemale += 1;
      } else if (record.description_of_dog.match(/\bmale\b/i)) {
        recordedMale += 1;
      }

      // Find most dangerous zip (most incidents)
      if (record.zip_code in tempCounts) {
        tempCounts[record.zip_code] += 1;
      } else {
        tempCounts[record.zip_code] = 1;
      }

      if (tempCounts[record.zip_code] > currentMax) {
        currentMax = tempCounts[record.zip_code];
        mostDangerousZip = record.zip_code;
      }
    });

    return { totalRecords, mostDangerousZip, recordedMale, recordedFemale };
  };

  const generateCards = () => {
    const stats = calculateStats();

    return (
      <Fragment>
        <Grid item xs={6} md={3}>
          <Card>
            <CardContent>
              <p>Total Records</p>
              <p>{stats.totalRecords}</p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card>
            <CardContent>
              <p>Most Dangerous Zip</p>
              <p>{stats.mostDangerousZip}</p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card>
            <CardContent>
              <p>Male Dogs</p>
              <p>{stats.recordedMale}</p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card>
            <CardContent>
              <p>Female Dogs</p>
              <p>{stats.recordedFemale}</p>
            </CardContent>
          </Card>
        </Grid>
      </Fragment>
    );
  };

  return (
    <div className="statsContainer">
      <Grid container justify="center" alignItems="center" spacing={4}>
        {generateCards()}
      </Grid>
    </div>
  );
};

Statistics.propTypes = {
  dogData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Statistics;
