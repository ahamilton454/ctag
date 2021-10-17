import React from 'react';
import './sharedCSS/PageHeader.css'


/**
 * @param: [title] [rightButtonText] [rightButtonCommand] properties where 
 * title is the centered pageheader, rightButtonText is the displayed text
 * on the right button, and rightButtonCommand is an anom function or react
 * component that is invoked onClick of the rightButtonText. the left 
 * text/command function identically.
 * @returns: [html div] which spans all allotted space who's position is fixed
 * @example:
 *          - <PageHeader title="CTag"
 *         rightButtonName="Login"
 *         rightButtonCommand={() => { console.log("Logged In") }} />
 */
const PageHeader = ({ title, rightButtonText, rightButtonCommand,
    leftButtonText, leftButtonCommand }) => {

    return (
        <div className="page-header">
            <h1 onClick={leftButtonCommand}>{leftButtonText}</h1>
            <h1>{title}</h1>
            <h1 onClick={rightButtonCommand}>{rightButtonText}</h1>
        </div>
    );

}

export default PageHeader;