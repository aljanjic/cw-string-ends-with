const stringEndWith = require('./stringEndWith');

describe('stringEndWith', () => {
  it('("abAb", "Ab") should return true', () => {
    expect(stringEndWith("abAb", "Ab")).toBe(true);
  });

  it('("ababac", "ab") should return false', () => {
    expect(stringEndWith("ababac", "ab")).toBe(false);
  });

  it('("ababab", "ab") should return true', () => {
    expect(stringEndWith("ababab", "ab")).toBe(true);
  });

  it('("naNa", "ababac") should return false', () => {
    expect(stringEndWith("naNa", "ababac")).toBe(false);
  });

  it('("", "") should return true', () => {
    expect(stringEndWith("", "") ).toBe(true);
  });

});
