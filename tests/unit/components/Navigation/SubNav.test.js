import { render, screen } from '@testing-library/vue'

import SubNav from '@/components/Navigation/SubNav.vue'

describe('SubNav', () => {
  describe('when user is on jobs page', () => {
    it('should display the job count number', () => {
      render(SubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true
          }
        },
        data() {
          return {
            onJobResultsPage: true
          }
        }
      })
      const jobCount = screen.getByText('1653')

      expect(jobCount).toBeInTheDocument()
    })
  })

  describe('when user is not on jobs page', () => {
    it('should not display the job count number', () => {
      render(SubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true
          }
        },
        data() {
          return {
            onJobResultsPage: false
          }
        }
      })
      const jobCount = screen.queryByText('1653')

      expect(jobCount).not.toBeInTheDocument()
    })
  })
})
