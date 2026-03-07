const porcentajesImpuesto = {
  California: 0.0825,
  Alabama: 0.04,
  Texas: 0.0625,
  Nevada: 0.08,
  Utah: 0.0665
};


function calcularTotalizador(cant_items, price_items, estado = 'California') {
  let tasa_descuento_xcantidad = 0;
  const precioNeto = cant_items * price_items;

  if(precioNeto>= 1000) tasa_descuento_xcantidad = 0.03;

  let descuento_xcant = precioNeto * tasa_descuento_xcantidad;
  let precio_descuento_xcantidad = precioNeto - descuento_xcant;

  const porcentajeEstado = porcentajesImpuesto[estado] || 0;
  const impuesto = precio_descuento_xcantidad * porcentajeEstado;
  const precioTotal = precio_descuento_xcantidad + impuesto;


  return {
    precioNeto: precioNeto,
    impuesto: impuesto,
    precioTotal: precioTotal,
    descuento_xcant: descuento_xcant
  };
}

export default calcularTotalizador;