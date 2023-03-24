import React from 'react'
import GlobalStyles from '../styles/Global'
import { theme } from 'twin.macro'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  controls: {
    expanded: true, matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
  },
}

export const decorators = [
  Story => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
]