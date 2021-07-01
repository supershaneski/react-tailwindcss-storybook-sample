import React from 'react';
import PropTypes from 'prop-types';

function Radio(props) {
    return (
        <div className="w-4 flex justify-center items-center">
            <input className="hidden absolute" 
            type="radio" 
            value={props.value} 
            checked={props.checked} 
            onChange={props.onChange}/>
            <div className="w-4 h-4 border-2 border-gray-200 rounded-full flex justify-center items-center">
                <span className="hidden text-blue-500 text-xs">●</span>
            </div>
        </div>
    )
}

Radio.defaultProps = {
    value: "",
    checked: false,
}

Radio.propTypes = {
    value: PropTypes.any,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
}

export default Radio;