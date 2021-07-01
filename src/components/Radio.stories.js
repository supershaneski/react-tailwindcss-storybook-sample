import React from 'react';
import { action } from '@storybook/addon-actions';
import Radio from './Radio';

export default {
    component: Radio,
    title: 'Radio',
    excludeStories: /.*Data$/,
    controls: {
        hideNoControlsWarning: true,
    }
}

export const actionsData = {
    onChange: action('onChange'),
}

export const defaultRadioData = {
    checked: false,
}

const Template = () => <Radio {...defaultRadioData} {...actionsData} />

export const Default = Template.bind({})

Default.parameters = {
    controls: { hideNoControlsWarning: true }
}

const Template2 = () => <Radio checked={true} {...actionsData} />

export const Checked = Template2.bind({})

Checked.parameters = {
    controls: { hideNoControlsWarning: true }
}