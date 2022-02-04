import React from 'react';
import './sharedCSS/LinkSelection.css'
import linkTypeColorMapping from './linkTypeColorMapping';

/**
 * @returns: Pretty dropdown menu for selecting media link icon
 */


const LinkTypeSelection = ({ linkTypeSelection, click }) => {
  return (
    <div className='singleLinkTypeOption'
      onClick={() => { click(linkTypeSelection) }}
      style={{ backgroundColor: linkTypeColorMapping[linkTypeSelection] }}>
      {linkTypeSelection}
    </div>
  )
}

class LinkTypeDropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedLinkType: props.initialLinkType || "Linkedin",
      visible: false,
    }
  }

  toggleDropdown = () => {
    this.setState({ visible: !this.state.visible });
  }

  updateLinkSelection = (currentLinkOption) => {
    if (this.state.visible) {
      this.setState({ selectedLinkType: currentLinkOption });
      this.toggleDropdown();
      console.log(this.props.testprop);
      this.props.onChange(currentLinkOption);
    }
  }

  renderDropdown() {
    // Display all dropdown options
    if (this.state.visible) {
      return (
        <div className='dropdownContainer'
          onClick={this.toggleDropdown}>
          {Object.keys(linkTypeColorMapping).map((linkTypeOption) => {
            return (
              <LinkTypeSelection
                key={linkTypeOption}
                linkTypeSelection={linkTypeOption}
                click={this.updateLinkSelection}
              ></LinkTypeSelection>);
          })}
        </div>
      )
      // Display only currently selected option
    } else {
      return (
        <div
          className='dropdownHeaderContainer'
          onClick={this.toggleDropdown}>
          <LinkTypeSelection linkTypeSelection={this.state.selectedLinkType}
            click={() => { }}
          ></LinkTypeSelection>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderDropdown()}
      </div>
    )
  }
}

export default LinkTypeDropdown;