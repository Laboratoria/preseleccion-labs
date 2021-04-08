# HTML basics

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `60min`

## Objetivos de Aprendizaje

- Entender qué es HTML
- Aprender la sintaxis básica de HTML.
- Conocer la estructura de los elementos HTML y las etiquetas mas populares.

## El documento HTML

HTML (HyperText Markup Language) no es un lenguaje de programación,
es un lenguaje de marcado que es utilizado para crear la estructura
de un sitio web. Para crear este sitio, se empieza creando
un documento en formato HTML. Esto es muy parecido a crear un documento
con formato word, excel o powerpoint.

{% spoiler %}

Si quieres saber más revisa su [documentación en MDN](https://developer.mozilla.org/es/docs/Learn/HTML/Introduction_to_HTML/Getting_started)

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

Los elementos de HTML son las etiquetas, caracterizados por los signos `<` y `>`.
La mayoría de los elementos requieren una etiqueta de apertura y otra de cierre.

Así, el primer elemento que vamos a necesitar es el propio elemento HTML, que es donde
va **todo el HTML** de su archivo, y puede agregarlo abriéndolo con `<html>` y cerrándolo con `</html>`.

```html
<!DOCTYPE html>
<html>

</html>
```

{% spoiler %}
**ALERTA:** `<!DOCTYPE html>` es una declaración y no una etiqueta HTML!
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

El elemento `title` define el título del documento que se muestra
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

{% next "Comentarios" %}

### Comentarios

Los _comentarios_ permitem dejar notas sobre su código, su funcionalidad o indicar
los cambios necesarios para el futuro para las personas que leen o editan su código.

Se visualizan así:

```html
<!-- This is a comment -->
```

Cualquier valor entre `<!--` y `-->` no se mostrará en su sitio web y no afectará el
funcionamiento o la estructura de la página. Se deja como mensaje a las personas
que leen y editan el HTML.

{% next "Elementos" %}

## Elementos populares

Un elemento muy comun es el elemento de _heading_ `h1` (encabezado).
Hay 6 niveles `h1` hasta `h6`, sendo `h1` el nivel de sección más alto o más importante.

```html
<h1>Este es heading 1</h1>
<h2>Este es heading 2</h2>
<h3>Este es heading 3</h3>
<h4>Este es heading 4</h4>
```

{% spoiler %}
Recuerde, todo lo que desea que se muestre en su página web
debe ir entre las etiquetas de apertura `<body>` y de cierre `</body>`.
{% endspoiler %}

Otro elemento es de _párrafo_ `p`, que comienza con la etiqueta de inicio `<p>`
y termina con la etiqueta de finalización `</p>`. El texto que se encuentra
entre las etiquetas de apertura y de cierre es el contenido del elemento.

```html
<p>Esto es un párrafo</p>
```

![El elemento `p`](https://user-images.githubusercontent.com/25912510/35747217-7bb85acc-0817-11e8-9248-5b00951cf963.png)

{% spoiler %}
Testea añadir párrafos y encabezados de varios niveles en su código,
pero recuerde que todo lo que desea que se muestre en su página web
debe ir entre las etiquetas de apertura `<body>` y de cierre `</body>`.

Existen muchos más elementos y etiquetas HTML, que aprenderás en su momento.
{% endspoiler %}

### Formato de texto

Si escribe un párrafo, es posible que desee formatear una palabra o una frase, por ejemplo:

> "HTML **no es** un lenguaje de programación,
> es un **_lenguaje de marcado_** que es utilizado para crear la estructura
> de un _sitio web_. Para crear este sitio, se empieza creando
> un documento en formato HTML."

Una forma de poner cualquier texto en negrito o cursivo es utilizando
las etiquetas `strong` y `em`.

```html
<p> HTML <strong>no es</strong> es un lenguaje de programación,
es un <strong><em>lenguaje de marcado</em></strong> que es utilizado para crear la estructura
de un <em>sitio web</em>. Para crear este sitio, se empieza creando
un documento en formato HTML.
</p>
```

{% spoiler %}
Testea formatar palavras y párrafos.
Rero recuerde que todo lo que desea que se muestre en su página web
debe ir entre las etiquetas de apertura `<body>` y de cierre `</body>`.
{% endspoiler %}

{% next "Atributos" %}

## Atributos HTML

Los atributos contienen información extra sobre el elemento y son escritos
en _las etiquetas de inicio._ El valor del atributo sigue después del signo `=` y
es envuelto en comillas, seguiendo esa estructura:

```html
<etiqueta atributo="valor del atributo "></etiqueta>
```

[ Poner texto para ejemplos de href y de img ]

> Puede leer más sobre atributos en ese [link aqui](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started#attributes)

```html
<p>Puede leer más sobre atributos en ese <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started#attributes">link aqui</a>.</p>
```

[ explicar sobre la tag meta y el atributo charset ]