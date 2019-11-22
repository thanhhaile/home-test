import React, { useContext, useState, useEffect, useCallback } from "react";
import classnames from "classnames";
import _ from 'lodash';

import { AppContext } from "../../context/AppContext";
import DisplayList from "../../components/DisplayList/DisplayList";
import fetch from "../../api/api";

import styles from "./SearchPage.module.css";

const resPerPage = 8;

const SearchPage = (props) => {

  const {
    searchRequest,
    setSearchRequest,
    searchParams,
    setSearchParams,
  } = useContext(AppContext);

  const [isLoading, setLoading] = useState(false);
  const [keyQ, setKeyQ] = useState(searchParams.searchKey);

  const fetchData = ( page = 1 ) => {
    let limit = 0;
    if (isNaN(page) || page <= 0 || searchParams.searchKey === '') return; 
    else {
      limit = page*resPerPage;
    }

    setLoading(true);
    fetch(searchParams.searchKey, limit).then(res => {
      setLoading(false);
      setSearchRequest([...res])
    });
  };

  useEffect(() => {
    props.history.push(`${props.match.url}?q=${searchParams.searchKey}&page=${searchParams.page.toString()}`);
    fetchData(searchParams.page);
    console.log('updated');
  }, [searchParams]);

  const handleTyping = _.debounce((e) => {
    console.log('debounce run');
    setSearchParams({
      searchKey: e, 
      page: 1
    });
  }, 1200);

  const handleChange = useCallback(
    (key) => {
    setKeyQ(key);
    handleTyping(key);
  }, []);
  
  return (
    <div className={styles.searchPage}>
      <input
        className={styles.searchField}
        type="search"
        placeholder="Start searching for images!"
        value = {keyQ}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        onKeyPress={e => {
          if (e.key === "Enter") {
            setSearchParams({
              searchKey: e.target.value, 
              page: 1
            });
          }
        }}
      />

      <DisplayList items={searchRequest} />
      <div
        className={classnames(styles.spinnerContainer, {
          [styles.show]: isLoading
        })}
      >
        <div className={styles.spinner} />
      </div>

      <button
        className={classnames('btn btn-primary', {
          [styles.nondisplayLoadmore]: searchRequest.length <= 0
        })}
        onClick={() => {
          setSearchParams({
            ...searchParams, 
            page: searchParams.page +1
          });
        }}
      >
        Fetch More
      </button>
    </div>
  );
};

export default SearchPage;
