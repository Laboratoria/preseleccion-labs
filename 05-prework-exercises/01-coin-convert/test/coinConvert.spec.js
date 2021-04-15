const coinConvert = require('../src/coinConvert');

describe('coinConvert()', () => {
  it('debería retornar [182.5, 998, 34975, 180575, 281], para $50', () => {
    const dollars = 50;
    const soles = dollars * 3.65;
    const pesosMx = dollars * 19.96;
    const pesosCl = dollars * 699.50;
    const pesosCol = dollars * 3611.50;
    const reales = dollars * 5.62;
    expect(coinConvert(dollars)).toEqual([soles, pesosMx, pesosCl, pesosCol, reales]);
  });

  it('debería retornar [365, 1996, 69950, 361150, 562], para $100', () => {
    const dollars = 100;
    const soles = dollars * 3.65;
    const pesosMx = dollars * 19.96;
    const pesosCl = dollars * 699.50;
    const pesosCol = dollars * 3611.50;
    const reales = dollars * 5.62;
    expect(coinConvert(dollars)).toEqual([soles, pesosMx, pesosCl, pesosCol, reales]);
  });

  it('debería retornar [310.25, 1696.6, 59457.5, 306977.5, 477.7], para  $85', () => {
    const dollars = 85;
    const soles = dollars * 3.65;
    const pesosMx = dollars * 19.96;
    const pesosCl = dollars * 699.50;
    const pesosCol = dollars * 3611.50;
    const reales = dollars * 5.62;
    expect(coinConvert(dollars)).toEqual([soles, pesosMx, pesosCl, pesosCol, reales]);
  });
});
