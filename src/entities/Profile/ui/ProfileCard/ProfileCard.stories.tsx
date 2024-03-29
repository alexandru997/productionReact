import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storyook/StoreDecorator/StoreDecorator';
import { ProfileCard } from 'entities/Profile';
import { Country } from 'entities/Country/model/types/country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/storybook.jpg';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'Alex',
        age: 25,
        country: Country.Moldova,
        lastname: 'alexander',
        first: 'xander',
        city: 'Ungheni',
        currency: Currency.EUR,
        avatar,
    },
};

export const withError = Template.bind({});
withError.args = {
    error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
