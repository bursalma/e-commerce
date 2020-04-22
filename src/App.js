import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Homepage from './pages/Homepage/Homepage'
import Shop from './pages/Shop/Shop'

function App() {
  return (
    <div>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/shop' component={Shop} />
    </div>
  );
}

export default App;
