import React, { Component } from 'react';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      login: true
    }
    this.changeLoginState = this.changeLoginState.bind(this);
  }

  changeLoginState() {
    this.setState(prevState => {
      const newState = !prevState.login;
      return { login: newState }
    })
  }

  render() {
    return (
      <div style={{textAlign: 'center', marginTop: 50}}>
        You are {this.state.login ? 'Logged in' : 'Logged out'}
        <br/>
        <button type="button" onClick={this.changeLoginState}>
          {this.state.login ? 'Log Out' : 'Log In'}
        </button>    
      </div>
    )
  }
}

export default Login