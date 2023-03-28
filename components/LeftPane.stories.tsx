
import type { Meta, StoryObj } from '@storybook/react';

import LP from './LeftPane';


const meta: Meta<typeof LP> = {
    title: 'LeftPane',
    component: LP,
    tags: ['autodocs'],
    argTypes: {
      onClick: { action: 'click'},
    },
  };
  
  export default meta;
  type Story = StoryObj<typeof LP>;
  
  // More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
  export const LeftPane: Story = {
    args: {
    }
  };