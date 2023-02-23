import { globalCss } from '@ignite-ui/react'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',

    '&::-webkit-scrollbar': {
      width: '12px',
    },

    '&::-webkit-scrollbar-track': {
      background: '$gray800',
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '$gray600' /* color of the scroll thumb */,
      borderRadius: '20px' /* roundness of the scroll thumb */,
      border: '3px solid $gray800' /* creates padding around scroll thumb */,
    },
  },
})
