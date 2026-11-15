# Inventario de contenido y recursos visuales

## Fuente

- PDF de 32 páginas: *Sustentación de Bases de Datos en PostgreSQL*.
- Extracción de texto revisada página por página. El PDF no contiene imágenes rasterizadas incrustadas; las tablas y ejemplos se extrajeron como texto.
- Las tablas y capturas no se sustituyeron por material de internet. Los diagramas de esta presentación son composiciones HTML/CSS construidas a partir de relaciones o explicaciones presentes en la fuente.

## Tablas y datos de la fuente representados

| Recurso | Páginas PDF | Presentación | Tratamiento |
|---|---:|---:|---|
| Sublenguajes DQL, DML, DDL, DCL, TCL | 1 | 3 | Tabla comparativa |
| Comandos psql | 2 | 6 | Tabla de referencia |
| Esquema departamentos / empleados | 2–3 | 7 | Diagrama de entidades; DDL íntegro desplegable |
| Filas INSERT y casos de ausencia de pareja | 3 | 8 | Resumen visual y código INSERT íntegro desplegable |
| Operadores de comparación | 4 | 13 | Tabla breve |
| Funciones numéricas | 6 | 18 | Tabla por grupo y salida citada |
| Funciones de cadenas | 6–7 | 19 | Tabla por propósito; POSITION, STRPOS y SOUNDEX interactivos |
| Agregados COUNT, SUM, AVG, MAX, MIN | 8 | 20 | Tabla y consulta resumen |
| Equivalencias para NULL | 8 | 21 | Tabla Oracle–PostgreSQL |
| Equivalencias de fecha | 9 | 22 | Tabla Oracle–PostgreSQL |
| Máscaras TO_CHAR de fecha | 10–11 | 24 | Tabla de máscaras con reglas TM/FM |
| Máscaras TO_CHAR numéricas | 12 | 25 | Tabla de símbolos y pestañas de ejemplo |
| Conteos de JOIN con los datos del ejemplo | 13 | 27 | Tabla, diagrama interactivo y resumen textual |
| Restricciones | 17 | 39 | Tabla de propósito |
| Tipos Oracle–PostgreSQL | 17 | 39 | Tabla comparativa |
| Excepciones predefinidas | 23 | 51 | Tabla de condición y causa |
| Parámetros IN, OUT, INOUT | 27–28 | 57 | Tabla de modos y ejemplo OUT |
| Preguntas probables de sustentación | 31–32 | 62 | Preguntas desplegables con respuestas |

## Diagramas y elementos técnicos

| Diapositiva | Elemento | Qué representa | Base en el PDF |
|---:|---|---|---|
| 4 | Carril ACID / MVCC / WAL | Tres propiedades destacadas del motor | p. 1 |
| 5 | Flujo de arquitectura | Clientes, postmaster, procesos hijo, shared buffers, WAL y autovacuum | p. 2 |
| 7 | Diagrama de entidades | departamentos y empleados, claves foráneas y relación jefe-empleado | pp. 2–3 |
| 12 | Secuencia lógica | FROM → WHERE → SELECT | p. 3 |
| 27 | Diagrama de conjuntos interactivo | INNER, LEFT, RIGHT, FULL y el producto CROSS | p. 13 |
| 30 | Secuencia de agrupación | FROM, WHERE, GROUP BY, HAVING y SELECT | p. 14 |
| 54 | Secuencia OPEN → FETCH → CLOSE | Ciclo manual del cursor y estado FOUND | pp. 25–26 |
| 4 | Panel tipográfico de rasgos | Extensibilidad, familias de datos, lenguajes procedurales y origen comunitario | p. 1 |
| 6 | Recorrido de uso de psql | Conectar, explorar objetos y ejecutar comandos de navegación | p. 2 |

## Interacciones

- **Índice:** salta al inicio de cada sección; también se abre con la tecla I.
- **Pestañas:** alternan código, explicación, equivalencia o dato verificable.
- **JOIN:** ilumina el tipo seleccionado y describe conteos y filas exclusivas del esquema del PDF.
- **Cursor:** avanza por declaración, OPEN, FETCH y CLOSE.
- **Preguntas:** cada respuesta se despliega por separado.
- **Navegación Reveal.js:** flechas, controles, progreso, modo visión general y pantalla completa.

## Recursos en `assets/`

- `deck.css`: identidad visual, reglas de composición, tablas, diagramas y reglas responsive.
- `deck.js`: contenido fuente y creación de las 62 diapositivas.
- `interactions.js`: controles Reveal.js, índice, pestañas y simulaciones.
- No se extrajeron imágenes porque el PDF no contiene imágenes rasterizadas. Los diagramas se dibujan con HTML/CSS.

