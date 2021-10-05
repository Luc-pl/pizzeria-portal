import React from 'react';
import PropTypes from 'prop-types';
import styles from './TablesEvents.module.scss';

const TablesEvents = props => {
  return (
    <div className={styles.component}>
      <h2>TablesEvents view</h2>
    </div>
  );
};

TablesEvents.propTypes = {
  children: PropTypes.node,
};

export default TablesEvents;