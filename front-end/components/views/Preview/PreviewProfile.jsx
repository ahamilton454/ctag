import React from 'React';
import PageHeader from '../../shared/PageHeader.jsx';
import MediaLink from '../../shared/MediaLink.jsx';
import TextEntry from '../../shared/TextEntry.jsx';
import LinkTypeDropdown from '../../shared/LinkTypeDropdown.jsx';

class PreviewProfile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ""
    }
  }

  onTextChange(value) {
    console.log(value);
  }

  render() {
    return (
      <div className='preview-profile'>
        <PageHeader title="CTag"
          rightButtonText="Login"
          rightButtonCommand={() => { console.log("Logged In") }} />
        <div className="vstack-links">
          <MediaLink
            link="https://www.google.com"
            photoURL="https://bit.ly/3vj6yOw" />
          <TextEntry
            placeholder="Username"
            value={this.state.value}
            onChange={this.onTextChange}
          />
        </div>
        <LinkTypeDropdown></LinkTypeDropdown>
      </div>
    )
  }
}

export default PreviewProfile