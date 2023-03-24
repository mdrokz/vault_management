import type { Meta, StoryObj } from '@storybook/react';

import CP from './CircularProgress';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof CP> = {
    title: 'CircularProgress',
    component: CP,
    tags: ['autodocs'],
    argTypes: {
        progress: { control: { type: 'range', min: 0, max: 100, step: 1 },defaultValue: 50 },
        time: { control: "number", defaultValue: 0.3 },
    },
};

export default meta;
type Story = StoryObj<typeof CP>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const CircularProgress: Story = {
    args: {
        progress: 20,
        time: 0.3,
    }
};