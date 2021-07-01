import React from 'react';
//import { action } from '@storybook/addon-actions';
import Avatar from './Avatar';

export default {
    component: Avatar,
    title: 'Avatar',
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

const Template = () => <Avatar/>

export const Default = Template.bind({})

Default.parameters = {
    controls: { hideNoControlsWarning: true }
}

const Template2 = () => <Avatar src={`${process.env.PUBLIC_URL}/photo_1.jpg`}/>

export const WithImage = Template2.bind({})

WithImage.parameters = {
    controls: { hideNoControlsWarning: true }
}

const Template3 = () => <Avatar rounded={false} src={`${process.env.PUBLIC_URL}/photo_1.jpg`}/>

export const NotRounded = Template3.bind({})

NotRounded.parameters = {
    controls: { hideNoControlsWarning: true }
}

const Template4 = () => <Avatar width="w-16" height="h-16" rounded={true} src={`${process.env.PUBLIC_URL}/photo_1.jpg`}/>

export const Sized = Template4.bind({})

Sized.parameters = {
    controls: { hideNoControlsWarning: true }
}