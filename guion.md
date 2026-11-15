# Guion de sustentación — PostgreSQL

**Duración total:** 120 minutos. **Diapositivas:** 62. **Fuente:** *Sustentación de Bases de Datos en PostgreSQL.pdf*, 32 páginas.

El tiempo incluye transiciones, pausas breves de participación y análisis oral. No es necesario leer cada ejemplo en voz alta: primero se plantea qué debería ocurrir, después se recorre la consulta y al final se muestra el resultado solo cuando los datos de la fuente lo permiten.

## Distribución del tiempo

| Diapositivas | Sección | Tiempo |
|---|---|---:|
| 1–2 | Apertura y propósito | 3 min |
| 3–6 | PostgreSQL, SQL y arquitectura | 7 min |
| 7–8 | Esquema y filas de ejemplo | 3 min |
| 9–17 | Consultas, operadores y NULL | 14 min |
| 18–21 | Funciones simples y agregación | 10 min |
| 22–23 | Fechas | 6 min |
| 24–25 | Conversión y máscaras | 5 min |
| 26–37 | JOIN, agrupación, subconsultas y recursión | 17 min |
| 38–43 | CREATE, restricciones, DML y transacciones | 9 min |
| 44–49 | PL/pgSQL: bloques, datos, control y entrada | 11 min |
| 50–52 | Excepciones | 8 min |
| 53–55 | Cursores | 7 min |
| 56–59 | Funciones almacenadas | 9 min |
| 60–62 | Funciones/procedimientos, equivalencias y sustentación | 11 min |
|  | **Total** | **120 min** |

## Guion por diapositiva

