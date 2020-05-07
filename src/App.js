import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Homepage from './pages/Homepage/Homepage'
import Shop from './pages/Shop/Shop'
import Sign from './pages/Sign/Sign'
import Header from './components/Header/Header'
import { auth } from './firebase/firebase'

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth =  null
  
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user)
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={ this.state.currentUser }/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route exact path='/signin' component={Sign} />
        </Switch>
      </div>
    );
  }
}

export default App;
