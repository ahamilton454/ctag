import React from 'react';
import loginIcon from './static/LoginIcon.png';
import TextEntry from '../shared/TextEntry.jsx';
import CustomButton from '../shared/CustomButton.jsx';
import './static/AuthStyles.css';
// Convert to absolute import later

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
    console.log("Button Clicked");
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
          buttonCallback={this.buttonclick}>
        </CustomButton>

        <h2 style={{ textAlign: 'center', fontFamily: 'var(--theme-font)' }}>Create Account</h2>

      </div>
    )

  }

}

export default LoginView;