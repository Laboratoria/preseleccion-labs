const Assert = require('chai').assert;
const coinConvert = require('../src/coinConvert');

describe('coinConvert()', () => {
  it('debería retornar [162.5, 900, 33000], para $50', () => {
    const dollars = 50;
    const soles = dollars * 3.65;
    const pesosMx = dollars * 19.96;
    const pesosCl = dollars * 699.50;
    const pesosCol = dollars * 3611.50;
    const reales = dollars * 5.62;
    Assert.deepEqual(coinConvert(dollars), [soles, pesosMx, pesosCl, pesosCol, reales]);
  });

  it('debería retornar [325, 1800, 66000], para $100', () => {
    const dollars = 100;
    const soles = dollars * 3.65;
    const pesosMx = dollars * 19.96;
    const pesosCl = dollars * 699.50;
    const pesosCol = dollars * 3611.50;
    const reales = dollars * 5.62;
    Assert.deepEqual(coinConvert(dollars), [soles, pesosMx, pesosCl, pesosCol, reales]);
  });

  it('debería retornar [276.25, 1350, 49500], para  $85', () => {
    const dollars = 85;
    const soles = dollars * 3.65;
    const pesosMx = dollars * 19.96;
    const pesosCl = dollars * 699.50;
    const pesosCol = dollars * 3611.50;
    const reales = dollars * 5.62;
    Assert.deepEqual(coinConvert(dollars), [soles, pesosMx, pesosCl, pesosCol, reales]);
  });
});
