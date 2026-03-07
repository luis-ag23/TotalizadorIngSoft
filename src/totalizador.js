const porcentajesImpuesto = {
  California: 0.0825,
  Alabama: 0.04,
  Texas: 0.0625,
  Nevada: 0.08,
  Utah: 0.0665
};


function calcularTotalizador(cant_items, price_items, estado = 'California') {
  const precio_descuento_xcantidad = 0;
  const precioNeto = cant_items * price_items - precio_descuento_xcantidad;
  const porcentajeEstado = porcentajesImpuesto[estado] || 0;
  const impuesto = precioNeto * porcentajeEstado;
  const precioTotal = precioNeto + impuesto;


  return {
    precioNeto: precioNeto,
    impuesto: impuesto,
    precioTotal: precioTotal,
    precio_descuento_xcantidad: precio_descuento_xcantidad
  };
}

export default calcularTotalizador;