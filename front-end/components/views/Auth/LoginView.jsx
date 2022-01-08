import React from 'react';
import loginIcon from './static/LoginIcon.png';
import TextEntry from '../../shared/TextEntry.jsx';
import './static/AuthStyles.css';
import { Link } from 'react-router-dom';
import CustomButton from '../../shared/CustomButton.jsx';

/**
 * @returns: Full screen view of login page
 */

class LoginView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  setUsername = (value) => {
    this.setState({ username: value });
  }

  setPassword = (value) => {
    this.setState({ password: value });
  }

  loginButtonClick = () => {
    console.log(`Attempted login for user ${this.state.username}`);
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

        <CustomButton
          buttonClass='rainbow-button'
          buttonTextClass='large-white'
          buttonText='Login'
          buttonCallback={this.loginButtonClick}>
        </CustomButton>

        <Link to="/signup">
          <h2 style={{ textAlign: 'center', fontFamily: 'var(--theme-font)' }}>
            Create Account</h2>
        </Link>

      </div>
    )

  }

}

export default LoginView;