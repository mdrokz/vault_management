import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import Card from './Card';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Card> = {
    title: 'Card',
    component: Card,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text', defaultValue: 'Vault 1' },
        type: { control: { type: 'radio' }, options: ['Vault', 'Topic'], defaultValue: 'Vault' },
        topicsCount: { control: 'number', defaultValue: 10 },
        notesCount: { control: 'number', defaultValue: 20 },
        accessLevel: { control: { type: 'radio' }, options: ['Public', 'Private'], defaultValue: 'Private' },
        author: { control: 'text', defaultValue: 'John Doe' },
        createdDate: {
            control: "date",
        },
        lastModified: { control: 'text', defaultValue: '2021-01-01' },
        isFavorite: { control: 'boolean', defaultValue: false },
        progress: { control: { type: 'range', min: 0, max: 100, step: 1 } },
        tags: { control: 'object', defaultValue: ['tag1', 'tag2'] },
        stripColor: { control: 'color', defaultValue: '#000000' }
    },
};

export default meta;
type Story = StoryObj<typeof Card>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
// export const PCard: StoryFn<typeof Card> = (args) => {
//     return <Card {...args} />
// };

export const PCard: Story = {
    args: {
        title: 'Vault 1',
        type: 'Vault',
        topicsCount: 10,
        notesCount: 20,
        accessLevel: 'private',
        author: 'John Doe',
        createdDate: Date.now(),
        lastModified: '2021-01-01',
        isFavorite: false,
        progress: 0,
        tags: ['tag1', 'tag2'],
    }
};