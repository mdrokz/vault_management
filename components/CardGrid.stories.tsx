import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import Card from './Card';

import CG from './CardGrid';

const cards = [
    {
        title: 'Vault 1',
        type: 'Vault',
        topicsCount: 10,
        notesCount: 20,
        accessLevel: 'private',
        author: 'John Doe',
        createdDate: '2021-01-01',
        lastModified: '2021-01-01',
        isFavorite: false,
        progress: 0,
        tags: ['tag1', 'tag2'],
    },
    {
        title: 'Vault 1',
        type: 'Vault',
        topicsCount: 10,
        notesCount: 20,
        accessLevel: 'private',
        author: 'John Doe',
        createdDate: '2021-01-01',
        lastModified: '2021-01-01',
        isFavorite: false,
        progress: 0,
        tags: ['tag1', 'tag2'],
    },
    {
        title: 'Vault 1',
        type: 'Vault',
        topicsCount: 10,
        notesCount: 20,
        accessLevel: 'private',
        author: 'John Doe',
        createdDate: '2021-01-01',
        lastModified: '2021-01-01',
        isFavorite: false,
        progress: 0,
        tags: ['tag1', 'tag2'],
    },
    {
        title: 'Vault 1',
        type: 'Vault',
        topicsCount: 10,
        notesCount: 20,
        accessLevel: 'private',
        author: 'John Doe',
        createdDate: '2021-01-01',
        lastModified: '2021-01-01',
        isFavorite: false,
        progress: 0,
        tags: ['tag1', 'tag2'],
    }
];


// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof CG> = {
    title: 'CardGrid',
    component: CG,
    tags: ['autodocs'],
    argTypes: {
        children: { control: 'string', defaultValue: "" },
    },
};

export default meta;
type Story = StoryObj<typeof CG>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const CardGrid: StoryFn<typeof CG> = (...args) => {
    return (
        <CG>
            {cards.map((card, i) => <Card key={i} {...card} />)}
        </CG>
    )
}