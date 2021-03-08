# Javascript basics

# Valores, tipos de datos y operadores

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `60min`

## Objetivos de Aprendizaje

- Entender qué se entiende por _values_ (valores) en JavaScript.
- Conocer los diferentes _data types_ (tipos de datos) en JavaScript.
- Aprender cómo combinar y transformar valores con operadores en JavaScript.

***

El texto a continuación se basa en gran medida, con ciertos ajustes, en el
capítulo 1 de [Eloquent JavaScript](http://eloquentjavascript.net/), de Marijn
Haverbeke, 2014. Traducción en [Español](http://hectorip.github.io/Eloquent-JavaScript-ES-online/chapters/01_values.html)
disponible gracias a [hectorip](https://github.com/hectorip).

## Vivimos en un mundo de Data

En el 2010, el entonces CEO de Google, Eric Schmidt, mencionaba que
cada dos días creamos tanta data como lo hicimos desde los inicios de la
civilización hasta el 2003 ([fuente](https://techcrunch.com/2010/08/04/schmidt-data/)).
Las compras que haces son data, tus notas en el colegio son data, tu perfil de
Facebook está minado de data. Tus búsquedas en Google, las señales de GPS de tu
celular, los videos que miras y subes a YouTube, las imágenes que ves en
Instagram, los registros del clima, los corrreos electrónicos ... todo eso es
data!

La data es crucial porque nos ayuda a tomar decisiones y a entender el mundo que
nos rodea. La data es la base de la información, que a su vez es la base del
conocimiento, y el conocimiento se traduce en mejores decisiones. Desde
decisiones simples, como elegir un lugar para almorzar en base a los reviews de
Yelp; hasta decisiones complejas, como predecir si una mujer está embarazada,
según su historial de compra en un hipermercado ([fuente](http://www.forbes.com/sites/kashmirhill/2012/02/16/how-target-figured-out-a-teen-girl-was-pregnant-before-her-father-did/#1a3ac4)).

{% next "Tipos de datos" %}

## Tipos de datos

Las computadoras son un gran recurso para trabajar con grandes cantidades de
datos. De hecho, en el mundo de las computadoras solo existen datos. Con las
computadoras podemos leer data, modificar data y crear nueva data. Toda la data
es almacenada como secuencias largas de los famosos _bits_ - esas secuencias de
unos y ceros que viste en Matrix.

Las computadoras manejan billones de bits. Para hacer más fácil el manejo de
grandes cantidades de bits, los podemos dividir en "pedazos" que representan
piezas de información. En un entorno JavaScript, estos pedazos son llamados
_**values**_ (valores en español). Cada _value_ tiene un _data type_ (tipo de
dato) que determina su rol. En JavaScript existen cinco (5) tipos de datos
primitivos:

1. `number` (número).
2. `string` (cadena).
3. `boolean` (booleano).
4. `undefined` (indefinido).
5. `null` (nulo).

La data y los tipos de datos forman las bases de cualquier lenguaje de
programación. Nos permiten organizar información y determinar cómo ejecutar el
programa. En esta lección aprenderás a definir y manipular estos tipos de datos.

{% next "Tipos de datos: Numbers" %}

## 1. Numbers

Los _values_ de tipo `number` son, sin sorpresa alguna, valores numéricos. Es
decir, pedazos de data que representan información numérica se representan con
el tipo `number`. Esto incluye números positivos, negativos, enteros y
decimales. Además, el tipo de datos `number` tiene tres valores simbólicos:
`+Infinity`, `-Infinity` y `NaN` (no-un-número).

Veamos varios ejemplos. Abre tu consola (recuerda que lo haces haciendo click
con el botón derecho del mouse -> inspect -> console) y escribe los siguientes
números. Al hacerlo, la consola te regresa el número de vuelta.

```js
13
// retorna: 13

-9.81
// retorna: -9.81
```

También puedes hacer uso de la notación científica para números muy grandes o
muy pequeños, añadiendo una "e" de "exponente", seguido por el exponente del
número:

```js
5e10
// retorna: 50000000000

-2.998e8
// retorna: -299800000
```

### Operadores Aritméticos

Lo principal que se hace con los números es aritmética. Sigamos explorando el
comportamiento del tipo de dato `number` en tu consola. Escribe el siguiente
ejemplo en tu consola y confirma que tienes el mismo resultado:

```js
100 + 4 * 11
// retorna: 144
```

Los símbolos `+` y `*` son llamados _operators_ (operadores). El primero
representa la suma y el segundo la multiplicación. Al poner un operador entre
dos valores, se aplicará la operación a esos valores y producirá un nuevo valor.
Como ves, la multiplicación ocurre primero. Pero como en matemáticas, puedes
cambiar esto encerrando en paréntesis la suma.

```js
(100 + 4) * 11
// retorna: 1144
```

Para la resta existe el operador `-`, y la división se puede hacer con el
operador `/`. Veamos más ejemplos (recuerda hacerlos en tu consola también!):

```js
12345 / 250
// retorna: 49.38

1234 + 57 * 3 - 31 / 4
// retorna: 1397.25

100 / 0
// retorna: Infinity

100 / -0
// retorna: -Infinity

1000 * Infinity
// retorna: Infinity

0/0
// retorna: NaN

Infinity - Infinity
// retorna: NaN
```

También existe un operador aritmético más, que podrías no reconocer
inmediatamente. El símbolo `%` es usado para representar la operación _residuo_.
X % Y resulta en el residuo de dividir X entre Y. Por ejemplo, 314 % 100 produce
14 (porque 100 multiplicado por 3 + 14 = 314), y 144 % 12 da 0 (porque 12
multiplicado por 12 + 0 = 144). Verás a menudo este operador referido como
_módulo_, aunque técnicamente residuo es más preciso.

```js
5 % 3
// retorna: 2

7 % 2
// retorna: 1
```

{% next "Tipos de datos: Strings" %}
