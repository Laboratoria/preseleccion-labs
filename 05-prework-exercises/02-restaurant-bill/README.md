# Cuenta de restaurante

## Enunciado

Imagina que has salido a comer con tus cuatro mejores amigas. La cuenta total
del consumo es de 50 dólares, pero a eso debes agregarle el 10% de Impuesto al
Valor Agregado (IVA). Quieres dividir la cuenta equitativamente entre las cinco.
Para eso vamos a crear este programa.

## Análisis y lista de tareas

Para llevar a adelante este reto necesitas completar las siguientes tareas:

- Abrir el archivo `restaurantBill.js` que tiene una _función flecha_ llamada `restaurantBill`
- Calcular el valor del impuesto
- Calcular el valor total de la cuenta
- Calcular el valor que cada una tiene que pagar
- Retornar el monto calculado que cada una tiene que pagar con el símbolo `$` delante.
- Usar la terminal para:
  - Instalar las dependencias del proyecto
  - Ejecutar los tests

{% next "Comencemos" %}

## Abre el archivo `coinConvert.js`

[FIXME: video o screenshot o gif para mostrar donde esta el archivo]

{% next "Funcionalidad JS" %}

## Calcula el valor del `impuesto`

Asigna el resultado de multiplicar `cuenta` por `0.1` en la variable `impuesto`. Nota: `10%` en decimal se escribe `0.1`.

```js
const impuesto = cuenta * 0.1;
```

{% spoiler %}
[FIXME: screenshot del archivo hasta ahora]
{% endspoiler %}

{% next "Calculo del total de la cuenta" %}

### Calcula el valor del `totalDeLaCuenta`

Crea una variable llamada `totalDeLaCuenta` y asígnale el resultado de sumar `cuenta` más
`impuesto`.

```js
const totalDeLaCuenta = cuenta + impuesto;
```

{% spoiler %}
[FIXME: screenshot del archivo hasta ahora]
{% endspoiler %}

{% next "Calculo del valor final a pagar" %}

### Calcula el valor final a pagar

Crea una variable llamada `valorFinal` y asígnale el resultado de dividir `totalDeLaCuenta` entre
`5`.

```js
const valorFinal = totalDeLaCuenta / 5;
```

{% spoiler %}
[FIXME: screenshot del archivo hasta ahora]
{% endspoiler %}

{% next "Retornar el resultado" %}

### Retorna el resultado

Para retornar un valor utiliza la palabra `return`. Además concatena el símbolo de dolar `$` con el `valorFinal` calculado.

```js
return "$" + valorFinal;
```

{% next "Usar la terminal" %}

## Usa de la terminal

### Instala las dependencias del proyecto

Escribe el siguiente comando en la terminal:

```
npm install
```

### Ejecuta los tests

Escribe el siguiente comando en la terminal:

```
npm test
```

Si llegaste hasta aquí y tus test pasaron tu función ya está completa!

{% next "Contenido extra" %}

## Estructura de la función `restaurantBill`

### Parámetro

La función `restaurantBill` en el boilerplate(plantilla) tiene un solo _parámetro_ (`cuenta`), que es el monto de la cuenta antes de impuestos (un _número_)

### Valor de retorno

La función `restaurantBill` en el boilerplate(plantilla) tiene un valor de retorno que es un
_string_ con la cantidad que le toca pagar a cada una ya teniendo en cuenta el 10% de impuestos (e incluyendo el símbolo de dólar).
