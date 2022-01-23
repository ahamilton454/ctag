import React from 'react';
import './sharedCSS/LinkSelection.css'
import LinkTypeDropdown from './LinkTypeDropdown.jsx';
import TextEntry from './TextEntry.jsx';

/**
 * @returns: View that allows users to update and add links to their profiles
 */


const LinkEntry = ({ linkKey, userLink }) => {
  console.log(`linkKey: ${linkKey}`);
  console.log(`userLink:`);
  console.log(userLink);
  return (
    <div className='linkEntryContainer'>
      <LinkTypeDropdown initialLinkType={userLink.type}></LinkTypeDropdown>
      <TextEntry value={userLink.url}></TextEntry>
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
      },
    };
  }

  getUserLinks = () => {

  }

  render() {
    console.log(this.state);
    return (
      <div>
        {Object.keys(this.state.userLinks).map((key) => {
          return (
            <LinkEntry linkKey={key} userLink={this.state.userLinks[key]}></LinkEntry>
          )
        })}
      </div>
    )
  }
}

export default UserLinks;