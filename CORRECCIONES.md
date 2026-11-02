# Correcciones realizadas — SGCS Web (02/11/2026)

## Errores corregidos

- Se corrigieron todos los enlaces internos que apuntaban a un archivo inexistente (`herramientas_de_calidad.html`), así como las diferencias en las mayúsculas/minúsculas del nombre `Scrum_profundo.html`.
- Se reemplazaron diez menús duplicados por una navegación consistente. Las secciones aún no desarrolladas se muestran como tales y no enlazan a páginas falsas.
- Se eliminaron los `id="submenu"` duplicados y el código del menú que dependía de `window.event` implícito.
- Se creó `js/navegacion.js` y `css/navegacion.css`, compartidos por todas las páginas, con menú de clic, cierre al presionar Escape y `aria-expanded`.
- Se corrigió el JavaScript de las tarjetas de detalles en `aseguramiento_de_calidad.html`, que usaba variables no definidas; ahora pueden expandirse y contraerse.
- La encuesta inicia en el primer paso sin respuestas precargadas. El texto ahora refleja cuatro preguntas más la pantalla de resultados, el progreso comienza en 0 % y el botón de avanzar se desactiva si falta una respuesta.
- El botón «Ver comparador» de la encuesta ahora dirige a `cuadro_comparativo.html`.
- Se arreglaron los enlaces de las tarjetas de la página de inicio.
- Se añadieron nombres, asociaciones de etiqueta y validaciones `required` a los campos del formulario de contacto.
- El formulario ya no muestra «enviado correctamente» sin realizar una entrega. Como no existe un servidor de envío, prepara un mensaje `mailto:` y advierte que el envío debe confirmarse desde la aplicación de correo del usuario.
- Se retiraron los enlaces `href="#"` de redes sociales y apartados legales que aún no tienen destinos reales.
- Las tarjetas interactivas del ciclo de vida del software ahora admiten acceso mediante teclado.

## Limitaciones / pendientes

- El sitio es estático: para enviar correos sin depender de una aplicación de correo hay que implementar un backend o servicio de formularios.
- En `Formulario.html` se mantuvo la dirección preexistente `ues@contacto.com`; hay que sustituirla si no es la dirección real del proyecto.
- Las unidades US-02, US-06, US-07 y US-12 a US-15 no tienen páginas en el archivo original y permanecen marcadas como «en desarrollo».
- No se inventaron direcciones reales de Instagram o Facebook.
- Los íconos Lucide que se cargan desde `unpkg.com` requieren acceso a Internet.

## Validación ejecutada

- 11 archivos HTML revisados con verificación de enlaces locales, IDs duplicados, menú y funciones enlazadas.
- 11 archivos JavaScript: `node --check`, sin errores de sintaxis.
- 11 hojas CSS: `tinycss2`, sin errores de sintaxis de la hoja.
- Pruebas de interacción en JavaScript de la encuesta y botones «Ver detalles», correctas.
- No se pudo realizar una prueba visual completa en un navegador en este entorno.

## Cómo abrir

Abrir `index.html` o ejecutar un servidor web local en la carpeta `SGCS-web`, por ejemplo:

`python -m http.server 8000`

Luego abrir `http://localhost:8000`.
