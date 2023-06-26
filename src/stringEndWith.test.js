const stringEndWith = require('./stringEndWith');

describe('stringEndWith', () => {
  it('("abAb", "Ab") should return true', () => {
    expect(stringEndWith("abAb", "Ab")).toBe(true);
  });
});