| Diap. | Tiempo | Enfoque y explicación oral |
|---:|---:|---|
| 1 | 1 min | Presenta la pregunta central: cómo pasamos de consultar filas a guardar lógica en la base. Explica que se mantendrá el mismo modelo de departamentos y empleados. |
| 2 | 2 min | Explica el recorrido, marca que JOIN, subconsultas, PL/pgSQL y cursores necesitan más conversación que una definición. Informa que usará las pestañas y el índice de navegación. |
| 3 | 2 min | Define el SGBD como el software que define, almacena, consulta y protege datos. Pide al público asociar integridad, concurrencia y recuperación con necesidades concretas. |
| 4 | 2 min | Compara DQL, DML, DDL, DCL y TCL usando las sentencias de la tabla. Señala que cada sublenguaje describe una tarea distinta. |
| 5 | 2 min | Explica ACID, MVCC y WAL con las frases de la fuente. Distingue control de concurrencia de recuperación ante fallos. |
| 6 | 1 min | Recorre conexiones, proceso hijo, memoria compartida, WAL y autovacuum de izquierda a derecha. Presenta el diagrama como arquitectura básica del documento, no como un inventario de procesos. |
| 7 | 1 min | Demuestra mentalmente la secuencia de psql: conectarse, listar base, cambiar, listar tablas, describir y salir. Aclara que pgAdmin es la alternativa gráfica mencionada. |
| 8 | 2 min | Lee las dos tablas como una relación y como una autorreferencia. Identifica PK y FK; anticipa que `jefe_id` enlaza empleados entre sí. |
| 9 | 1 min | Muestra los dos casos deliberados para los JOIN: Paula sin departamento y Logística sin empleados. Pide predecir qué unión conservaría cada uno. |
| 10 | 1 min | Introduce proyección, selección y asociación. Solicita identificar cuál operación representa cada fragmento mostrado. |
| 11 | 1 min | Compara `SELECT *` con la proyección y explica el alias. No inventes una salida completa: la diapositiva indica que la fuente no la tabula. |
| 12 | 2 min | Recorre el filtro de salario. Comprueba con las filas de la fuente qué cinco empleados superan 4.000.000 y cuáles no. |
| 13 | 1 min | Usa el orden lógico FROM → WHERE → SELECT para explicar por qué el alias de SELECT no se resuelve en WHERE. |
| 14 | 1 min | Revisa los operadores de igualdad y diferencia. Recalca que `NULL = NULL` no es verdadero; la prueba adecuada es `IS NULL`. |
| 15 | 2 min | Cambia las pestañas AND, OR y NOT. Pide verbalizar qué condiciones deben cumplirse y por qué las expresiones con NULL pueden ser desconocidas. |
| 16 | 2 min | Contrasta BETWEEN inclusivo, IN como lista y LIKE como patrón. Pide interpretar `%` y `_`; menciona ILIKE para ignorar mayúsculas. |
| 17 | 2 min | Usa la alternancia para conectar aritmética, concatenación y lógica de NULL. Explica que `COUNT(*)` es una excepción al ignorar NULL, no una operación aritmética. |
| 18 | 2 min | Distingue función por fila de agregado. Explica que PostgreSQL deja consultar una función sin FROM y por eso no requiere DUAL. Luego ilustra una función numérica del cuadro. |
| 19 | 2 min | Agrupa funciones de cadenas por intención: cambiar caja, recortar, extraer, reemplazar o codificar. En la pestaña siguiente compara POSITION/STRPOS y SOUNDEX. |
| 20 | 3 min | Desarrolla el resumen de empleados: diferencia COUNT de columna y COUNT(*), y muestra qué agregados ignoran NULL. La fuente permite afirmar siete filas y dos comisiones no nulas. |
| 21 | 3 min | Compara NVL, NVL2, COALESCE y NULLIF. Analiza cómo COALESCE evita que la suma con una comisión nula permanezca NULL. |
| 22 | 3 min | Recorre equivalencias de fecha, remarcando que PostgreSQL DATE no lleva hora. Cambia a los ejemplos de CURRENT_DATE, intervalos y resta de fechas. |
| 23 | 3 min | Explica AGE/EXTRACT para meses y las partes de fecha disponibles. Distingue reloj de transacción de reloj real con NOW() y clock_timestamp(). |
| 24 | 2 min | Muestra cómo TO_CHAR transforma una fecha; separa formato de dato. Explica el ejemplo fijo de fecha como salida ilustrativa de la fuente. |
| 25 | 3 min | Lee máscaras comunes por grupos. Explica TM para el idioma, FM para quitar relleno y que los literales se escriben entre comillas dobles dentro de la máscara. |
| 26 | 2 min | Compara el enlace en WHERE con INNER JOIN y ON. Explica el producto cartesiano si falta condición y que PostgreSQL no usa la sintaxis externa (+) de Oracle. |
| 27 | 2 min | Activa INNER, LEFT, RIGHT, FULL y CROSS. Para cada modo, conecta el área seleccionada con Paula y Logística; justifica los conteos con las siete filas de empleados y cuatro departamentos. |
| 28 | 2 min | Lee LEFT, RIGHT y FULL en sus consultas completas. Destaca qué lado queda preservado y dónde aparecen valores NULL. |
| 29 | 2 min | Usa IS NULL en la columna opuesta para extraer filas sin pareja. Nombra a Paula y Logística conforme al ejemplo de la fuente. |
| 30 | 2 min | Explica agrupación por departamento y el cálculo de cantidad y promedio. Revisa la regla de GROUP BY para columnas no agregadas. |
| 31 | 2 min | Contrasta el momento en que actúan WHERE y HAVING. Recorre el orden lógico y verifica los departamentos 10 y 20 del ejemplo. |
| 32 | 2 min | Explica que una subconsulta escalar devuelve un valor. Alterna promedio general y máximo; relaciona los comentarios de la fuente con Ana y Luis. |
| 33 | 2 min | Compara promedio por grupo con EXISTS. Haz notar la referencia a `e.departamento_id` exterior en la subconsulta correlacionada. |
| 34 | 1 min | Contrasta MINUS de Oracle y EXCEPT de PostgreSQL. Recuerda el requisito de igual cantidad de columnas y tipos compatibles. |
| 35 | 2 min | Explica el self-join con alias e y j. Después usa CASE para leer reglas de clasificación; aclara que CASE reemplaza DECODE en PostgreSQL. |
| 36 | 1 min | Muestra orden ascendente/descendente, posición ordinal y NULLS LAST. Explica DISTINCT y DISTINCT ON como alternativas de salida distintas. |
| 37 | 2 min | Recorre raíz y paso recursivo para jerarquías. Compara CONNECT BY con WITH RECURSIVE y generate_series para crear una secuencia. Reserva aquí una pausa breve de transición y preguntas. |
| 38 | 1 min | Lee el CREATE TABLE de clientes por columnas y restricciones. Conecta la definición con las tablas de ejemplo, sin cambiar sus nombres. |
| 39 | 2 min | Explica equivalencias de tipo y restricciones. Invita a responder cuál restricción permite varios NULL según el documento y cuál identifica una fila sin NULL. |
| 40 | 1 min | Compara PK compuesta con columna identity. Subraya el rol de nombre de restricción y la diferencia entre omitir o enviar un identificador. |
| 41 | 2 min | Presenta INSERT con columnas explícitas, varias filas, SELECT y RETURNING. Explica DEFAULT/NULL y el error por clave duplicada. |
| 42 | 1 min | Contrasta UPDATE y DELETE y pregunta qué ocurre si se elimina WHERE. Pide leer la condición antes de ejecutar cualquier cambio. |
| 43 | 2 min | Explica BEGIN, COMMIT y ROLLBACK como unidad de trabajo. Compara autocommit en PostgreSQL con COMMIT explícito en Oracle; cierra con ALTER y DROP. |
| 44 | 2 min | Define el bloque DO y señala DECLARE opcional, BEGIN/END y EXCEPTION. Compara el envoltorio con el bloque anónimo de Oracle. |
| 45 | 2 min | Recorre declaración, inicialización, constante y asignación. Explica RAISE NOTICE como salida visible en psql y clientes. |
| 46 | 2 min | Distingue %TYPE, %ROWTYPE, RECORD y arreglos. Enfatiza que el arreglo del ejemplo se indexa desde 1. |
| 47 | 2 min | Explica SELECT INTO para escalares o fila. Compara cero filas, múltiples filas e INTO STRICT; prepara la sección de excepciones. |
| 48 | 2 min | Recorre IF/ELSIF, WHILE, FOR, REVERSE y EXIT WHEN. Pide describir el orden del ciclo sin ejecutar el bloque. |
| 49 | 1 min | Explica los marcadores de RAISE NOTICE y la diferencia entre variables psql y PL/pgSQL. Aclara por qué el ejemplo pasa el dato mediante set_config/current_setting. |
| 50 | 2 min | Analiza división por cero. Sigue el camino al manejador, el orden de WHEN y SQLERRM/SQLSTATE; subraya que WHEN OTHERS va al final. |
| 51 | 3 min | Compara errores predefinidos de Oracle y PostgreSQL. Usa SELECT INTO STRICT para explicar no_data_found y too_many_rows, y cómo cambiar el filtro produce tres filas. |
| 52 | 3 min | Explica RAISE EXCEPTION, ERRCODE, HINT y niveles. Conecta el UPDATE seguido de error con el retroceso de cambios del bloque con EXCEPTION. |
| 53 | 1 min | Compara cursor implícito con explícito y presenta FOUND/GET DIAGNOSTICS como equivalencias de atributos de Oracle. |
| 54 | 3 min | Ejecuta la interacción Declarar → OPEN → FETCH → CLOSE. Haz que el público anticipe qué indica FOUND tras un FETCH sin fila. |
| 55 | 3 min | Explica parámetros, SCROLL, refcursor y FOR UPDATE/WHERE CURRENT OF. Recalca la forma simple que exige WHERE CURRENT OF y cuándo conviene una sentencia SQL única. |
| 56 | 2 min | Recorre la firma CREATE OR REPLACE FUNCTION y diferencia RETURNS del RETURN. Presenta IN como modo predeterminado y el ejemplo SQL puro. |
| 57 | 2 min | Explica OUT e INOUT. Desarrolla resumen_depto como retorno de dos columnas; la fuente define INOUT pero no incluye una función demostrativa. |
| 58 | 2 min | Alterna llamadas SELECT, aplicación por fila y llamada desde PL/pgSQL. Usa los resultados comentados solo para las llamadas que la fuente muestra. |
| 59 | 3 min | Muestra pg_proc, pg_get_functiondef, information_schema y psql. Cierra con DROP FUNCTION y el requisito de tipos al existir sobrecarga. |
| 60 | 1 min | Contrasta función y procedimiento por retorno, invocación y control transaccional. |
| 61 | 1 min | Usa la tabla como mapa final de equivalencias. Menciona que el apéndice también compara tipos, errores y atributos de cursor. |
| 62 | 9 min | Abre preguntas y respuestas; deja que el público proponga la respuesta antes de desplegarla. Elige preguntas de SQL, JOIN, subconsultas, restricciones, cursor y función/procedimiento. Conserva el tiempo restante para preguntas espontáneas. |

## Uso de la interactividad

- **Pestañas de consulta:** presenta primero el código; pide predecir y después abre la explicación o el dato que sí está sustentado.
- **Explorador JOIN:** usa el conteo del PDF y localiza Paula o Logística como fila exclusiva.
- **Cursores:** avanza en orden; el indicador FOUND cambia después de cada FETCH.
- **Preguntas:** selecciona las que correspondan a la discusión. Las demás sirven como preparación adicional.

