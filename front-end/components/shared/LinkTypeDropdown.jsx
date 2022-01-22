import React from 'react';

/**
 * @returns: Dropdown for selecting link icon
 */


const LinkTypeDropdownHead = ({ value }) => {

  return (
    <div>
      <h3>{value}</h3>
    </div>
  );

}


class LinkTypeDropdown extends React.Component {


  linkTypeOptions = [
    { type: "Linkedin", color: "lightblue" },
    { type: "GitHub", color: "gray" },
    { type: "Facebook", color: "blue" },
    { type: "Custom", color: "lightgrey" },
  ];


  constructor(props) {
    super(props);
    this.state = {
      selectedLinkType: this.linkTypeOptions[0].type,
      visible: false,
    }
  }

  toggleDropdown = () => {
    console.log(this.state);
    console.log(this.state.visible)
    this.setState({ visible: !this.state.visible });
  }

  renderDropdown() {
    if (this.state.visible) {
      return (
        <div onClick={this.toggleDropdown}>
          {this.linkTypeOptions.map((linkOption) => {
            return (<h1 key={linkOption.type}>{linkOption.type}</h1>);
          })}
        </div>
      )
    } else {
      return (
        <div onClick={this.toggleDropdown}>
          <h1>{this.state.selectedLinkType}</h1>
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