import totalizador from './totalizador';

describe('totalizador', () => {
  test('calcula el precio neto correctamente', () => {
    const resultado = totalizador(20, 3);
    expect(resultado.precioNeto).toBe(60);
  });

  

  test('maneja valores en cero', () => {
    const resultado = totalizador(0, 100);
    expect(resultado.precioNeto).toBe(0);
    expect(resultado.impuesto).toBe(0);
    expect(resultado.precioTotal).toBe(0);
  });
});
