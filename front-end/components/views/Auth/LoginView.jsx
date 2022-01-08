import React from 'react';
import loginIcon from './static/LoginIcon.png';
import TextEntry from '../../shared/TextEntry.jsx';
import './static/AuthStyles.css';
import { Link } from 'react-router-dom';

/**
 * @returns: Full screen view of login page
 */

class LoginView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loginUsername: '',
      loginPassword: '',
    }
  }

  setUsername = (value) => {
    this.setState({ loginUsername: value });
  }

  setPassword = (value) => {
    this.setState({ loginPassword: value });
  }

  buttonclick = () => {
    console.log(`Attempted login for user ${this.state.loginUsername}`);
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

        <div style={{ height: '10vw' }}></div>

        <Link to="/preview">Preview</Link>

        <CustomButton
          buttonClass='rainbow-button'
          buttonTextClass='large-white'
          buttonText='Login'
          buttonCallback={this.buttonclick}>
        </CustomButton>
        <h2 style={{ textAlign: 'center', fontFamily: 'var(--theme-font)' }}>
          Create Account</h2>

      </div>
    )

  }

}

export default LoginView;