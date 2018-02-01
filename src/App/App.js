import React, { Component } from 'react';
import {Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import {history} from '../_helpers';
import {alertActions} from '../_actions';
import {PrivateRoute} from '../_components';
import {HomePage} from '../HomePage';
import {LoginPage} from '../LoginPage';
import {RegisterPage} from '../RegisterPage';
import logo from '../logo.svg';
import './App.css';


class App extends React.Component {

  constructor(props){
    super(props);
    const {dispatch} = this.props;
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    })
  }
  render() {
    const {alert} = this.props;
    return (
      
      <div>
         <div className="jumbotron">
         <img src={logo} className="App-logo" alt="logo" />
         <h3 className="App-title">Welcome to React Redux Login JSON Web Token</h3>
      </div>
        <div className="container">
          <div className="col-sm-12">
            {alert.message && 
              <div className={`alert${alert.type}`}>{alert.message}</div>
              }
              <Router history={history}>
                <div>
                  <PrivateRoute exact path='/' component={HomePage}/>
                  <Route path="/login" component={LoginPage}/>
                  <Route path="/register" component={RegisterPage}/>
                </div>
              </Router>
          </div>
        </div>
      
      </div>
      
    );
  }
}

function mapStateToProps(state){
  const { alert } = state;
  {
    return {
      alert
    }
  }
}

const connectedApp = connect(mapStateToProps)(App);

export {connectedApp as App};
