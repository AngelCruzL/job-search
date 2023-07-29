import { render, screen } from '@testing-library/vue'

import MainNav from '@/components/MainNav.vue'

describe('MainNav', () => {
  it('should display the company name', () => {
    render(MainNav)
    const companyName = screen.getByText('ÁC Careers')

    expect(companyName).toBeInTheDocument()
  })
})
