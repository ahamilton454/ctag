import React from 'react';
import MediaLink from './shared/MediaLink.jsx';
import PageHeader from './shared/PageHeader.jsx';
import TextEntry from './shared/TextEntry.jsx';
import BottomModal from './shared/BottomModal.jsx';

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      value: ""
    }
  }

  onTextChange(value) {
    console.log(value);
  }

  render() {
    return (
      <div>
        <PageHeader title="CTag"
          rightButtonText="Login"
          rightButtonCommand={() => { console.log("Logged In") }} />
        <div className="vstack-links">
          <MediaLink link="https://www.google.com" photoURL="https://bit.ly/3vj6yOw" />
          <TextEntry
            placeholder="Username"
            value={this.state.value}
            onChange={this.onTextChange}
          />
        </div>



      </div>
    );
  }
}

export default App;