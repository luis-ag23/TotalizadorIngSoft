import calcularTotalizador from "./totalizador.js";

const cantidadItemsInput = document.querySelector(".inp-cantItems");
const precioItemInput = document.querySelector(".inp-priceItems");
const calcularButton = document.querySelector(".btn-calcular");
const precioNetoValor = document.querySelector("#precio-neto-valor");
const impuestoValor = document.querySelector("#impuesto-valor");
const precioTotalValor = document.querySelector("#precio-total-valor");

calcularButton.addEventListener("click", () => {
	const cantidadItems = Number.parseFloat(cantidadItemsInput.value) || 0;
	const precioItem = Number.parseFloat(precioItemInput.value) || 0;

	const resultado = calcularTotalizador(cantidadItems, precioItem);

	precioNetoValor.textContent = String(resultado.precioNeto);
	impuestoValor.textContent = String(resultado.impuesto);
	precioTotalValor.textContent = String(resultado.precioTotal);
});
