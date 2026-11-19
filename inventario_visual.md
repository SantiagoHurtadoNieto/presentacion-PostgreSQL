# Inventario de contenido y recursos visuales

## Fuente

- PDF de 32 páginas: *Sustentación de Bases de Datos en PostgreSQL*.
- Documentación oficial de PostgreSQL 18 para el bloque añadido de administración.
- Extracción de texto revisada página por página. El PDF no contiene imágenes rasterizadas incrustadas; las tablas y ejemplos se extrajeron como texto.
- Las tablas y capturas no se sustituyeron por material de internet. Los diagramas de esta presentación son composiciones HTML/CSS construidas a partir de relaciones o explicaciones presentes en la fuente.

## Tablas y datos de la fuente representados

| Recurso | Páginas PDF | Presentación | Tratamiento |
|---|---:|---:|---|
| Sublenguajes DQL, DML, DDL, DCL, TCL | 1 | 3 | Tabla comparativa |
| Memoria, tablespaces, roles y límites de recursos | — | 6–9 | Comparaciones conceptuales y ejemplos de configuración PostgreSQL |
| Vistas, ausencia de sinónimos y catálogos de administración | — | 10–12 | VIEW/MATERIALIZED VIEW, alternativas y consulta de monitoreo |
| Comandos psql | 2 | 13 | Tabla de referencia |
| Esquema departamentos / empleados | 2–3 | 14 | Diagrama de entidades; DDL íntegro desplegable |
| Filas INSERT y casos de ausencia de pareja | 3 | 15 | Resumen visual y código INSERT íntegro desplegable |
| Comportamientos PostgreSQL frente a Oracle: DUAL, división y concatenación | 3-5 | 16-20 | Comparaciones de sintaxis y resultados con expresiones del PDF |
| Operadores de comparación, BETWEEN, IN, LIKE e ILIKE | 4-5 | 21 | Pestañas por familia de predicados y patrones |
| NULL, lógica de tres valores y precedencia AND/OR | 3-5 | 22-23 | Reglas visuales y consultas con `empleados` |
| Preguntas de aplicación sobre semántica PostgreSQL | 3-5 | 24 | Respuestas desplegables para participación oral |
| Funciones numéricas | 6 | 25 | Tabla por grupo y salida citada |
| Funciones de cadenas | 6–7 | 26 | Tabla por propósito; POSITION, STRPOS y SOUNDEX interactivos |
| Agregados COUNT, SUM, AVG, MAX, MIN | 8 | 27 | Tabla y consulta resumen |
| Equivalencias para NULL | 8 | 28 | Tabla Oracle–PostgreSQL |
| Equivalencias de fecha | 9 | 29 | Tabla Oracle–PostgreSQL |
| Máscaras TO_CHAR de fecha | 10–11 | 31 | Tabla de máscaras con reglas TM/FM |
| Máscaras TO_CHAR numéricas | 12 | 32 | Tabla de símbolos y pestañas de ejemplo |
| Conteos de JOIN con los datos del ejemplo | 13 | 34 | Tabla, diagrama interactivo y resumen textual |
| Restricciones | 17 | 46 | Tabla de propósito |
| Tipos Oracle–PostgreSQL | 17 | 46 | Tabla comparativa |
| Excepciones predefinidas | 23 | 58 | Tabla de condición y causa |
| Parámetros IN, OUT, INOUT | 27–28 | 64 | Tabla de modos y ejemplo OUT |
| Preguntas probables de sustentación | 31–32 | 69 | Preguntas desplegables con respuestas |

## Diagramas y elementos técnicos

| Diapositiva | Elemento | Qué representa | Base en el PDF |
|---:|---|---|---|
| 4 | Panel ACID / MVCC / WAL | Transacciones, concurrencia y recuperación | p. 1 |
| 5 | Flujo de arquitectura | Clientes, postmaster, procesos hijo, shared buffers, WAL y autovacuum | p. 2 |
| 6 | Mapa de memoria | Memoria compartida, memoria de trabajo y caché estimada | Documentación PostgreSQL 18 |
| 7 | Tablespaces | Ubicación de objetos en disco y separación respecto a memoria | Documentación PostgreSQL 18 |
| 8–9 | Roles y recursos | Privilegios, límites de conexión, tiempos y archivos temporales | Documentación PostgreSQL 18 |
| 10–11 | Vistas y sinónimos | Vistas regulares/materializadas y alternativas a un objeto no disponible | Documentación PostgreSQL 18 |
| 12 | Catálogos y actividad | `pg_catalog`, `information_schema` y `pg_stat_activity` | Documentación PostgreSQL 18 |
| 14 | Diagrama de entidades | departamentos y empleados, claves foráneas y relación jefe-empleado | pp. 2–3 |
| 16 | Mapa de portabilidad | Sintaxis SQL compartida y comportamientos que dependen del motor | pp. 3-5 |
| 17 | Comparación DUAL / sin FROM | Consultar una expresión en Oracle y PostgreSQL | p. 5 |
| 18 | Comparación de división | Tipo de los operandos y uso de NUMERIC en PostgreSQL | pp. 3-4 |
| 20 | Comparación de concatenación | `||`, `CONCAT` y su tratamiento de NULL | p. 4 |
| 22 | Lógica de tres valores | TRUE, FALSE, UNKNOWN y pruebas con NULL | pp. 4-5 |
| 16 | Secuencia de precedencia | Cómo AND antes de OR cambia la interpretación del filtro | p. 5 |
| 24 | Reto de portabilidad | Preguntas orales con respuestas desplegables sobre ejemplos previos | pp. 3-5 |
| 34 | Diagrama de conjuntos interactivo | INNER, LEFT, RIGHT, FULL y el producto CROSS | p. 13 |
| 37 | Secuencia de agrupación | FROM, WHERE, GROUP BY, HAVING y SELECT | p. 14 |
| 61 | Secuencia OPEN → FETCH → CLOSE | Ciclo manual del cursor y estado FOUND | pp. 25–26 |
| 13 | Recorrido de uso de psql | Conectar, explorar objetos y ejecutar comandos de navegación | p. 2 |

## Interacciones

- **Índice:** salta al inicio de cada sección; también se abre con la tecla I.
- **Pestañas:** alternan código, explicación, equivalencia o dato verificable.
- **JOIN:** ilumina el tipo seleccionado y describe conteos y filas exclusivas del esquema del PDF.
- **Cursor:** avanza por declaración, OPEN, FETCH y CLOSE.
- **Preguntas:** cada respuesta se despliega por separado.
- **Reto de portabilidad:** las respuestas de la diapositiva 24 se abren una por una después de que el público intenta resolverlas.
- **Navegación Reveal.js:** flechas, controles, progreso, modo visión general y pantalla completa.

## Recursos en `assets/`

- `deck.css`: identidad visual, reglas de composición, tablas, diagramas y reglas responsive.
- `deck.js`: contenido fuente y creación de las 69 diapositivas.
- `interactions.js`: controles Reveal.js, índice, pestañas y simulaciones.
- No se extrajeron imágenes porque el PDF no contiene imágenes rasterizadas. Los diagramas se dibujan con HTML/CSS.

