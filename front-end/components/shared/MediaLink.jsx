import React from 'react';
import "./sharedCSS/mediaLink.css"


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
            <div className="media-link">
                <a href="https://www.linkedin.com">
                    <img
                        className="media-image"
                        src="https://cdn-icons-png.flaticon.com/512/174/174857.png">
                    </img>
                </a>
            </div>);
    }

}

export default MediaLink;


