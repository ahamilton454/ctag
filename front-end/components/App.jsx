import React from 'react';
import MediaLink from './shared/MediaLink.jsx';
import PageHeader from './shared/PageHeader.jsx';

class App extends React.Component {

  render() {
    return (
      <div>
        <PageHeader title="CTag"
          rightButtonName="Login"
          rightButtonCommand={() => { console.log("Logged In") }} />
        <MediaLink link="https://www.google.com" photoURL="https://bit.ly/3vj6yOw" />
        <MediaLink link="https://www.google.com" photoURL="https://bit.ly/3vj6yOw" />
      </div>
    );
  }
}

export default App;