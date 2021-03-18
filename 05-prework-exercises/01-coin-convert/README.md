# Convertidor de monedas

## Enunciado
Crea una función que convierta una cantidad en dólares a 3 monedas diferentes (soles, pesos mexicanos y pesos chilenos)

TO DO: PREGUNTAR SI DEBERIA PEDIR ESTE DATO CON UN PROMPT DE NUEVO Y LUEGO IMPRIMIR EN PANTALLA EL RESULTADO?

## Objetivo
Asignar _valores_ a _variables_.

## Análisis y lista de tareas

Para llevar a adelante este reto necesitas completar las siguientes tareas:

- Abrir el archivo `coinConvert.js` que tiene una _función flecha_ llamada `coinConvert`
- Calcular los valores de las varibles:
  - `soles`
  - `pesosMexicanos`
  - `pesosChilenos`

{% next "Comencemos" %}

## Abre el archivo `coinConvert.js`

[FIXME: video o screenshot o gif para mostrar donde esta el archivo]

{% next "Funcionalidad JS" %}

## Calcula los valores de las variables

Utiliza las siguientes tasas de cambio:

```text
1 dólar = 3.25 soles peruanos
1 dólar = 18 pesos mexicanos
1 dólar = 660 pesos chilenos
```

{% next "Calculo de soles" %}

### Calculo del valor de la variable `soles`

Remplaza los comentarios `/* ??? */` con la operación que para calcular el valor de soles.

```js
const soles = dolares * 3.25;
```

{% spoiler %}
[FIXME: screenshot del archivo hasta ahora]
{% endspoiler %}

{% next "Calculo de pesos mexicanos" %}

### Calculo del valor de la variable `pesosMexicanos`

Remplaza los comentarios `/* ??? */` con la operación que para calcular el valor de pesosMexicanos.

```js
const pesosMexicanos = dolares * 18;
```

{% spoiler %}
[FIXME: screenshot del archivo hasta ahora]
{% endspoiler %}


{% next "Calculo de pesos chilenos" %}

### Calculo del valor de la variable `pesosChilenos`

Remplaza los comentarios `/* ??? */` con la operación que para calcular el valor de pesosChilenos.

```js
const pesosChilenos = dolares * 660;
```

{% spoiler %}
[FIXME: screenshot del archivo hasta ahora]
{% endspoiler %}


Si llegaste hasta aquí tu función ya está completa!
[FIXME: Mostrar como correr tests? o como verificar que lo logró?]

{% next "Contenido extra" %}
## Estructura de la función `coinConvert`

### Parámetro

Es la variable que se define cuando se declara la función.

La función `coinConverter` en el boilerplate(plantilla) tiene un solo _parámetro_ (`dolares`), que es un _número_ que representa una cantidad en dólares.

### Valor de retorno

Este es el valor que retorna nuestra función cuando termina de ejecutarse.

La función `coinConverter` en el boilerplate(plantilla) tiene un valor de retorno que es un _arreglo_ (_array_) con tres valores: la cantidad en soles, pesos mexicanos y pesos chilenos