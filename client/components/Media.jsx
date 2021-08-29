import React from 'react';

class Media extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            photoURL: "https://evergreenengineering.com/wp-content/uploads/2019/06/LinkedIn_logo_initials.png"
        }
    }
  
    render() {
        return (
        <div className="media">
            <a href="https://github.com/Joeyryanbridges">
                <img src={this.state.photoURL} height={100} width={100}></img>
            </a>
            <h1>LinkedIn</h1>
        </div>);
    }
    
}

export default Media;