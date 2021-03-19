# Edad en segundos

## Enunciado

Crea una página web que solicite a la usuaria su edad **en años** utilizando `window.prompt()`,
y pinte su edad **en segundos** en la pantalla utilizando `document.write()`.

## Análisis y lista de tareas

Para llevar a adelante este reto necesitaremos completar las siguientes tareas:

- Crear un archivo `index.html`.
- Crear la estructura de nuestra página web dentro de nuestro de `index.html`.
- Crear un archivo `app.js`.
- Preguntar la edad por medio del método `window.prompt()`.
- Convertir la edad ingresada en segundos.
- Enlazar la funcionalidad `javascript` con la página `html`.
- Mostrar el resultado en la página web por medio del método `document.write()`


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

Cambiamos el contenido de la etiqueta `<title>` con el texto `Edad en segundos`
```html
    <title>Edad en segundos</title>
```

Y crearemos dentro de la etiqueta `<body>` un heading principal (etiqueta `<h1>`),
que diga _Coloca tu edad en años_.
```html
  <body>
    <h1>Coloca tu edad en años<h1/>
  </body>
```

{% spoiler %}
Revisa el resultado en tu navegador, debería ser algo parecido a esto
[FIXME: screenshot]
{% endspoiler %}

{% next "Funcionalidad JS" %}


### Crea un archivo `app.js`

[FIXME: video o screenshots o gif de como crear un archivo en el navegador de archivos]

### Crea tu _prompt_ y guarda el valor retornado en una variable

{% spoiler %}
El método `window.prompt` de la web, es una función que toma un único argumento obligatorio,
la pregunta a realizar y retorna el valor ingresado por la usuaria.

Al ejecutarse esta función muestra en pantalla un diálogo con la pregunta y una caja de texto
para que la usuaria complete.

[FIXME screenshot]

Si quieres saber más sobre el método `window.prompt` revisa su [documentación en MDN](https://developer.mozilla.org/es/docs/Web/API/Window/prompt)
{% endspoiler %}

```js
const edad = prompt('¿Cuál es tu edad?');
```

### Integrar la funcionalidad `javascript` con la página `html`

Si tu recargas la página, verás que nada ha cambiado y el `window.prompt` nunca se muestra.

Esto es porque el archivo `index.html` nunca está llamando a la funcionalidad
`javascript` especificada en el archivo `app.js`.

Para ello necesitamos importar el archivo `app.js` dentro de nuestro etiqueta `<body>`:

```html
  <script type="text/javascript" src="app.js"></script>
```

{% spoiler %}
Valida que la variable `edad` tiene el valor ingresado por la usuaria, usando
`console.log`

```js
console.log(edad);
```

[FIXME: video ver valores de variables en la consola]
{% endspoiler %}

### Convierte la edad a segundos

Dado que dentro de un año existe **365** días, y cada día tiene **24** horas, y que cada
hora cuenta con **60** minutos y cada minuto con **60** segundos, entonces convertimos
los años en segundos siguiendo esa lógica:

```js
const edadEnSegundos = edad * 365 * 24 * 60 * 60;
```

{% spoiler %}
Valida que la variable `edadEnSegundos` tiene el valor calculado, usando
`console.log`

```js
console.log(edadEnSegundos);
```
{% endspoiler %}

### La imprimimos en pantalla

Para escribir directamente un contenido dentro de nuestra página web, usaremos
el método `document.write()` en nuestro archivo `app.js`.

Si quieres saber más puedes revisar su
[documentación en MDN](https://developer.mozilla.org/es/docs/Web/API/Document/write).

```js
document.write("Tu edad es " + edad + ", en segundos sería " + edadEnSegundos);
```

## Cierre ? hablar de conversion automatica de tipos de datos ????
