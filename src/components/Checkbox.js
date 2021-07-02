import React from 'react';
import PropTypes from 'prop-types';

function Checkbox(props) {
    const _onChange = typeof props.onChange === "undefined" ? () => { } : props.onChange;
    return (
        <div className="flex-initial w-4 flex justify-center items-center">
            <input className="w-4 h-4 opacity-0 absolute" type="checkbox" 
                checked={props.checked} 
                onChange={_onChange}/>
            <div className="w-4 h-4 border-2 border-gray-200 rounded-md flex justify-center items-center">
                <span className="hidden text-xs font-bold text-white">&#10003;</span>
            </div>
        </div>
    )
}

Checkbox.defaultProps = {
    checked: false,
}

Checkbox.propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func,
}

export default Checkbox;