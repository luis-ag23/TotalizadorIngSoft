#### Proyeto base para proyectos tddlab:

#### Creado a partir de proyecto usado en IngSoftware: parcel-jest-base

https://github.com/israelantezana/parcel-jest-base

#### Comandos creados en package json:

#### Para instalar las dependencias:

npm install

#### Comandos de uso:

Ejecutar web-sever local parcel:
npm start

Ejecutar pruebas de unidad de forma continua --watch:
npm test

Ejecutar pruebas de unidad solo una vez:
npm run test-once

Funcionalidades:
1. Cálculo de precio neto

Dado cantidad = 20 y precio por ítem = 3
Cuando se calcula el precio neto
Entonces el resultado debe ser 60

2. Impuesto para California

Dado precio neto = 100 y estado = CA
Cuando se calcula el impuesto
Entonces el impuesto debe ser 8.25

3. Impuesto para Texas

Dado precio neto = 60 y estado = TX
Cuando se calcula el impuesto
Entonces el impuesto debe ser 3.75

4. Estado por defecto

Dado que la aplicación inicia
Entonces el estado seleccionado por defecto debe ser California

5. El estado debe elegirse de una lista

Dado que el usuario quiere seleccionar un estado
Entonces solo debe poder elegir entre UT, NV, TX, AL y CA

6. Descuento por monto de 1000

Dado un precio neto de 1000
Cuando se calcula el descuento
Entonces el porcentaje de descuento debe ser 3%

7. Descuento por monto de 3000

Dado un precio neto de 3000
Cuando se calcula el descuento
Entonces el porcentaje de descuento debe ser 5%

8. Descuento por monto de 7000

Dado un precio neto de 7000
Cuando se calcula el descuento
Entonces el porcentaje de descuento debe ser 7%

9. Descuento por monto de 10000

Dado un precio neto de 10000
Cuando se calcula el descuento
Entonces el porcentaje de descuento debe ser 10%

10. Descuento por monto de 30000

Dado un precio neto de 30000
Cuando se calcula el descuento
Entonces el porcentaje de descuento debe ser 15%

11. Sin descuento debajo de 1000

Dado un precio neto de 999
Cuando se calcula el descuento
Entonces el porcentaje de descuento debe ser 0%

12. Total con descuento e impuesto

Dado precio neto = 1000, descuento = 3% e impuesto = 8.25%
Cuando se calcula el total
Entonces el total debe ser:

descuento = 30

subtotal con descuento = 970

impuesto = 80.025 si se aplica sobre neto, o el valor definido por la regla del sistema

total final según la fórmula implementada

Aquí conviene que ustedes definan claramente en el README sobre qué base se calcula el impuesto para que el test sea consistente.

13. Categoría por defecto

Dado que la aplicación inicia
Entonces la categoría por defecto debe ser “Varios”

14. Impuesto adicional por categoría Electrónicos

Dado estado = CA y categoría = Electrónicos
Cuando se calcula el impuesto total
Entonces se debe sumar 4% adicional al impuesto base de CA 

22a76b82-fe31-460f-b10e-2a91ea7…

15. Descuento adicional por categoría Alimentos

Dado una orden con categoría = Alimentos
Cuando se calcula el descuento
Entonces se debe sumar 2% adicional al descuento base 

22a76b82-fe31-460f-b10e-2a91ea7…

16. Costo de envío para peso entre 0 y 10

Dado peso volumétrico por unidad = 8 y cantidad = 3
Cuando se calcula el envío
Entonces el costo de envío total debe ser 0

17. Costo de envío para peso entre 11 y 20

Dado peso volumétrico por unidad = 15 y cantidad = 2
Cuando se calcula el envío
Entonces el costo de envío total debe ser 7

18. Costo de envío para peso mayor a 200

Dado peso volumétrico por unidad = 250 y cantidad = 4
Cuando se calcula el envío
Entonces el costo de envío total debe ser 36

19. Tipo de cliente por defecto

Dado que la aplicación inicia
Entonces el tipo de cliente por defecto debe ser “Normal”

20. Descuento de envío para cliente Recurrente

Dado un costo de envío de 100 y tipo de cliente = Recurrente
Cuando se calcula el beneficio
Entonces el descuento de envío debe ser 0.5% del envío

21. Descuento fijo especial para Recurrente + Alimentos

Dado tipo de cliente = Recurrente, precio neto > 3000 y categoría = Alimentos
Cuando se calcula el total
Entonces se debe aplicar un descuento fijo adicional de 100 
22. Descuento fijo especial para Especial + Electrónicos

Dado tipo de cliente = Especial, precio neto > 7000 y categoría = Electrónicos
Cuando se calcula el total
Entonces se debe aplicar un descuento fijo adicional de 200

23. Mostrar desglose completo

Dado una venta válida
Cuando se calcula el total
Entonces se debe mostrar:

cantidad

precio por ítem

precio neto

estado

porcentaje de impuesto

categoría

porcentaje adicional por categoría

descuento aplicado

envío

beneficios del cliente

total final

24. Validación de cantidad vacía

Dado que la cantidad está vacía
Cuando el usuario intenta calcular
Entonces se debe mostrar un error de validación

25. Validación de precio inválido

Dado que el precio por ítem es negativo
Cuando el usuario intenta calcular
Entonces se debe mostrar un error de validación

26. Validación de peso inválido

Dado que el peso volumétrico es negativo
Cuando el usuario intenta calcular
Entonces se debe mostrar un error de validación

27. Validación de datos obligatorios

Dado que falta información requerida
Cuando el usuario intenta calcular
Entonces el sistema no debe calcular el total y debe informar qué dato falta