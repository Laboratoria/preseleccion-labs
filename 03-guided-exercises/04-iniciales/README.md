# Iniciales

## Enunciado

Crea un programa que pide el nombre y apellido al usuario. El
usuario debe ingresar dos palabras separadas por un espacio, por ejemplo:
"Ana Martinez". El programa debe devolver las iniciales **en mayúsculas**.
Veamos unos ejemplos: "ana martinez" y "Ana Martinez" devuelven las iniciales
"AM". "Michelle Seguil" y "michelle seguil" devuelven "MS"

## El programa

[FIXME: um video o GIF de como será el programa final para que pueda visualizar]

## Análisis y lista de tareas

Para llevar a adelante este reto necesitaremos completar las siguientes tareas:

- Crear un archivo `index.html`.
- Crear la estructura de nuestra página web dentro de nuestro de `index.html`.
- Crear un archivo `app.js`.
- Integrar el archivo `app.js` con la página `html`.
- Preguntar el nombre y apellido por medio del método `window.prompt()`.
- Obtener las iniciales.
- Convertir las iniciales a mayúsculas.
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

Cambiamos el contenido de la etiqueta `<title>` con el texto `Iniciales`

```html
    <title>Iniciales</title>
```

Y crearmos dentro de la etiqueta `<body>` un heading principal (etiqueta `<h1>`),
que diga _Coloca las iniciales_.

```html
  <body>
    <h1>Coloca las iniciales</h1>
  </body>
```

{% spoiler %}
Revisa el resultado en tu navegador, debería ser algo parecido a esto
[FIXME: screenshot]
{% endspoiler %}

{% next "Funcionalidad JS" %}

## Crea un archivo `app.js`

[FIXME: video o screenshots o gif de como crear un archivo en el navegador de archivos]

### Integra con la página `html`

El archivo `index.html` no está enlazado a el archivo `app.js`
y no reconocerá las funcionalidades `javascript`

Para ello necesitamos importar el archivo `app.js` dentro de nuestro etiqueta `<body>`:

```html
  <script type="text/javascript" src="app.js"></script>
```

## Crea tu _prompt_ y guarda el valor retornado en una variable

{% spoiler %}
El método `window.prompt()` de la web, es una función que toma un único argumento obligatorio,
la pregunta a realizar y retorna el valor ingresado por la usuaria.

Al ejecutarse esta función muestra en pantalla un diálogo
con la pregunta y una caja de texto para que la usuaria complete.

[FIXME screenshot]

Si quieres saber más sobre el método `window.prompt()`
revisa su [documentación en MDN](https://developer.mozilla.org/es/docs/Web/API/Window/prompt)
{% endspoiler %}

```js
const nombre = prompt('¿Cuál es tu nombre y apellido?');
```

### Actualiza la pagina web, abra la consola y testea la variable

{% spoiler %}

[FIXME: video o screenshots o gif de como abrir la console en el navegador
o puede referirse al ejercicio 02 para ver como hacer]

En la consola, escriba la variable `nombre` y presione `enter`.
Deve aparecer el valor ingresado en el _prompt_.

{% endspoiler %}

## Obtener las iniciales

### Obteniendo la inicial del nombre

Para obtener la primera inicial, vamos a usar el método `slice()`.

{% spoiler "Pista" %}
El método `slice()` toma dos argumentos y sirve para cortar la `string`.
El primero es donde vas a comenzar a cortar y el segundo donde vas a terminar.

ATENCIÓN: La posición 0 es la *primera* letra de la _string_.
La posición  1, es la segunda letra y así sucesivamente.

Testea en su consola el é y cambia las posiciones como quiera para entender:

```js
"Ana Martinez!".slice(1,5)
```

Así, para obtener la primera inicial, vamos a usar:

```js
const primeraInicial = nombre.slice(0,1);
```

Si quieres saber más sobre el método `slice()` para _strings_
revisa su [documentación en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
{% endspoiler %}

```js
const primeraInicial = nombre.slice(0,1);
```

### Obteniendo la inicial del apellido

Solo con el é `slice()` no es possible obtener la segunda inicial,
por qué su posición no es fixa...

Por ejemplo, para el nombre "Ana Martinez", la segunda inicial es la posición 4,
pero para "Michelle Seguil" es la posición 9.

¿Como podemos hacer, entonces?

Vamos a:

#### Buscar la posición de la segunda inicial

{% spoiler "Pista"%}
Una condición común es que la primera letra del apellido es después del espacio.
Así, vamos encuentrar la posición del espacio primero, pois sabemos que
la posición de la segunda inicial es la seguiente.

1.1 Posición del espacio

Vamos utilizar el método `indexOf()` que toma un argumento y sirve para encuentrar
la posición del argumento dentro de la _string_. La posición es llamada de `index`.

Testea en su consola el método y cambia el argumento como quiera:

```js
//"Ana Martinez!" es la string dónde vamos a procurar la posición del argumento
// el argumento es el caractere " " (espacio)

"Ana Martinez!".indexOf(" ")
```

ATENCIÓN: La posición 0 es la *primera* letra de la _string_.
La posición  1, es la segunda letra y así sucesivamente.

Si quieres saber más sobre el método `indexOf()` para _strings_
revisa su [documentación en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)

1.2 Posición de la segunda inicial

La posición de la segunda inicial es la seguiente del espacio, portanto es:

```js
const posicionSegundaInicial = "Ana Martinez".indexOf(" ") + 1
```

Como queremos hacer esto con el nombre del prompt,
vamos a cambiar el ejemplo por la variable

```js
const posicionSegundaInicial = nombre.indexOf(" ") + 1
```

{% endspoiler %}

#### Obtener la segunda inicial

{% spoiler "Pista"%}
Ahora que ya tenemos la posición (index) de la segunda inicial,
vamos a usar el é slice novamente..

Vamos a cortar la _string_ comenzando en la posición de la segunda inicial y
terminando un caractere después:

```js
const segundaInicial = nombre.slice(posicionSegundaInicial, posicionSegundaInicial + 1)
```

{% endspoiler %}

```js
const posicionSegundaInicial = nombre.indexOf(" ") + 1
const segundaInicial = nombre.slice(posicionSegundaInicial, posicionSegundaInicial + 1)
```

## Las imprimimos en pantalla

Para escribir directamente un contenido dentro de nuestra página web, usaremos
el método `document.write()` en nuestro archivo `app.js`.

Si quieres saber más puedes revisar su
[documentación en MDN](https://developer.mozilla.org/es/docs/Web/API/Document/write).

```js
document.write("Tus iniciales son " + primeraInicial + segundaInicial);
```

Las iniciales ya aparecen en la pantalla.. pero puedo testear que cuando escribimos
un nombre como "ana martinez", las iniciales deberiam ser "AM" y no "am".
Entonces, vamos a convertir las iniciales a mayúsculas

### Convertir las iniciales a mayúsculas

Para convertir cualquer _string_ en mayúsculas, vamos a usar el método `toUpperCase()`
en las dos letreas iniciales

{% spoiler %}
El método `toUpperCase()` es una función que no toma un argumento,
y retorna toda la _string_ en mayúsculas.

Si quieres saber más sobre el método `toUpperCase()` revisa su [documentación en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)

{% endspoiler %}

```js
document.write("Tus iniciales son " + primeraInicial.toUpperCase() + segundaInicial.toUpperCase());
```
