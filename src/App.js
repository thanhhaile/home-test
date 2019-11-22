import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SearchPage from './pages/SearchPage/SearchPage';
import FavoritePage from './pages/FavoritePage/FavoritePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={SearchPage} />
        <Route path='/favorite' component={FavoritePage} />
      </Switch> 
      <Footer />
    </div>
  );
}

export default App;
