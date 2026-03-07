function calcularTotalizador(cant_items, price_items) {
  const precioNeto = cant_items * price_items;
  const porcentajeEstado = 0.0825;
  const impuesto = precioNeto * porcentajeEstado;
  const precioTotal = precioNeto + impuesto;

  return {
    precioNeto: precioNeto,
    impuesto: impuesto,
    precioTotal: precioTotal
  };
}

export default calcularTotalizador;