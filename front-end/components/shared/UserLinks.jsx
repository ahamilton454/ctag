import React from 'react';
import './sharedCSS/LinkSelection.css'
import LinkTypeDropdown from './LinkTypeDropdown.jsx';
import TextEntry from './TextEntry.jsx';

/**
 * @returns: View that allows users to update and add links to their profiles
 */

// 'Type' Refers to the type of a link. e.g. LinkedIn, Snap, Facebook, etc
// 'URL' Refers to the actual URL that the user inputs.
// 'Link' Refers to a { Type, URL } pair


function LinkEntry({ linkKey, userLink, updateLink }) {

  const updateURLWrapper = (value) => {
    updateLink(linkKey, false, value);
  }

  const updateTypeWrapper = (value) => {
    console.log("updateTypeWrapper", value);
    updateLink(linkKey, true, value);
  }

  return (
    <div className='linkEntryContainer'>
      <LinkTypeDropdown initialLinkType={userLink.type} onChange={updateTypeWrapper} testprop={'testpropdata'}></LinkTypeDropdown>
      <TextEntry value={userLink.url} onChange={updateURLWrapper}></TextEntry>
    </div>
  )
}

class UserLinks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userLinks: {
        0: { type: 'Linkedin', url: 'linkedin.com/jameslinkedin' },
        1: { type: 'GitHub', url: 'github.com/hypehub' },
        2: { type: 'Facebook', url: 'meta.com/metaverse' },
        3: { type: 'Custom', url: 'shutthefuckupidontknowdude.gov' },
      }
    };
  }

  // Get all of current user's links and add them to this.state
  getUserLinks = () => {

  };

  updateSingleLink = (linkKey, isTypeChange, value) => {
    const userLinksTemp = { ...this.state.userLinks };
    if (isTypeChange) {
      userLinksTemp[linkKey]['type'] = value;
      this.setState({ userLinks: userLinksTemp })
    } else {
      userLinksTemp[linkKey]['url'] = value
      this.setState({ userLinks: userLinksTemp })
    }
  };

  deleteUserLink = () => {

  };

  addUserlink = () => {

  };

  logUserLinks = () => {
    console.log(this.state);
  }



  render() {
    return (
      <div>
        {Object.keys(this.state.userLinks).map((key) => {
          return (
            <LinkEntry linkKey={key}
              userLink={this.state.userLinks[key]}
              updateLink={this.updateSingleLink}></LinkEntry>
          )
        })}
        <div className='add-link-button'>Add Link</div>
        <button onClick={this.logUserLinks}>Log State</button>
      </div>
    )
  }
}

export default UserLinks;