import { render, screen } from '@testing-library/vue'

import MainNav from '@/components/MainNav.vue'

describe('MainNav', () => {
  it('should display the company name', () => {
    render(MainNav)
    const companyName = screen.getByText('ÁC Careers')

    expect(companyName).toBeInTheDocument()
  })

  it('should display the menu items for navigation', () => {
    render(MainNav)
    const menuItems = screen.getAllByRole('listitem')
    const menuItemsText = menuItems.map((item) => item.textContent)

    expect(menuItemsText).toEqual([
      'Teams',
      'Locations',
      'Life at ÁC Corp',
      'How we hire',
      'Students',
      'Jobs'
    ])
  })
})
