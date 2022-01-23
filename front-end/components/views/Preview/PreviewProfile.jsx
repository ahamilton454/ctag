import React from 'React';
import PageHeader from '../../shared/PageHeader.jsx';
import MediaLink from '../../shared/MediaLink.jsx';
import TextEntry from '../../shared/TextEntry.jsx';
import { Link } from 'react-router-dom';
import "./PreviewProfile.css"

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
        <div className="vstack-links">
          <MediaLink />
          <MediaLink />
          <MediaLink />
          <MediaLink />
          <MediaLink />
        </div>
      </div>
    )
  }
}

export default PreviewProfile