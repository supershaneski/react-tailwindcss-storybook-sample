import React from 'react';
import { action } from '@storybook/addon-actions';
import Checkbox from './Checkbox';

export default {
    component: Checkbox,
    title: 'Checkbox',
    excludeStories: /.*Data$/,
    controls: {
        hideNoControlsWarning: true,
    }
}

export const actionsData = {
    onChange: action('onChange'),
}

export const defaultCheckboxData = {
    checked: false,
}

const Template = () => <Checkbox {...defaultCheckboxData} {...actionsData} />

export const Default = Template.bind({})

Default.parameters = {
    controls: { hideNoControlsWarning: true }
}

const Template2 = () => <Checkbox checked={true} {...actionsData} />

export const Checked = Template2.bind({})

Checked.parameters = {
    controls: { hideNoControlsWarning: true }
}