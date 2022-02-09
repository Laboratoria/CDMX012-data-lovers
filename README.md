# Data Lovers

## Índice

- [1. Preámbulo](#1-preámbulo)
- [2. Resumen del proyecto](#2-resumen-del-proyecto)
- [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
- [4. Consideraciones generales](#4-consideraciones-generales)
- [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
- [6. Hacker edition](#6-hacker-edition)
- [7. Consideraciones técnicas](#7-consideraciones-técnicas)
- [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)

---

# 1. Resumen del proyecto

En este proyecto **construirás una _página web_ para visualizar un
_conjunto (set) de datos_** que se adecúe a lo que descubras que tu usuario
necesita.

Como entregable final tendrás una página web que permita **visualizar la data,
filtrarla, ordenarla y hacer algún cálculo agregado**. Con cálculo agregado
nos referimos a distintos cálculos que puedes hacer con la data para mostrar
información aún más relevante para los usuarios (promedio, el valor máximo
o mínimo, etc).

Esta vez te proponemos una serie de datos de diferentes _temáticas_ para que
explores y decidas con qué temática te interesa trabajar. Hemos elegido
específicamente estos sets de datos porque creemos que se adecúan bien a esta
etapa de tu aprendizaje.

Una vez que definas tu área de interés, buscar entender quién es tu usuario
y qué necesita saber o ver exactamente; luego podrás construir la interfaz que
le ayude a interactuar y entender mejor esos datos.

El objetivo principal de este proyecto es que aprendas a diseñar y construir una
interfaz web donde se pueda visualizar y manipular data, entendiendo lo que el
usuario necesita.

# 2. Final project image

<img src=""/>
<p align="center"><strong>Figure 1.</strong> Final project image</p>
<br/>

# 3. UX research

Studio Ghibli es un estudio de animación japonés, conocido por sus largometrajes
animados como **Mi vecino Totoro**, **El viaje de Chihiro** o
**El castillo ambulante**, entre otros grandes éxitos.

Las animaciones tienen gran acogida a nivel mundial y algunas han recibido
varias nominaciones y premios. De todo este fandom hay un grupo que desea poder
interactuar y ver la información de las animaciones y sus personajes.

## Hallazgos

Para entender mejor qué información podrían necesitar nuestras usuarias,
hicimos una rápida investigación (research) y estos son algunos de los
hallazgos.

- Studio Ghibli tiene varias animaciones, para nuestras usuarias es importante
  saber cuántas y cuáles son.
- Las animaciones tienen directorxs y productorxs. Estxs son las mentes detrás
  de una gran animación. En Studio Ghibli hay directorxs y productorxs que han
  colaborado en la creación de más de una animación. Por ello, es importante
  para nuestra usuaria poder conocerlos y saber cuántas y cuáles son las
  animaciones a las que dieron "vida".
- Las animaciones tienen información relevante para nuestras usuarias, como
  descripción, fecha de lanzamiento, peso, director, productor y personajes.
- Cada animación tiene sus personajes, para nuestras usuarias es importante
  saber cuántos y cuáles son
- Los personajes tienen características únicas que la usuaria quiere saber, como
  nombre, edad, género, especie, etc.
- Las animaciones tienen locaciones y vehículos únicos en cada una. Para
  nuestras usuarias es importante saber cuáles son.
- Adicionalmente a esta información, para nuestras usuarias es importante poder
  ver los tipos de especies que hay en cada animación.

# 4. Historias de usuario

## Historia de usuario #1

    Yo como usuario que es fan de Studio Ghibli quiero visualizar las películas de Studio Ghibli que han sido producidas

    Criterios de aceptación

    - Al ingresar a la página ya se puede visualizar todas los carteles de las películas del estudio
    - Cada elemento que muestre los carteles de películas también contenga nombre y año de estreno

    Definición de terminado

    - Cumplir con los criterios de aceptación
    - La vista ya contiene diseño CSS
    - Pagina responsiva
    - Test usabilidad
    - El código esta desplegado en GitHub

Prototipo de baja fidelidad

  <img src="images\prototipoBajaFidelidad1.jpg"/>
        <p align="center"><strong>Figura 2.</strong> Prototipo de baja fidelidad</p>
        <br/>

4.  Pruebas de usabilidad

    Para la prueba de usabilidad del prototipo 1 se entrevisto a diez usuarias. Las preguntas realizadas fueron las siguientes:

    1. ¿Consideraras que el diseño de la página facilita la busqueda de la información?
    2. ¿Hay algun elemento dentro de la página que te cause confusion?
    3. ¿Tienes algun otro comentario?

    De las respuestas obtenidas se llegaron a las siguientes conclusiones

    - En el prototipo se propone poner el nombre de la vista 'HOME'. Sin embargo, esto causa confusion sobre su significado.
    - Las usuarias recomendaron evitar un exceso de espacio vacio en los costados de la página
    - Se cuestiono si era relebante mostrar información sobre el staff que trabajo en la realización de las películas.

    Aparte de los comentarios anteriores, durante en feedback en la ceremonia de demos se sugirió mostrar la información de una forma más directa, para que fuera lo primera que viera la usuaria al ingresar a la página.

    Con base en los resultados de las pruebas de usabilidad y feedback se realizaron los siguientes cambios:

    - Eliminar el 'HOME'
    - No se dara la opción de filtar por staff, ya que aunado a los comentarios de las pruebas de usabilidad, la base de datos de Studio Ghibli no contiene datos suficientes para mostrar en pantalla.
    - La información sera desplegada en la primera vista de la página, para permitir filtrarla se agregará formularios para filtrar y ordenar, además de una barra de busqueda para busquedas más puntuales.

5.  Prototipo de alta fidelidad

<img src="images\Movilemovil.png"/>
    <p align="center"><strong>Figure 4.</strong> Prototipo movil</p>
    <br/>
<img src="images\TablettabletLan.png"/>
    <p align="center"><strong>Figure 5.</strong> Prototipo tablet</p>
    <br/>
<img src="images\Desktop Lan-desktop.png"/>
    <p align="center"><strong>Figure 6.</strong> Prototipo Desktop</p>
    <br/>

## 6. Pistas, tips y lecturas complementarias

### Primeros pasos

Cuando ya estés lista para codear, te sugerimos empezar de esta manera:

1. Una de las integrantes del equipo debe realizar un :fork*and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) del repo de tu cohort,
   tus \_coaches* te compartirán un _link_ a un repo y te darán acceso de lectura
   en ese repo. La otra integrante del equipo deber hacer un fork **del
   repositorio de su compañera** y
   [configurar](https://gist.github.com/BCasal/026e4c7f5c71418485c1) un `remote`
   hacia el mismo.
2. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
3. 📦 Instala las dependencias del proyecto con el comando `npm install`. Esto
   asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
4. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
5. Para ver la interfaz de tu programa en el navegador, usa el comando
   `npm start` para arrancar el servidor web y dirígete a
   `http://localhost:5000` en tu navegador.
6. A codear se ha dicho! :rocket:
