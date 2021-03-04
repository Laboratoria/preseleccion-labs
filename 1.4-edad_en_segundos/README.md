# Edad en segundos

## Enunciado

Crea una página web que solicite al usuario su edad **en años** utilizando `prompt()`,
y pinte su edad **en segundos** en la pantalla utilizando `document.write()`.

## Análisis y lista de tareas

Para llevar a adelante este reto necesitaremos completar las siguientes tareas:

- Crear un archivo `index.html`.
- Crear la estructura de nuestra página web dentro de nuestro de `index.html`.
- Crear un archivo `app.js`.
- Preguntar la edad por medio del método `prompt()`.
- Convertir la edad ingresada en segundos.
- Enlazar la funcionalidad `javascript` con la página `html`.
- Mostrar el resultado en la página web por medio del método `document.write()`


{% next "Comencemos" %}


## Crear un archivo `index.html`

[video o screenshots o gif de como crear un archivo en el navegador de archivos]

{% next "Estrucutura html" %}


## Crear estructura de la página web

### 1. Creamos la estructura básica de cualquier documento `html`

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

### 2. La personalizamos un poco

Cambiamos el contenido de la etiqueta `<title>` con el texto `Edad en segundos`
```html
<title>Edad en segundos</title>
```

Y crearmos dentro de la etiqueta `<boby>` un heading principal (etiqueta `<h1>`),
que diga _Coloca tu edad en años_.
```html
  <body>
    <h1>Coloca tu edad en años<h1/>
  </body>
```