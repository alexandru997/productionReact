import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storyook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storyook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';

export default {
    title: 'widget/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Ligth = Template.bind({});
Ligth.args = {};
Ligth.decorators = [StoreDecorator({

})];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
export const AuthNavbar = Template.bind({});
AuthNavbar.args = {};
AuthNavbar.decorators = [StoreDecorator({
    user: { authData: {} },
})];
