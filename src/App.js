import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import Homepage from './pages/Homepage/Homepage';
import Shop from './pages/Shop/Shop';
import Sign from './pages/Sign/Sign';
import Header from './components/Header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase';
import { SET_CURRENT_USER } from './redux/user/userActions';

class App extends React.Component {

  unsubscribeFromAuth =  null
  
  componentDidMount() {
    const { SET_CURRENT_USER } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { 
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          SET_CURRENT_USER({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      SET_CURRENT_USER(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
}

const mapDispatchToProps = dispatch => ({
  SET_CURRENT_USER: user => dispatch(SET_CURRENT_USER(user))
});

export default connect(null, mapDispatchToProps)(App);
