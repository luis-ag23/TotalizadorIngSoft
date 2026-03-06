import precioNeto from "./totalizador.js";

const cantidadItemsInput = document.querySelector(".inp-cantItems");
const precioItemInput = document.querySelector(".inp-priceItems");
const calcularButton = document.querySelector(".btn-calcular");
const precioNetoValor = document.querySelector("#precio-neto-valor");

calcularButton.addEventListener("click", () => {
	const cantidadItems = Number.parseFloat(cantidadItemsInput.value) || 0;
	const precioItem = Number.parseFloat(precioItemInput.value) || 0;

	precioNetoValor.textContent = String(precioNeto(cantidadItems, precioItem));
});
