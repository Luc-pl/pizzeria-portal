import React from 'react';
import PropTypes from 'prop-types';
import styles from './TablesBooking.module.scss';

const TablesBooking = props => {
  return (
    <div className={styles.component}>
      <h2>TablesBooking view</h2>
    </div>
  );
};

TablesBooking.propTypes = {
  children: PropTypes.node,
};

export default TablesBooking;