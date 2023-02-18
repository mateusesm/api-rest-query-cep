import { calculateShippingTax } from './calculateShippingTax';

const testUf = 'rn';

describe('Testing calculateShippingTax function', () => {
  it('should return a truthy value and greater than zero', async () => {
    const testTax = await calculateShippingTax(testUf);
    expect(testTax).toBeTruthy();
    expect(testTax).toBeGreaterThan(0);
  });
});
