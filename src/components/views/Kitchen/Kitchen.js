import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Kitchen.module.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const orderContent = [
  {
    id: '1',
    table: 3,
    status: 'ready',
    order: 123,
  },
  {
    id: '2',
    table: 1,
    status: 'not ready',
    order: null,
  },
  {
    id: '3',
    table: 2,
    status: 'ready',
    order: 234,
  },
];

const renderActions = status => {
  switch (status) {
    case 'ready':
      return (
        <FormControlLabel control={<Checkbox checked={true} name="checkedB" />} label="ready" />
      );
    case 'not ready':
      return (
        <FormControlLabel control={<Checkbox checked={false} name="checkedA" />} label="not ready" />
      );
    default:
      return null;
  }
};

const Kitchen = () => {
  return (
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nr</TableCell>
            <TableCell>Table/ Order number</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Order details </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderContent.map(row=> (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                {row.table}
              </TableCell>
              <TableCell>
                {renderActions(row.status)}
              </TableCell>
              <TableCell>
                {row.order}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Kitchen;