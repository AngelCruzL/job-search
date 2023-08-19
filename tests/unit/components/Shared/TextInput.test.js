import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'

import TextInput from '@/components/Shared/TextInput.vue'

describe('TextInput', () => {
  it('should communicate to the parent component that the user has changed the input value', async () => {
    const { emitted } = render(TextInput, {
      props: { modelValue: '' }
    })
    const input = screen.getByRole('textbox')
    await userEvent.type(input, 'CDMX')
    const messages = emitted()['update:modelValue']

    expect(messages).toEqual([['C'], ['CD'], ['CDM'], ['CDMX']])
  })
})
