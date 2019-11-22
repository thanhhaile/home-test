import React from 'react';

import styles from './DisplayList.module.css';

import DisplayItem from '../DisplayItem/DisplayItem';

const DisplayList = ({ items }) => {
  return (
    <div className={`${styles.displayList} row`}>
      {
        items.map((item) => {
          return (
            <DisplayItem key={item.id} item={item} />
          );
        })
      }
    </div>
  );
};

export default DisplayList;