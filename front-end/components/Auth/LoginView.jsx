import React from 'react';
import loginIcon from './static/LoginIcon.png';
import TextEntry from '../shared/TextEntry.jsx';
import './static/AuthStyles.css'
// Convert to absolute import later

/**
 * @param:
 * @returns: [html div] which spans all allotted space
 */

class LoginView extends React.Component {

  constructor(props) {
    super(props);
    this.loginUsername = '';
    this.loginPassword = '';
  }

  setUsername = (value) => {
    this.loginUsername = value;
    // this.setState({ loginUsername: value });
    console.log("testprop", this.loginUsername);
  }

  setPassword = (value) => {
    this.testProp = value;
    // this.setState({ loginUsername: value });
    console.log("testprop", this.testProp)
  }

  render() {
    return (
      <div>
        <img
          className='login-icon'
          src={loginIcon}
          alt="Login Icon" />
        <h2 className='ctag-text'>CTags</h2>

        <div style={{ height: '10vw' }}></div>

        <div className='login-field'>
          <TextEntry
            className='login-field'
            placeholder={'Username'}
            onChange={this.setUsername}>
          </TextEntry>
        </div>
        <div style={{ height: '5vw' }}></div>
        <div className='login-field'>
          <TextEntry
            className='login-field'
            placeholder={'Password'}
            onChange={this.setPassword}>
          </TextEntry>
        </div>

      </div>
    )

  }

}

export default LoginView;