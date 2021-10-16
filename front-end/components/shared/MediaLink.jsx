import React from 'react';


/**
 * @param: [link] and [photoURL] properties
 * @returns: [html div] which spans all allotted space
 * @example:
 *          - <MediaLink 
 *                  link="https://www.google.com" 
 *                  photoURL="https://bit.ly/3vj6yOw" 
 *            />
 */
class MediaLink extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="media">
                <a href={this.props.link}>
                    <img
                        src={this.props.photoURL}
                        height={"100%"}
                        width={"100%"}>
                    </img>
                </a>
            </div>);
    }

}

export default MediaLink;