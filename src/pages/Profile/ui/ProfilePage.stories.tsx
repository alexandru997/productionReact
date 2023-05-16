import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storyook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storyook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country/model/types/country';
import { Currency } from 'entities/Currency';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },

} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args as typeof ProfilePage} />;

export const Ligth = Template.bind({});
Ligth.args = {};

Ligth.decorators = [StoreDecorator({

    profile: {
        form: {
            username: 'Alex',
            age: 25,
            country: Country.Moldova,
            lastname: 'alexander',
            first: 'xander',
            city: 'Ungheni',
            currency: Currency.EUR,
        },
    },

})];
export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            username: 'Alex',
            age: 25,
            country: Country.Moldova,
            lastname: 'alexander',
            first: 'xander',
            city: 'Ungheni',
            currency: Currency.EUR,
        },
    },
})];
