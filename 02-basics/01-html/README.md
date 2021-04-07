# HTML

## El documento HTML

HTML (HyperText Markup Language) no es un lenguaje de programaciónes,
es un lenguaje de marcado que es utilizado para crear la estructura
de un sitio web. Para crear este sitio, se empieza creando
un documento en formato HTML. Esto es muy parecido a crear un documento
con formato word, excel o powerpoint.

{% spoiler %}

Si quieres saber más revisa su [documentación en MDN](https://developer.mozilla.org/es/docs/Web/HTML)

{% endspoiler %}

{% next "Comencemos" %}

### Primeros Pasos

[ FIXME: Las partes de crear un archivo en CS50 ]

### Sintaxis básica

La primera línea que necesita en un archivo HTML es `<!DOCTYPE html>`.
Esto le permite al navegador (como Chrome, Firefox, Internet Explorer o Safari)
saber que el tipo de este documento es HTML y no es solo un archivo de texto normal.

```html
<!DOCTYPE html>
```

Los elementos de HTML son las etiquetas, caracterizados por los signos "<" y ">".
La mayoría de los elementos requieren una etiqueta de apertura y otra de cierre.

Así, el primer elemento que vamos a necesitar es el propio elemento HTML, que es donde
va **todo el HTML** de su archivo, y puede agregarlo abriéndolo con `<html>` y cerrándolo con `</html>`.

```html
<!DOCTYPE html>
<html>

</html>
```

{% spoiler %}
ALERTA: `<!DOCTYPE html>` es una declaración y no una etiqueta HTML!
{% endspoiler %}

Entre las etiquetas de html, vamos a tener las etiquetas de apertura y cierre de `head`
y entre ellas otras dos etiquetas de `meta` y `title`

```html
  <head>
    <meta charset="utf-8" />
    <title></title>
  </head>
```

{% spoiler %}
En la etiqueta de `head` es donde contiene la información sobre la página,
llamadas de *metadatos*.

El elemento `meta` no hay etiqueta de cierre y representa [metadatos](https://developer.mozilla.org/es/docs/Glossary/Metadata)

El elemento `title` (<title>) define el título del documento que se muestra
en la barra de título del navegador o en la pestaña de una página
{% endspoiler %}

Por fin, después de la etiqueta de **cierre** de `head`,
vamos a poner el elemento `body` que contiene todo el _contenido_ de un documento HTML

```html
  <body>

  </body>
```

{% spoiler "Pista" %}

El código al final deve estar parecido con eso:

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

**ATENCIÓN** con los espacios en el inicio de las líneas de `head`, `meta`, `title` y `body`.

Eso es **_indentación de código_** y es usada para facilitar la lectura del código.

Darse cuenta de que ese mismo código sin indentación es muy más dificil de leer y entender:

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

{% endspoiler %}

## Formato de texto

## Elementos populares

## Atributos HTML
