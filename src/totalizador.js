const porcentajesImpuesto = {
  California: 0.0825,
  Alabama: 0.04,
  Texas: 0.0625,
  Nevada: 0.08,
  Utah: 0.0665
};
const porcentajeCategoria = {
  Varios: {impuesto_cat:0, descuento_cat: 0},
  Alimentos: {impuesto_cat: 0,descuento_cat: 0.02},
  Bebidas: {impuesto_cat: 0.07,descuento_cat: 0},
  MaterialEscritorio: {impuesto_cat: 0, descuento_cat: 0.015},
  Muebles: {impuesto_cat: 0.03,descuento_cat: 0},
  Electronicos: {impuesto_cat: 0.04,descuento_cat: 0.01},
  Vestimentas: {impuesto_cat: 0.02,descuento_cat: 0}
  
};


function calcularTotalizador(cant_items, price_items, estado = 'California',categoria ='Varios',peso_volumetrico = 0, Cliente = "Normal") {
  let tasa_descuento_xcantidad = 0;
  let costo_envio_unitario = 0;

  const precioNeto = cant_items * price_items;

  if(precioNeto >= 1000) tasa_descuento_xcantidad = 0.03;
  if(precioNeto >= 3000) tasa_descuento_xcantidad = 0.05;
  if(precioNeto >= 7000) tasa_descuento_xcantidad = 0.07;
  if(precioNeto >= 10000) tasa_descuento_xcantidad = 0.1;
  if(precioNeto >= 30000) tasa_descuento_xcantidad = 0.15;
  

  let descuento_xcant = precioNeto * tasa_descuento_xcantidad;
  let precio_descuento_xcantidad = precioNeto - descuento_xcant;
  
  let datosCategoria = porcentajeCategoria[categoria] || {impuesto_cat:0,descuento_cat:0};
  let descuento_categoria = precioNeto * datosCategoria.descuento_cat;
  const precio_descuento_total = precio_descuento_xcantidad - descuento_categoria;

  const porcentajeEstado = porcentajesImpuesto[estado] || 0;
  
  const impuesto_categoria = Number((precio_descuento_total * datosCategoria.impuesto_cat).toFixed(2));
  const impuesto_estado = precio_descuento_total * porcentajeEstado;

  const impuesto = impuesto_estado + impuesto_categoria;

  if(peso_volumetrico<= 10) costo_envio_unitario = 0;
  if (peso_volumetrico >= 11 && peso_volumetrico <= 20) costo_envio_unitario = 3.5;
  if (peso_volumetrico >= 21 && peso_volumetrico <= 40) costo_envio_unitario = 5;
  if (peso_volumetrico >= 41 && peso_volumetrico <= 80) costo_envio_unitario = 6;
  if (peso_volumetrico >= 81 && peso_volumetrico <= 100) costo_envio_unitario = 6.5;
  if (peso_volumetrico >= 101 && peso_volumetrico <= 200) costo_envio_unitario = 8;
  if (peso_volumetrico > 200) costo_envio_unitario = 9;


  const costo_envio = cant_items * costo_envio_unitario;
  let tasa_descuento_xcliente = 0;

  if(Cliente === "Normal") tasa_descuento_xcliente = 0;
  if(Cliente === "Recurrente") tasa_descuento_xcliente = 0.005;

  const descuento_envio = costo_envio * tasa_descuento_xcliente;
  const costo_envio_final = costo_envio - descuento_envio;

  const precioTotal = precio_descuento_total + impuesto + costo_envio_final;


  return {
    precioNeto: precioNeto,
    impuesto: impuesto,
    precioTotal: precioTotal,
    descuento_xcant: descuento_xcant,
    tasa_descuento_xcantidad: tasa_descuento_xcantidad,
    descuento_categoria: descuento_categoria,
    impuesto_categoria: impuesto_categoria,
    costo_envio: costo_envio,
    costo_envio_final: costo_envio_final
  };
}

export default calcularTotalizador;