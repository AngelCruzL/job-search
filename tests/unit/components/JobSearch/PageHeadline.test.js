import { nextTick } from 'vue'
import { render, screen } from '@testing-library/vue'

import PageHeadline from '@/components/JobSearch/PageHeadline.vue'

describe('PageHeadline', () => {
  beforeEach(() => vi.useFakeTimers())

  afterEach(() => vi.useRealTimers())

  it('should display an introductory action verb', () => {
    render(PageHeadline)
    const actionPhrase = screen.getByRole('heading', {
      name: /build for everyone/i
    })

    expect(actionPhrase).toBeInTheDocument()
  })

  it('should change the action verb at a consistent interval', () => {
    const mock = vi.fn()
    vi.stubGlobal('setInterval', mock)
    render(PageHeadline)

    expect(mock).toHaveBeenCalled()
  })

  it('should swap the action verb after interval', async () => {
    render(PageHeadline)
    vi.advanceTimersToNextTimer()

    await nextTick()
    const actionPhrase = screen.getByRole('heading', {
      name: /create for everyone/i
    })

    expect(actionPhrase).toBeInTheDocument()
  })

  it('should remove the interval when the component disappears', () => {
    const clearIntervalMock = vi.fn()
    vi.stubGlobal('clearInterval', clearIntervalMock)
    const { unmount } = render(PageHeadline)
    unmount()

    expect(clearIntervalMock).toHaveBeenCalled()
    vi.unstubAllGlobals()
  })
})
