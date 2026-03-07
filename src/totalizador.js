const porcentajesImpuesto = {
  California: 0.0825,
  Alabama: 0.04,
  Texas: 0.0625
};

function calcularTotalizador(cant_items, price_items, estado = 'California') {
  const precioNeto = cant_items * price_items;
  const porcentajeEstado = porcentajesImpuesto[estado] || 0;
  const impuesto = precioNeto * porcentajeEstado;
  const precioTotal = precioNeto + impuesto;

  return {
    precioNeto: precioNeto,
    impuesto: impuesto,
    precioTotal: precioTotal
  };
}

export default calcularTotalizador;