import type { Meta, StoryObj } from '@storybook/react';

import NavBar from './Nav';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof NavBar> = {
    title: 'NavBar',
    component: NavBar,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text', defaultValue: 'Vault Management' },
        vault: { control: 'object', defaultValue: { displayName: 'Vault 1', id: 'uuid' } },
        topic: { control: 'object', defaultValue: { displayName: 'Topic 1', id: 'uuid' } },
        note: { control: 'object', defaultValue: { displayName: 'Note 1', id: 'uuid' } },
    },
};

export default meta;
type Story = StoryObj<typeof NavBar>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Nav: Story = {
    args: {
        title: 'Vault Management',
        vault: { displayName: 'Vault 1', id: 'uuid' },
        topic: { displayName: 'Topic 1', id: 'uuid' },
        note: { displayName: 'Note 1', id: 'uuid' },
    }
};