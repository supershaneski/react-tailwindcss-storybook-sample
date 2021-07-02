import React from 'react';
import PropTypes from 'prop-types';

function ControlLabel(props) {
    
    const ZaControl = props.control;

    return (
        <div className="flex items-center">
            <div>
                <ZaControl checked={props.checked} onChange={props.onChange}/>
            </div>
            <div className="ml-2">
                <label onClick={props.onChange}>{ props.label }</label>
            </div>
        </div>
    )
}

ControlLabel.propTypes = {
    label: PropTypes.string,
    checked: PropTypes.bool,
    control: PropTypes.func,
    onChange: PropTypes.func,
}

export default ControlLabel;