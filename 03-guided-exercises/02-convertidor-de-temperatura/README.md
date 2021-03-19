# Convertidor de temperatura

## Enunciado

Crea una página web que pida al usuario la temperatura en grados Celsius (°C),
utilizando `prompt()`, y devuelva, en la consola, la temperatura en grados
Fahrenheit (°F) utilizando `console.log()`.
La fórmula matemática para pasar de °C a °F es: `T(°F) = ( T(°C) × 1.8 ) + 32`.

## Análisis y lista de tareas

Para llevar a adelante este reto necesitaremos completar las siguientes tareas:

- Crear un archivo `index.html`.
- Crear la estructura de nuestra página web dentro de nuestro `index.html`.
- Crear un archivo `app.js`.
- Integrar la funcionalidad `javascript` con la página `html`
- Preguntar la temperatura en Celsius (°C) por medio del método `window.prompt()`.
- Convertir la temperatura en grados Fahrenheit (°F).
- Mostrar el resultado en la consola por medio del método `console.log()`

{% next "Comencemos" %}

## Crea un archivo `index.html`

[FIXME: video o screenshots o gif de como crear un archivo en el navegador de archivos]

## Crea la estructura de la página web

### Creamos la estructura básica de cualquier documento `html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
  </head>
  <body>

  </body>
</html>
```

#### ... y la personalizamos un poco

Cambiamos el contenido de la etiqueta `<title>` con el texto `Convertidor de temperatura`

```html
    <title>Convertidor de temperatura</title>
```

Y crearmos dentro de la etiqueta `<body>` un heading principal (etiqueta `<h1>`),
que diga _Coloca la temperatura en grados Celsius (°C)_.

```html
  <body>
    <h1>Coloca la temperatura en grados Celsius (°C)<h1/>
  </body>
```

{% spoiler %}
Revisa el resultado en tu navegador, debería ser algo parecido a esto
[FIXME: screenshot]
{% endspoiler %}

{% next "Funcionalidad JS" %}

## Crea un archivo `app.js`

[FIXME: video o screenshots o gif de como crear un archivo en el navegador de archivos]

## Crea tu _prompt_ y guarda el valor retornado en una variable

{% spoiler %}
El método `window.prompt` de la web, es una función que toma un único argumento obligatorio,
la pregunta a realizar y retorna el valor ingresado por la usuaria.

Al ejecutarse esta función muestra en pantalla un diálogo
con la pregunta y una caja de texto para que la usuaria complete.

[FIXME screenshot]

Si quieres saber más sobre el método `window.prompt`
revisa su [documentación en MDN](https://developer.mozilla.org/es/docs/Web/API/Window/prompt)
{% endspoiler %}

```js
const temperaturaCelsius = prompt('¿Cuál es la temperatura en Celsius?');
```

### Integrar la funcionalidad `javascript` con la página `html`

Si tu recargas la página, verás que nada ha cambiado
y el `window.prompt` nunca se muestra.

Esto es porque el archivo `index.html` nunca está llamando a la funcionalidad
`javascript` especificada en el archivo `app.js`.

Para ello necesitamos importar el archivo `app.js` dentro de nuestro etiqueta `<body>`:

```html
  <script type="text/javascript" src="app.js"></script>
```

{% spoiler %}
Recargas la página y ahora verás que el `window.prompt` se muestra.
{% endspoiler %}

## Convierte la temperatura Celsius (°C) a grados Fahrenheit (°F)

Ahora que tenemos la temperatura en grados Celsius guardada en la variable `temperaturaCelsius`,
vamos a convertirla con la fórmula matemática:
`T(°F) = ( T(°C) × 1.8 ) + 32`.

```js
const temperaturaFahrenheit = (temperaturaCelsius*1.8) + 32;
```

## La imprimimos en la consola

Para mostrar un contenido dentro de la consola, usaremos
el método `console.log()` en nuestro archivo `app.js`.

```js
console.log("La temperatura en Fahrenheit es " + temperaturaFahrenheit);
```

{% spoiler %}
Recargas la página y ahora verás que el `window.prompt` se muestra.
{% endspoiler %}

### Abre la consola y averigua su valor

[FIXME: video o screenshots o gif de como abrir la console en el navegador]

{% spoiler %}
Como vimos anteriormente, tenemos varios tipos de datos y tenemos
que tomar cuidado. El método `window.prompt` devuelve una `string`,
así para evitar conflictos, vamos a mejorar el código y
convertir este dato en un tipo `number` con el metodo `parseInt()`.
{% endspoiler %}

### Convertir el dato a number

Pon el `prompt` dentro del metodo `parseInt()` en la variable `temperaturaCelsius`:

```js
const temperaturaCelsius = parseInt(prompt('¿Cuál es la temperatura en Celsius?'));
```

{% spoiler %}
Si quieres saber más sobre el método `parseInt` revisa su [documentación en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

El archivo `app.js` debería ser algo parecido a esto
[FIXME: screenshot]
{% endspoiler %}
