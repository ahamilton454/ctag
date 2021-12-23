import React from 'react';
import './sharedCSS/textField.css'


/**
 * @param: [placeholder: string] [value: bound string] [onChange: () => ()] 
 * @returns: [input] which spans all allotted width
 * @example:
 *          - <TextEntry
 *         placeholder="Username"
 *         value={this.state.value}
 *         onChange={this.onTextChange}
 *       />
 */

const TextEntry = ({ placeholder, value, onChange }) => {

  return (
    <div>
      <h3 className="custom-placeholder">{placeholder}</h3>
      <input
        className="custom-text-field"
        value={value}
        onChange={({ target: { value } }) => onChange(value)}>
      </input>
    </div>
  );

}

export default TextEntry;