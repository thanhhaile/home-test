import React, { useContext } from 'react';

import { AppContext } from '../../context/AppContext';

import styles from './DisplayItem.module.css';

const DisplayItem = ({ item }) => {

  const {like, setLike} = useContext(AppContext);

  const toggleLike = (item) => {
    let newLike;

    if(like[item.id]) {
      delete like[item.id];
      newLike = {...like};
    }
    else {
      newLike = {...like, [item.id]: item};
    }
    
    setLike(newLike);
  };

  return (
    <div 
      className={`${styles.displayItem} col-12 col-sm-6 col-md-4 col-lg-3`} 
      onClick={() => {
        toggleLike(item)}}
    >
      <div className={styles.itemContainer} >
        <img 
          className= {styles.displayImg}
          src={item.images.original.url}
          alt={item.title} 
        />
        <span 
          className={`${styles.iconLike} ${like[item.id] ? styles.liked : ''}`}        
        >
          <i className="fa fa-heart"></i>
        </span>
      </div>
    </div>
  );
};

export default DisplayItem;