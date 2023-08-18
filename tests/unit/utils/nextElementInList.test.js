import nextElementInList from '@/utils/nextElementInList'

describe('nextElementInList', () => {
  it('should locate the current element in list and return the next', () => {
    const list = ['A', 'B', 'C', 'D', 'E']
    const currentValue = 'C'
    const nextValue = 'D'
    const result = nextElementInList(list, currentValue)

    expect(result).toBe(nextValue)
  })

  describe('when the element is at the end of the list', () => {
    it('should locate as next value the first item of the list', () => {
      const list = ['A', 'B', 'C', 'D', 'E']
      const currentValue = 'E'
      const nextValue = 'A'
      const result = nextElementInList(list, currentValue)

      expect(result).toBe(nextValue)
    })
  })
})
