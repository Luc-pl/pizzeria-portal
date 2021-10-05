import React from 'react';
import PropTypes from 'prop-types';
import styles from './WaiterOrder.module.scss';

const WaiterOrder = props => {
  return (
    <div className={styles.component}>
      <h2>WaiterOrder view</h2>
    </div>
  );
};

WaiterOrder.propTypes = {
  children: PropTypes.node,
};

export default WaiterOrder;