import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import { connect } from 'react-redux'
import './App.scss';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" onClick={() => this.props.setName('Alvian Rahman')}/>
          <h2>Welcome to React, {this.props.user.name}</h2>
        </div>
        <p>{JSON.stringify(this.props.user)}</p>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    math: state.mathReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setName (value) {
      dispatch({
        type: 'SET_NAME',
        payload: value
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
