import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss'

export default class Home extends Component {

  static propTypes = {

  };

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="page">
        <div className="section menu"></div>
        <div className="section header"></div>
        <div className="section content"></div>
        <div className="section sign-up"></div>
        <div className="section feature-1"></div>
        <div className="section feature-2"></div>
        <div className="section feature-3"></div>
      </div>
    );
  }

}
