import React from 'react';
import { action } from '@storybook/addon-actions';
import Textbox from './Textbox';

export default {
    component: Textbox,
    title: 'Textbox',
    excludeStories: /.*Data$/,
    controls: {
        hideNoControlsWarning: true,
    }
}

export const actionsData = {
    onChange: action('onChange'),
}

export const defaultTextboxData = {
    value: "",
    placeholder: "Enter name",
}


const Template = () => <Textbox {...defaultTextboxData} {...actionsData}/>

export const Default = Template.bind({})

Default.parameters = {
    controls: { hideNoControlsWarning: true }
}
