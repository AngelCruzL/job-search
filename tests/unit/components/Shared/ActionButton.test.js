import { render, screen } from '@testing-library/vue'

import ActionButton from '@/components/Shared/ActionButton.vue'

describe('ActionButton', () => {
  it('should renders text', () => {
    render(ActionButton, {
      props: {
        text: 'Click me',
        type: 'primary'
      }
    })
    const button = screen.getByRole('button', { name: /click me/i })

    expect(button).toBeInTheDocument()
  })

  it('should apply the secondary button styles if the button is secondary type', () => {
    render(ActionButton, {
      props: {
        text: 'Click me',
        type: 'secondary'
      }
    })
    const button = screen.getByRole('button', { name: /click me/i })

    expect(button).toHaveClass('secondary')
  })
})
