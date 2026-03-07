import totalizador from './totalizador';

describe('totalizador', () => {
  test('calcula el precio neto correctamente', () => {
    const resultado = totalizador(20, 3, 'California');
    expect(resultado.precioNeto).toBe(60);
  });

  test('calcula el impuesto correctamente (8.25% California)', () => {
    const resultado = totalizador(20, 3, 'California');
    expect(resultado.impuesto).toBe(4.95);
  });

  test('calcula el precio total correctamente (California)', () => {
    const resultado = totalizador(20, 3, 'California');
    expect(resultado.precioTotal).toBe(64.95);
  });

  test('calcula el impuesto correctamente (4% Alabama)', () => {
    const resultado = totalizador(20, 3, 'Alabama');
    expect(resultado.impuesto).toBe(2.4);
  });

  test('calcula el precio total correctamente (Alabama)', () => {
    const resultado = totalizador(20, 3, 'Alabama');
    expect(resultado.precioTotal).toBe(62.4);
  });

  test('calcula el impuesto correctamente (6.25% Texas)', () => {
    const resultado = totalizador(20, 3, 'Texas');
    expect(resultado.impuesto).toBe(3.75);
  });

  test('calcula el precio total correctamente (Texas)', () => {
    const resultado = totalizador(20, 3, 'Texas');
    expect(resultado.precioTotal).toBe(63.75);
  });

  test('calcula el impuesto correctamente (8% Nevada)', () => {
    const resultado = totalizador(20, 3, 'Nevada');
    expect(resultado.impuesto).toBe(4.8);
  });

  test('calcula el precio total correctamente (Nevada)', () => {
    const resultado = totalizador(20, 3, 'Nevada');
    expect(resultado.precioTotal).toBe(64.8);
  });

  test('maneja valores en cero', () => {
    const resultado = totalizador(0, 100, 'California');
    expect(resultado.precioNeto).toBe(0);
    expect(resultado.impuesto).toBe(0);
    expect(resultado.precioTotal).toBe(0);
  });
});
