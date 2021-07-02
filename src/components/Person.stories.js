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


export const defaultPersonData = {
    data: {
        name: "Allan Johnson",
        work: "Engineer",
    },
    round: false,
}


const Template = () => <Person {...defaultPersonData}/>

export const Default = Template.bind({})

Default.parameters = {
    controls: { hideNoControlsWarning: true }
}

const roundedPersonData = {
    ...defaultPersonData,
    round: true,
}


const Template2 = () => <Person {...roundedPersonData}/>

export const Rounded = Template2.bind({})

Rounded.parameters = {
    controls: { hideNoControlsWarning: true }
}