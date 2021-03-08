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


