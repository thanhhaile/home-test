import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import queryString from 'query-string';
// import fetch from '../api/api';

const AppProvider = (props) => {

  const params = queryString.parse(props.location.search);

  const querySearch = params.q;
  const pageSearch = parseInt(params.page);

  const [searchRequest, setSearchRequest] = useState([]);

  const [like, setLike] = useState({});

  const [searchParams, setSearchParams ] = useState({
    searchKey: querySearch,
    page: pageSearch
  })
  
  const contexValue = {
    searchRequest,
    setSearchRequest,
    like,
    setLike,
    searchParams,
    setSearchParams,
  };

  return (
    <AppContext.Provider value={contexValue}>
      {props.children}
    </AppContext.Provider>
  )
};

export default withRouter(AppProvider);