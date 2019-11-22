import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AppContext } from '../../context/AppContext';
import { values } from '../../utils/ObjectToArray';

import styles from './Header.module.css';

const Header = () => {

  const {searchParams, like} = useContext(AppContext);

  return (
    
    <div className={styles.header}>
      <span className={styles.brand}>
        Galler<strong>easy</strong>
      </span>

      <NavLink 
        exact
        activeClassName={styles.isActive} 
        to={`/?q=${searchParams.searchKey}&page=${searchParams.page}`} 
        className={`${styles.option} ${styles.option1}`}
      >
        Search
      </NavLink>

      <NavLink 
        activeClassName={styles.isActive} 
        to='/favorite' 
        className={styles.option}
      >
        Favorite{values(like).length ? `(${values(like).length})` : ''}
      </NavLink>
      
    </div>
  )
};

export default Header;