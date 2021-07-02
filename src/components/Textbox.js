import React from 'react';
import PropTypes from 'prop-types';

function Textbox({ value, placeholder = "", onChange }) {
    return (
        <input className="outline-none rounded-md border border-gray-500 dark:border-gray-300 py-2 px-2 appearance-none text-base text-gray-800" 
        type="text" 
        value={value} onChange={onChange} placeholder={placeholder} />
    )
}

Textbox.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
}

export default Textbox;