import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PropTypes from 'prop-types';
import '../styles/DataTable.css';

// Trying out react hooks in this component. Seem pretty cool!

const DataTable = props => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const { dogData } = props;
  const useMobileView = useMediaQuery('(max-width:700px)');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const generateTable = () => (
    <Paper className="table">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Dog Description</TableCell>
            <TableCell>State</TableCell>
            <TableCell>Zip</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/*
            It is bad practice to use array indexes as react keys. I'm doing it here just
            for simplicity, so I don't have to generate a unique ID for each record. Since
            no array manipulation is necessary, this should not cause any issues.
          */}
          {dogData
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {row.first_name}
                </TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.description_of_dog}</TableCell>
                <TableCell>{row.location_state}</TableCell>
                <TableCell>{row.zip_code}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={dogData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'Previous Page'
        }}
        nextIconButtonProps={{
          'aria-label': 'Next Page'
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );

  const generateMobileTable = () => (
    <div className="table">
      {dogData
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row, i) => (
          <ExpansionPanel key={i}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{row.address}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className="expansionDetails">
              <div>
                <b>First Name:</b> {row.first_name}
              </div>
              <Divider />
              <div>
                <b>Last Name:</b> {row.last_name}
              </div>
              <Divider />
              <div>
                <b>State:</b> {row.location_state}
              </div>
              <Divider />
              <div>
                <b>Zip:</b> {row.zip_code}
              </div>
              <Divider />
              <div className="expansionDesc">{row.description_of_dog}</div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      <Paper>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={dogData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page'
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page'
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );

  return (
    <div className="tableContainer">
      {useMobileView ? generateMobileTable() : generateTable()}
    </div>
  );
};

DataTable.propTypes = {
  dogData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default DataTable;
