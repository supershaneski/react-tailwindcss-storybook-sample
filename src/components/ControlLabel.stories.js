import React from 'react';
import { action } from '@storybook/addon-actions';
import ControlLabel from './ControlLabel';
import Checkbox from './Checkbox';
import Radio from './Radio';

export default {
    component: ControlLabel,
    title: 'ControlLabel',
    excludeStories: /.*Data$/,
    controls: {
        hideNoControlsWarning: true,
    }
}


export const actionsData = {
    onChange: action('onChange'),
}

export const defaultControlLabelData = {
    checked: false,
    control: Checkbox,
    label: "Lorem ipsum dolor",
}

const Template = () => <ControlLabel {...defaultControlLabelData} {...actionsData}/>

export const DefaultCheckbox = Template.bind({})

DefaultCheckbox.parameters = {
    controls: { hideNoControlsWarning: true }
}

const checkedControlLabelData = {
    checked: true,
    control: Checkbox,
    label: "Lorem ipsum dolor",
}

const Template2 = () => <ControlLabel {...checkedControlLabelData} {...actionsData}/>

export const CheckedCheckbox = Template2.bind({})

CheckedCheckbox.parameters = {
    controls: { hideNoControlsWarning: true }
}

const defaultRadioControlLabelData = {
    checked: false,
    control: Radio,
    label: "Lorem ipsum dolor",
}

const Template3 = () => <ControlLabel {...defaultRadioControlLabelData} {...actionsData}/>

export const DefaultRadio = Template3.bind({})

DefaultRadio.parameters = {
    controls: { hideNoControlsWarning: true }
}

const checkedRadioControlLabelData = {
    checked: true,
    control: Radio,
    label: "Lorem ipsum dolor",
}

const Template4 = () => <ControlLabel {...checkedRadioControlLabelData} {...actionsData}/>

export const CheckedRadio = Template4.bind({})

CheckedRadio.parameters = {
    controls: { hideNoControlsWarning: true }
}