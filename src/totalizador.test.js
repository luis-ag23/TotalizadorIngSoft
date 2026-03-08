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

  test('calcula el impuesto correctamente (6.65% Utah)', () => {
    const resultado = totalizador(20, 3, 'Utah');
    expect(resultado.impuesto).toBe(3.99);
  });

  test('calcula el precio total correctamente (Utah)', () => {
    const resultado = totalizador(20, 3, 'Utah');
    expect(resultado.precioTotal).toBe(63.99);
  });

  test('maneja valores en cero', () => {
    const resultado = totalizador(0, 100, 'California');
    expect(resultado.precioNeto).toBe(0);
    expect(resultado.impuesto).toBe(0);
    expect(resultado.precioTotal).toBe(0);
  });


  //Mostrar el precio total sin el porcentaje de descuento en el precio total
  it('calcula descuento cuando el total de la orden es menor a 1000', () =>{
    const resultado = totalizador(90,10,'Utah');
    expect(resultado.precioTotal).toEqual(959.85);
  });

  //Mostrar el precio total con el Porcentaje de descuento que corresponde a 1000
  it('calcula descuento cuando el total de la orden es mayor o igual a 1000',()=>{
    const resultado = totalizador(110,10,'Utah');
    expect(resultado.precioTotal).toEqual(1137.9555)
  })
  
  //Mostrar el precio total con el Porcentaje de descuento que corresponde a 3000
  it('calcula descuento cuando el total de la orden es mayor o igual a 3000',()=>{
    const resultado = totalizador(200,25,'Utah');
    expect(resultado.precioTotal).toEqual(5065.875)
  })

  //Mostrar el precio total con el Porcentaje de descuento que corresponde a 7000
  it('calcula descuento cuando el total de la orden es mayor o igual a 7000',()=>{
    const resultado = totalizador(300,25,'Utah');
    expect(resultado.precioTotal).toEqual(7438.8375)
  })
  
  //Mostrar el precio total con el Porcentaje de descuento que corresponde a 10000
  it('calcula descuento cuando el total de la orden es mayor o igual a 10000',()=>{
    const resultado = totalizador(410,25,'Utah');
    expect(resultado.precioTotal).toEqual(9838.4625)
  })

  //Mostrar el precio total con el Porcentaje de descuento que corresponde a 30000
  it('calcula descuento cuando el total de la orden es mayor o igual a 30000',()=>{
    const resultado = totalizador(1500,25,'Utah');
    expect(resultado.precioTotal).toEqual(33994.6875)
  })

  it('calcular precio con descuento y impuesto por categoria por defecto(varios) ',()=>{
    const resultado = totalizador(10,5,'Utah','varios');
    expect(resultado.precioTotal).toEqual(53.325)
  })
  
  it('calcular precio con descuento y impuesto por categoria Alimentos ',()=>{
    const resultado = totalizador(1000,10,'Utah','Alimentos');
    expect(resultado.descuento_categoria).toEqual(200)
  })

  it('calcular precio con descuento y impuesto por categoria Bebidas ',()=>{
    const resultado = totalizador(1000,10,'Utah','Bebidas');
    expect(resultado.descuento_categoria).toEqual(0); 
    expect(resultado.impuesto_categoria).toEqual(630);
  })

});



