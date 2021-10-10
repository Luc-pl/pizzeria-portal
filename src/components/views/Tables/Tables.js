import React from 'react';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const tableContent = [
  {
    hour: '9:00',
    tables: [
      {id: '1', status: 'free', bookingId: null},
      {id: '2', status: 'booked', bookingId: '1'},
      {id: '3', status: 'free', bookingId: null},
      {id: '4', status: 'booked', bookingId: '2'},
    ],
  },
  {
    hour: '9:30',
    tables: [
      {id: '1', status: 'free', bookingId: null},
      {id: '2', status: 'free', bookingId: null},
      {id: '3', status: 'booked', bookingId: '3'},
      {id: '4', status: 'booked', bookingId: '4'},
    ],
  },
  {
    hour: '10:00',
    tables: [
      {id: '1', status: 'free', bookingId: null},
      {id: '2', status: 'free', bookingId: null},
      {id: '3', status: 'free', bookingId: null},
      {id: '4', status: 'booked', bookingId: '5'},
    ],
  },
  {
    hour: '10:30',
    tables: [
      {id: '1', status: 'free', bookingId: null},
      {id: '2', status: 'free', bookingId: null},
      {id: '3', status: 'booked', bookingId: '6'},
      {id: '4', status: 'free', bookingId: null},
    ],
  },
  {
    hour: '11:00',
    tables: [
      {id: '1', status: 'free', bookingId: null},
      {id: '2', status: 'free', bookingId: null},
      {id: '3', status: 'booked', bookingId: '8'},
      {id: '4', status: 'booked', bookingId: '7'},
    ],
  },
  {
    hour: '11:30',
    tables: [
      {id: '1', status: 'free', bookingId: null},
      {id: '2', status: 'free', bookingId: null},
      {id: '3', status: 'free', bookingId: null},
      {id: '4', status: 'booked', bookingId: '9'},
    ],
  },
  {
    hour: '12:00',
    tables: [
      {id: '1', status: 'booked', bookingId: '13'},
      {id: '2', status: 'booked', bookingId: '11'},
      {id: '3', status: 'booked', bookingId: '12'},
      {id: '4', status: 'booked', bookingId: '10'},
    ],
  },
  {
    hour: '12:30',
    tables: [
      {id: '1', status: 'booked', bookingId: '16'},
      {id: '2', status: 'booked', bookingId: '15'},
      {id: '3', status: 'booked', bookingId: '14'},
      {id: '4', status: 'booked', bookingId: '17'},
    ],
  },
  {
    hour: '13:00',
    tables: [
      {id: '1', status: 'booked', bookingId: '18'},
      {id: '2', status: 'booked', bookingId: '19'},
      {id: '3', status: 'event', bookingId: null},
      {id: '4', status: 'booked', bookingId: '20'},
    ],
  },
  {
    hour: '13:30',
    tables: [
      {id: '1', status: 'free', bookingId: null},
      {id: '2', status: 'booked', bookingId: '23'},
      {id: '3', status: 'booked', bookingId: '21'},
      {id: '4', status: 'booked', bookingId: '22'},
    ],
  },
  {
    hour: '14:00',
    tables: [
      {id: '1', status: 'booked', bookingId: '24'},
      {id: '2', status: 'free', bookingId: null},
      {id: '3', status: 'event', bookingId: null},
      {id: '4', status: 'event', bookingId: null},
    ],
  },
];

const renderActions = (status, singleTable) => {
  switch (status) {
    case 'free':
      return (
        <Button component={Link} to={`${process.env.PUBLIC_URL}/table/booking/new`}>Free</Button>
      );
    case 'booked':
      return (
        <Button component={Link} to={`${process.env.PUBLIC_URL}/table/booking/${singleTable.bookingId}`}>Booked</Button>  
      );
    case 'event':
      return (
        <Button component={Link} to={`${process.env.PUBLIC_URL}/table/events/${singleTable.bookingId}`}>Event</Button>
      );
    default:
      return null;
  }
};

const Tables = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Hour</TableCell>
          <TableCell>Table 1</TableCell>
          <TableCell>Table 2</TableCell>
          <TableCell>Table 3</TableCell>
          <TableCell>Table 4</TableCell>
        </TableRow>
      </TableHead>
      <TableBody> 
        {tableContent.map((table) => {
          return (
            <TableRow component='tr' key={table.hour}>
              <TableCell className={styles.hour}>{table.hour}</TableCell> 
              {table.tables.map((singleTable) => {
                return (
                  <TableCell 
                    component='tr'
                    className={styles.link}
                    to={`${process.env.PUBLIC_URL}/table/booking/${singleTable.bookingId}`}
                    key={singleTable.id}>{renderActions(singleTable.status, singleTable)}
                  </TableCell>
                );
              })}    
            </TableRow> 
          );
        })} 
      </TableBody>
    </Table>
  </Paper>
);




/*const Tables = props => {
  return (
    <div className={styles.component}>
      <h2>Tables view</h2>
      <Link to={process.env.PUBLIC_URL + `/tables/booking/new`}>Book table</Link>
      <Link to={process.env.PUBLIC_URL + `/tables/booking/:id`}>Edit booking</Link>
      <Link to={process.env.PUBLIC_URL + `/tables/events/new`}>Add event</Link>
      <Link to={process.env.PUBLIC_URL + `/tables/events/:id`}>Edit event</Link>
    </div>
  );
};

Tables.propTypes = {
  children: PropTypes.node,
};*/

export default Tables;