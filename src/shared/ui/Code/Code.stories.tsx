import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { Code } from './Code';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    text: ''
        + 'import React from \'react\';\n'
        + 'import { ComponentMeta, ComponentStory } from \'@storybook/react\';\n'
        + 'import \'app/styles/index.scss\';\n'
        + 'import { Code } from \'./Code\';\n'
        + '\n'
        + 'export default {\n'
        + '    title: \'shared/Code\',\n'
        + '    component: Code,\n'
        + '    argTypes: {\n'
        + '        backgroundColor: { control: \'color\' },\n'
        + '    },\n'
        + '} as ComponentMeta<typeof Code>;\n'
        + '\n'
        + 'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n'
        + '\n'
        + 'export const Normal = Template.bind({});',
};