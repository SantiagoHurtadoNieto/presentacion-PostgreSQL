# Revisión de fidelidad y calidad

## Alcance de la fuente

- Se inspeccionó el PDF completo: 32 páginas, de introducción a PostgreSQL hasta equivalencias Oracle–PostgreSQL y preguntas de sustentación.
- El bloque de administración se amplió con documentación oficial de PostgreSQL 18.
- La secuencia de la presentación reorganiza el temario por dependencias didácticas; no reproduce una diapositiva por página.
- Las diapositivas llevan referencia a la página o rango del PDF. `inventario_visual.md` registra las tablas, diagramas e interacciones.
- El PDF no incluye imágenes rasterizadas incrustadas. No se añadieron imágenes externas. Los esquemas y diagramas son HTML/CSS derivados de las relaciones y explicaciones textuales de la fuente.
- Los ejemplos INSERT originales de `departamentos` y `empleados`, y la definición íntegra de ambas tablas, están disponibles en secciones desplegables para mantener legible la secuencia sin perder las filas.

## Cobertura temática

| Tema de la guía | Ubicación |
|---|---:|
| PostgreSQL, SGBD, sublenguajes y arquitectura | 3–5 |
| Administración: memoria, tablespaces, roles y recursos | 6–9 |
| Vistas, sinónimos y catálogos de administración | 10–12 |
| psql, esquema y filas de ejemplo | 13–15 |
| Portabilidad Oracle–PostgreSQL y semántica de consultas | 16–24 |
| Aritmética y concatenación con NULL, predicados y operadores | 19-23, 28 |
| Funciones numéricas, de cadenas y agregados | 25–28 |
| Fechas y funciones de fecha | 29–30 |
| Conversiones y máscaras | 31–32 |
| JOIN, GROUP BY, HAVING, subconsultas, CASE y recursión | 33–44 |
| CREATE TABLE, restricciones, INSERT, UPDATE, DELETE y transacciones | 45–50 |
| Bloques, variables, tipos, SELECT INTO, control y NOTICE | 51–56 |
| Excepciones, RAISE y retroceso de cambios | 57–59 |
| Cursores manuales, SCROLL, refcursor y WHERE CURRENT OF | 60–62 |
| Funciones, parámetros, pruebas, catálogo y DROP FUNCTION | 63–66 |
| Procedimientos, equivalencias y preguntas de sustentación | 67–69 |

## Inconsistencias y precisiones observadas

- A partir de la observación del usuario, se añadieron siete diapositivas administrativas (6–12) después de arquitectura y antes de psql y el modelo. El bloque explica memoria, tablespaces, recursos, roles, vistas, sinónimos y catálogos exclusivamente desde el comportamiento de PostgreSQL.
- PostgreSQL no tiene objetos nativos `SYNONYM` ni una familia de vistas `DBA_*`; la presentación indica alternativas con esquemas/vistas y los catálogos `pg_catalog`, `information_schema` y `pg_stat_*`.
- La presentación contiene ahora 69 diapositivas y el guion distribuye 137 minutos. La secuencia existente de portabilidad se desplazó a las diapositivas 16–24.
- La secuencia retiene los conceptos de `SELECT/FROM/WHERE`, operadores de comparación, `BETWEEN`, `IN`, `LIKE`, `NULL` y precedencia `AND/OR`, pero ahora los explica con los ejemplos y matices del documento. El cierre propone un reto oral con respuestas desplegables.
- La distribución del guion es de 137 minutos: el bloque 16–24 conserva 15 minutos y el espacio final de preguntas tiene 8 minutos. Se corrigió el tiempo asignado al bloque JOIN para que el total de la tabla coincida con los tiempos por diapositiva.

1. La fuente muestra resultados de `CURRENT_DATE` y `TO_CHAR(CURRENT_DATE, ...)` como `2026-11-14`/`14/11/2026`. Esos resultados ilustran la fecha asumida por el documento; en ejecución dependen de la fecha del servidor. La presentación los identifica como ejemplos citados, no como resultado actual.
2. La fuente explica que `GREATEST` y `LEAST` ignoran NULL en PostgreSQL y se comportan distinto en Oracle; se conserva esa diferencia y se despliega junto con los ejemplos `DECODE`/`CASE` y `COLLECT`/`ARRAY_AGG`/`STRING_AGG`.
3. El documento define `INOUT` pero no proporciona una función demostrativa con ese modo. La presentación conserva la definición y no inventa un ejemplo ejecutable.
4. El documento describe `SCROLL` y `refcursor` sin un ejemplo completo de función que devuelva un `refcursor`. La presentación mantiene la explicación conceptual y etiqueta los fragmentos de cursor como tales.
5. Las tablas JOIN muestran 6/7/7/8/28 filas con los datos de ejemplo. Se revisaron contra siete empleados, cuatro departamentos, una persona sin departamento y un departamento sin empleados; esos conteos se preservan.

## Diseño y legibilidad

- Identidad editorial en azul PostgreSQL, cian, grafito y fondos claros; títulos sans-serif y SQL monoespaciado.
- Se usan tablas y filas planas para comparaciones. Los paneles de pestañas aparecen en interacciones solicitadas por el usuario; no se repiten tarjetas decorativas para cada concepto.
- Tras la revisión de proyección solicitada, se aumentaron los tamaños principales: cuerpo a 26 px, tablas a 23 px, código SQL a 22 px y títulos a 48 px en pantalla amplia. En pantallas medianas y estrechas se aplican escalas adaptadas.
- Se aprovechó el espacio libre de las diapositivas 4 y 6 con esquemas editoriales sobre rasgos de PostgreSQL y el recorrido de comandos `psql`. Sus etiquetas se limitan a información presente en las páginas 1 y 2 del PDF; no se incorporaron imágenes externas.
- La composición usa un lienzo 16:9, tamaño base 1600 × 900 y reglas responsive para ventanas estrechas. Los fragmentos extensos conservan desplazamiento dentro del bloque si superan el área disponible.
- No se utilizaron emojis ni ilustraciones no sustentadas.

## Funcionamiento

- Reveal.js está fijado a la versión 6.0.2 y se carga desde jsDelivr; las fuentes Manrope y DM Mono se solicitan a Google Fonts. Sin conexión, la presentación requiere disponibilidad de estas dependencias para mostrar el modo Reveal y las tipografías preferidas; el CSS conserva fuentes de respaldo.
- Interacciones incluidas: pestañas código/explicación, índice por secciones, pantalla completa, explorador de JOIN, pasos OPEN/FETCH/CLOSE y respuestas desplegables.
- No se publicó ni se desplegó la presentación.

## Control de calidad

- 69 diapositivas contadas después de combinar 11 pares temáticos cercanos e insertar el nuevo bloque de administración.
- Se comprobó la sintaxis JavaScript con `node --check` y se simuló la creación de diapositivas: 69 nodos para 69 entradas.
- Se debe abrir `index.html` en un navegador con acceso a internet para validar las interacciones Reveal.js y comprobar el ajuste visual en escritorio y pantalla estrecha antes de exponer.
- No se encontraron las skills solicitadas por nombre (`presentation-design`, `reveal`, `slide-quality-assessment`) en el catálogo habilitado para esta sesión. Se aplicaron las pautas disponibles de diseño de presentaciones y se documenta esta limitación; la revisión de contenido y estructura se hizo contra el PDF fuente.

