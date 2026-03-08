import calcularTotalizador from "./totalizador.js";

const cantidadItemsInput = document.querySelector(".inp-cantItems");
const precioItemInput = document.querySelector(".inp-priceItems");
const estadoSelect = document.querySelector(".select-estado");
const calcularButton = document.querySelector(".btn-calcular");
const precioNetoValor = document.querySelector("#precio-neto-valor");
const impuestoValor = document.querySelector("#impuesto-valor");
const precioTotalValor = document.querySelector("#precio-total-valor");
const cant_descuento_xcant = document.querySelector("#descuento");
const tasa_descuento_xcant = document.querySelector("#tasa-descuento")
const categoriaSelect = document.querySelector(".select-categoria");
const descuentoCategoria = document.querySelector("#descuento-cat");
const costoEnvio = document.querySelector("#costo-envio");
const pesoVolInput = document.querySelector(".inp-pesoVol")

calcularButton.addEventListener("click", () => {
	const cantidadItems = Number.parseFloat(cantidadItemsInput.value) || 0;
	const precioItem = Number.parseFloat(precioItemInput.value) || 0;
	const estado = estadoSelect.value;
	const categoria = categoriaSelect.value;
	const pesoVol = Number.parseFloat(pesoVolInput.value) || 0;


	const resultado = calcularTotalizador(cantidadItems, precioItem, estado, categoria,pesoVol);

	precioNetoValor.textContent = String(resultado.precioNeto);
	impuestoValor.textContent = String(resultado.impuesto);
	precioTotalValor.textContent = String(resultado.precioTotal);
	cant_descuento_xcant.textContent = String(resultado.descuento_xcant);
	tasa_descuento_xcant.textContent = String(resultado.tasa_descuento_xcantidad * 100 + "%");
	descuentoCategoria.textContent = String(resultado.descuento_categoria);
	costoEnvio.textContent = String(resultado.costo_envio);
});
