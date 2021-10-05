import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import {Link} from 'react-router-dom';

const Waiter = props => {
  return (
    <div className={styles.component}>
      <h2>Waiter view</h2>
      <Link to={process.env.PUBLIC_URL + `/waiter/order/new`}>New Order</Link>
      <Link to={process.env.PUBLIC_URL + `/tables/order/:id`}>Edit order</Link>
    </div>
  );
};

Waiter.propTypes = {
  children: PropTypes.node,
};

export default Waiter;