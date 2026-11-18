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
| Comportamientos PostgreSQL frente a Oracle: DUAL, división y concatenación | 3-5 | 9-13 | Comparaciones de sintaxis y resultados con expresiones del PDF |
| Operadores de comparación, BETWEEN, IN, LIKE e ILIKE | 4-5 | 14 | Pestañas por familia de predicados y patrones |
| NULL, lógica de tres valores y precedencia AND/OR | 3-5 | 15-16 | Reglas visuales y consultas con `empleados` |
| Preguntas de aplicación sobre semántica PostgreSQL | 3-5 | 17 | Respuestas desplegables para participación oral |
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
| 4 | Panel ACID / MVCC / WAL | Transacciones, concurrencia y recuperación | p. 1 |
| 5 | Flujo de arquitectura | Clientes, postmaster, procesos hijo, shared buffers, WAL y autovacuum | p. 2 |
| 7 | Diagrama de entidades | departamentos y empleados, claves foráneas y relación jefe-empleado | pp. 2–3 |
| 9 | Mapa de portabilidad | Sintaxis SQL compartida y comportamientos que dependen del motor | pp. 3-5 |
| 10 | Comparación DUAL / sin FROM | Consultar una expresión en Oracle y PostgreSQL | p. 5 |
| 11 | Comparación de división | Tipo de los operandos y uso de NUMERIC en PostgreSQL | pp. 3-4 |
| 13 | Comparación de concatenación | `||`, `CONCAT` y su tratamiento de NULL | p. 4 |
| 15 | Lógica de tres valores | TRUE, FALSE, UNKNOWN y pruebas con NULL | pp. 4-5 |
| 16 | Secuencia de precedencia | Cómo AND antes de OR cambia la interpretación del filtro | p. 5 |
| 17 | Reto de portabilidad | Preguntas orales con respuestas desplegables sobre ejemplos previos | pp. 3-5 |
| 27 | Diagrama de conjuntos interactivo | INNER, LEFT, RIGHT, FULL y el producto CROSS | p. 13 |
| 30 | Secuencia de agrupación | FROM, WHERE, GROUP BY, HAVING y SELECT | p. 14 |
| 54 | Secuencia OPEN → FETCH → CLOSE | Ciclo manual del cursor y estado FOUND | pp. 25–26 |
| 6 | Recorrido de uso de psql | Conectar, explorar objetos y ejecutar comandos de navegación | p. 2 |

## Interacciones

- **Índice:** salta al inicio de cada sección; también se abre con la tecla I.
- **Pestañas:** alternan código, explicación, equivalencia o dato verificable.
- **JOIN:** ilumina el tipo seleccionado y describe conteos y filas exclusivas del esquema del PDF.
- **Cursor:** avanza por declaración, OPEN, FETCH y CLOSE.
- **Preguntas:** cada respuesta se despliega por separado.
- **Reto de portabilidad:** las respuestas de la diapositiva 17 se abren una por una después de que el público intenta resolverlas.
- **Navegación Reveal.js:** flechas, controles, progreso, modo visión general y pantalla completa.

## Recursos en `assets/`

- `deck.css`: identidad visual, reglas de composición, tablas, diagramas y reglas responsive.
- `deck.js`: contenido fuente y creación de las 62 diapositivas.
- `interactions.js`: controles Reveal.js, índice, pestañas y simulaciones.
- No se extrajeron imágenes porque el PDF no contiene imágenes rasterizadas. Los diagramas se dibujan con HTML/CSS.

