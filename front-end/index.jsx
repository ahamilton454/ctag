import React from 'react';
import ReactDOM from 'react-dom';
import Media from './components/Media.jsx';

class App extends React.Component {
  
  render() {
    return (<div><Media></Media></div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));