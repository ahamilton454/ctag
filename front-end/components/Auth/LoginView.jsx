import React from 'react';
import loginIcon from './static/LoginIcon.png';
import rainbowButton from './static/RainbowButton.png';
import './static/AuthStyles.css'
// Convert to absolute import later

/**
 * @param:
 * @returns: [html div] which spans all allotted space
 */


function RoundedButton(props) {
  return (
    <div className='rectangle'>
      <h1>this is the rectangle</h1>
    </div>
  )
}


class LoginView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img
          className='login-icon'
          src={loginIcon}
          alt="Login Icon" />
        <h2>CTags</h2>
        <img
          src={rainbowButton}
          alt="Login Button" />
        <RoundedButton />

      </div>
    )

  }

}

export default LoginView;