import React from 'react';
import loginIcon from './static/LoginIcon.png';
import TextEntry from '../../shared/TextEntry.jsx';
import './static/AuthStyles.css';
import { Link } from 'react-router-dom';
import CustomButton from '../../shared/CustomButton.jsx';

/**
 * @returns: Full screen view of login page
 */

class SignUpView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    }
  }

  setUsername = (value) => {
    this.setState({ username: value });
  }

  setPassword = (value) => {
    this.setState({ email: value });
  }

  setPassword = (value) => {
    this.setState({ password: value });
  }

  signUpButtonClick = () => {
    console.log(`Attempted to create user ${this.state.username}`);
  }

  render() {
    return (
      <div>
        <Link to="/login">
          <h3>Back to Login</h3>
        </Link>

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
            placeholder={'Email'}
            onChange={this.setPassword}>
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

        <Link to="/preview">
          <CustomButton
            buttonClass='rainbow-button'
            buttonTextClass='large-white'
            buttonText='Sign Up'
            buttonCallback={this.signUpButtonClick}>
          </CustomButton>
        </Link>

      </div>
    )

  }

}

export default SignUpView;