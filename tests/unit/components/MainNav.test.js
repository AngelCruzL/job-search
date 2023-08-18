import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'

import MainNav from '@/components/MainNav.vue'

describe('MainNav', () => {
  const renderMainNav = () => {
    render(MainNav, {
      global: {
        stubs: {
          FontAwesomeIcon: true
        }
      }
    })
  }

  it('should display the company name', () => {
    renderMainNav()
    const companyName = screen.getByText('ÁC Careers')

    expect(companyName).toBeInTheDocument()
  })

  it('should display the menu items for navigation', () => {
    renderMainNav()
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

  describe('when the user logs in', () => {
    it('should display the user profile picture', async () => {
      renderMainNav()
      
      let profileImage = screen.queryByRole('img', {
        name: /user profile image/i
      })
      expect(profileImage).not.toBeInTheDocument()

      const loginButton = screen.getByRole('button', { name: /sign in/i })
      await userEvent.click(loginButton)

      profileImage = screen.queryByRole('img', {
        name: /user profile image/i
      })
      expect(profileImage).toBeInTheDocument()
    })
  })
})
