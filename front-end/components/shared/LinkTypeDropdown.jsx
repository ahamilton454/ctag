import React from 'react';
import './sharedCSS/LinkSelection.css'

/**
 * @returns: Pretty dropdown menu for selecting media link icon
 */


const LinkTypeSelection = ({ selection, click }) => {
  return (
    <div className='singleLinkTypeOption'
      onClick={() => { click(selection) }}
      style={{ backgroundColor: selection.color }}>
      {selection.type}
    </div>
  )
}

class LinkTypeDropdown extends React.Component {


  linkTypeOptions = [
    { type: "Linkedin", color: "#0e76a8" },
    { type: "GitHub", color: "#2d333b" },
    { type: "Facebook", color: "#1877f2" },
    { type: "Custom", color: "grey" },
  ];


  constructor(props) {
    super(props);
    this.state = {
      selectedLinkType: this.linkTypeOptions[0],
      visible: false,
    }
  }

  toggleDropdown = () => {
    this.setState({ visible: !this.state.visible });
  }

  updateLinkSelection = (currentLinkOption) => {
    if (this.state.visible) {
      this.setState({ selectedLinkType: currentLinkOption })
      this.toggleDropdown();
    }

  }

  renderDropdown() {
    // Display all dropdown options
    if (this.state.visible) {
      return (
        <div className='dropdownContainer'
          onClick={this.toggleDropdown}>
          {this.linkTypeOptions.map((linkOption) => {
            return (
              <LinkTypeSelection
                key={linkOption.type}
                selection={linkOption}
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
          <LinkTypeSelection selection={this.state.selectedLinkType}
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