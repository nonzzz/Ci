const { f, t } = require('../index')

describe('Test', () => {
  it('should be sum to equal 3', () => {
    expect(f(1, 2)).toBe(3)
  })

  it('should be sum to equeal -2', () => {
    expect(t(1, 3)).toBe(-2)
  })
})
