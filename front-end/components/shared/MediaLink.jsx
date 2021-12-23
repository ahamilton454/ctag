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
            <div className="media-link">
                <a href="https://www.google.com">
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png">
                    </img>
                </a>
            </div>);
    }

}

export default MediaLink;


