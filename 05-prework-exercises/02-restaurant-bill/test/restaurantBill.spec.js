const restaurantBill = require('../src/restaurantBill');

describe('restaurantBill()', () => {
  it('debería regresar $11, para $50 y 5 amigas', () => {
    const preTaxAmount = 50;
    const numFriends = 5;
    const tax = preTaxAmount * 0.1;
    const total = `$${(preTaxAmount + tax) / numFriends}`;
    expect(restaurantBill(preTaxAmount, numFriends)).toBe(total);
  });

  it('debería regresar $22, para $100 y 5 amigas', () => {
    const preTaxAmount = 100;
    const numFriends = 5;
    const tax = preTaxAmount * 0.1;
    const total = `$${(preTaxAmount + tax) / numFriends}`;
    expect(restaurantBill(preTaxAmount, numFriends)).toBe(total);
  });

  it('debería regresar $18.7, para $85 y 5 amigas', () => {
    const preTaxAmount = 85;
    const numFriends = 5;
    const tax = preTaxAmount * 0.1;
    const total = `$${(preTaxAmount + tax) / numFriends}`;
    expect(restaurantBill(preTaxAmount, numFriends)).toBe(total);
  });

  it('debería regresar $9.35, para $75  y 10 amigas', () => {
    const preTaxAmount = 85;
    const numFriends = 10;
    const tax = preTaxAmount * 0.1;
    const total = `$${(preTaxAmount + tax) / numFriends}`;
    expect(restaurantBill(preTaxAmount, numFriends)).toBe(total);
  });
});