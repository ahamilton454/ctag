import React from 'react';
import ReactDOM from 'react-dom';
import MediaLink from './components/shared/MediaLink.jsx';

// Move to app.jsx
class App extends React.Component {

  render() {
    return (<MediaLink link="https://www.google.com" photoURL="https://bit.ly/3vj6yOw" />);
  }
}


ReactDOM.render(<App />, document.getElementById('app'));