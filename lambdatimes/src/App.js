import React, { Component } from 'react';

import authenticate from './authentication/authenticate';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Login from './components/Login';

class App extends Component {
  constructor(){
    super();
    this.state = {
      isLoggedIn: false,
      clickedLogin: false
    }
  }

  componentDidMount(){
    this.setState({
      isLoggedIn: window.localStorage.getItem('user') ? true : false,
      clickedLogin: false
    })
  }
  clickedLogin = () => {
    if(window.localStorage.getItem('user')){
      window.localStorage.setItem('user', '');
      this.setState({
        clickedLogin: false,
        isLoggedIn: false
      })
    }
    else {
      this.setState({
        clickedLogin: true
      })
    }
  }

  render(){
    return (
      <div className="App">
        <TopBar isLoggedIn={this.state.isLoggedIn} clickedLogin={this.clickedLogin} />
        <Header />
        {<ConditionalRender />}
        {this.state.clickedLogin ? <Login /> : null}
      </div>
    );
  }
}

const ConditionalRender = authenticate(Content);

export default App;
