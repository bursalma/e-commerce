import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Homepage from './pages/Homepage/Homepage'
import Shop from './pages/Shop/Shop'
import Sign from './pages/Sign/Sign'
import Header from './components/Header/Header'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop} />
        <Route exact path='/signin' component={Sign} />
      </Switch>
    </div>
  );
}

export default App;
