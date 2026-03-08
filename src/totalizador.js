const porcentajesImpuesto = {
  California: 0.0825,
  Alabama: 0.04,
  Texas: 0.0625,
  Nevada: 0.08,
  Utah: 0.0665
};
const porcentajeCategoria = {
  Varios: {impuesto_cat:0, descuento_cat: 0}
};


function calcularTotalizador(cant_items, price_items, estado = 'California',categoria ='Varios') {
  let tasa_descuento_xcantidad = 0;
  const precioNeto = cant_items * price_items;

  if(precioNeto >= 1000) tasa_descuento_xcantidad = 0.03;
  if(precioNeto >= 3000) tasa_descuento_xcantidad = 0.05;
  if(precioNeto >= 7000) tasa_descuento_xcantidad = 0.07;
  if(precioNeto >= 10000) tasa_descuento_xcantidad = 0.1;
  if(precioNeto >= 30000) tasa_descuento_xcantidad = 0.15;
  

  let descuento_xcant = precioNeto * tasa_descuento_xcantidad;
  let precio_descuento_xcantidad = precioNeto - descuento_xcant;
  
  let datosCategoria = porcentajeCategoria[categoria] || {impuesto:0,descuento_cat:0};
  let descuento_categoria = precio_descuento_xcantidad * datosCategoria.descuento_cat;
  const precio_descuento_total = precio_descuento_xcantidad - descuento_categoria;

  const porcentajeEstado = porcentajesImpuesto[estado] || 0;
  const impuesto = precio_descuento_xcantidad * porcentajeEstado;
  const precioTotal = precio_descuento_xcantidad + impuesto;


  return {
    precioNeto: precioNeto,
    impuesto: impuesto,
    precioTotal: precioTotal,
    descuento_xcant: descuento_xcant,
    tasa_descuento_xcantidad: tasa_descuento_xcantidad
  };
}

export default calcularTotalizador;