import React from 'react';
import Login from '../components/Login';

const authenticate = Content =>
  class extends React.Component {
    render() {
      return window.localStorage.getItem('user') ? <Content /> : null;
    }
  };

  export default authenticate;