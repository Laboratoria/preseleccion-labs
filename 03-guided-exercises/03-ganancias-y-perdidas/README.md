# Ganancias y Perdidas

## Enunciado

Crear un programa que pide los ingresos, los costos y el % de impuestos, y calcula la ganancia después de impuestos. Debe imprimir el resultado en la web con el símbolo $ adelante.

## Análisis y lista de tareas

Para llevar a adelante este reto necesitaremos completar las siguientes tareas:

- Crear un archivo `index.html`.
- Crear la estructura de nuestra página web dentro de nuestro de `index.html`.
- Crear un archivo `app.js`.
- Preguntar ganancias, costos y porcentaje de impuestos por medio del método `window.prompt()`.
- Calcular el resultado OPERACION AQUI
- Enlazar la funcionalidad `javascript` con la página `html`.
- Mostrar el resultado en la página web por medio del método `document.write()`

{% next "Comencemos" %}

## Crea un archivo `index.html`

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
  <body></body>
</html>
```

#### ... y la personalizamos un poco

Cambiamos el contenido de la etiqueta `<title>` con el texto `Ganancias y perdidas`

```html
<title>Ganancias y perdidas</title>
```

Y creamos dentro de la etiqueta `<boby>` un heading principal (etiqueta `<h1>`),
que diga _Coloca tus ganancias, costos y porcentaje de impuestos_.

```html
  <body>
    <h1>Coloca tus ganancias, costos y porcentaje de impuestos<h1/>
  </body>
```

{% spoiler %}
Revisa el resultado en tu navegador, debería ser algo parecido a esto
[FIXME: screenshot]
{% endspoiler %}

{% next "Funcionalidad JS" %}
