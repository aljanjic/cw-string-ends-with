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

  it('("naNa", "") should return true', () => {
    expect(stringEndWith("naNa", "") ).toBe(true);
  });

  it('( "", "HehO") should return false', () => {
    expect(stringEndWith( "", "HehO") ).toBe(false);
  });


  it('( "MehEho", "o") should return false', () => {
    expect(stringEndWith("MehEho", "o") ).toBe(true);
  });

});
