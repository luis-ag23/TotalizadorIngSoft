import totalizador from './totalizador';

describe('totalizador', () => {
  test('calcula el precio neto correctamente', () => {
    expect(totalizador(2, 10)).toBe(20);
    expect(totalizador(5, 15)).toBe(75);
    expect(totalizador(0, 100)).toBe(0);
    expect(totalizador(3, 0)).toBe(0);
  });
});
