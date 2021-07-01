import React from 'react';
//import { action } from '@storybook/addon-actions';
import Person from './Person';

export default {
    component: Person,
    title: 'Person',
    excludeStories: /.*Data$/,
    controls: {
        hideNoControlsWarning: true,
    }
}

/*
export const actionsData = {
    onChange: action('onChange'),
}
*/

/*
export const defaultRadioData = {
    checked: false,
}
*/

const Template = () => <Person/>

export const Default = Template.bind({})

Default.parameters = {
    controls: { hideNoControlsWarning: true }
}