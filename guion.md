# Guion de sustentación — PostgreSQL

**Duración total:** 137 minutos. **Diapositivas:** 69. **Fuentes:** *Sustentación de Bases de Datos en PostgreSQL.pdf* (32 páginas) y documentación oficial de PostgreSQL 18 para administración.

El tiempo incluye transiciones, pausas breves de participación y análisis oral. No es necesario leer cada ejemplo en voz alta: primero se plantea qué debería ocurrir, después se recorre la consulta y al final se muestra el resultado solo cuando los datos de la fuente lo permiten.

## Distribución del tiempo

| Diapositivas | Sección | Tiempo |
|---|---|---:|
| 1–2 | Apertura y propósito | 3 min |
| 3–5 | PostgreSQL y arquitectura | 6 min |
| 6–12 | Administración de PostgreSQL | 12 min |
| 13–15 | psql, esquema y filas de ejemplo | 4 min |
| 16–24 | Portabilidad Oracle–PostgreSQL y semántica de consultas | 15 min |
| 25–28 | Funciones simples y agregación | 10 min |
| 29–30 | Fechas | 6 min |
| 31–32 | Conversión y máscaras | 5 min |
| 33–44 | JOIN, agrupación, subconsultas y recursión | 22 min |
| 45–50 | CREATE, restricciones, DML y transacciones | 9 min |
| 51–56 | PL/pgSQL: bloques, datos, control y entrada | 11 min |
| 57–59 | Excepciones | 8 min |
| 60–62 | Cursores | 7 min |
| 63–66 | Funciones almacenadas | 9 min |
| 67–68 | Funciones/procedimientos y mapa final de equivalencias | 2 min |
| 69 | Preguntas y discusión | 8 min |
|  | **Total** | **137 min** |

El bloque administrativo está ordenado desde los recursos físicos hacia la administración lógica: primero memoria y ubicación en disco; luego roles, límites y vistas; por último, catálogos y monitoreo.

## Guion por diapositiva

| Diap. | Tiempo | Enfoque y explicación oral |
|---:|---:|---|
| 1 | 1 min | Presenta la pregunta central: cómo pasamos de consultar filas a guardar lógica en la base. Explica que se mantendrá el mismo modelo de departamentos y empleados. |
| 2 | 2 min | Explica el recorrido, marca que SQL, administración, JOIN, subconsultas y PL/pgSQL necesitan más conversación que una definición. Informa que usará las pestañas y el índice de navegación. |
| 3 | 2 min | Define el SGBD como el software que define, almacena, consulta y protege datos. Pide al público asociar integridad, concurrencia y recuperación con necesidades concretas. |
| 4 | 2 min | Explica ACID, MVCC y WAL con el diagrama editorial. Distingue consistencia y concurrencia de recuperación ante fallos. |
| 5 | 2 min | Recorre clientes, postmaster, procesos hijo, memoria compartida, WAL y autovacuum de izquierda a derecha. Presenta el diagrama como arquitectura básica. |
| 6 | 2 min | Distingue memoria compartida (`shared_buffers`), memoria de trabajo por operación (`work_mem`), mantenimiento y estimación de caché. Advierte que el uso real depende de operaciones y sesiones concurrentes; `effective_cache_size` no reserva RAM. |
| 7 | 2 min | Define tablespace como ubicación de archivos de objetos en disco, no como una partición de memoria. Explica la preparación de la ruta por el sistema operativo, `CREATE TABLESPACE` y la selección al crear una tabla. Recuerda que depende del clúster y no es una copia independiente. |
| 8 | 1 min | Presenta roles, esquemas, propiedad y privilegios. Lee `GRANT` como concesión explícita y recomienda no usar superusuario para accesos de aplicación. |
| 9 | 2 min | Compara límites globales y por rol, tiempo máximo de sentencia y archivos temporales. Sigue el ejemplo `ALTER ROLE`; explica que `work_mem` puede multiplicarse por operación y sesión. PostgreSQL no impone cuotas rígidas de CPU por grupo: para aislar CPU/memoria se recurre al sistema operativo o la plataforma. |
| 10 | 2 min | Compara `VIEW`, que ejecuta una consulta al consultarse, con `MATERIALIZED VIEW`, cuyo resultado se almacena y requiere `REFRESH`. Explica que una vista también puede ser una interfaz de acceso, con permisos que deben revisarse. |
| 11 | 1 min | Responde el tema de sinónimos: PostgreSQL no tiene objeto `SYNONYM` nativo. Muestra nombres calificados por esquema, `search_path` y una vista como posibles alternativas, aclarando que la vista no es un sinónimo. |
| 12 | 2 min | Aclara que no existe el conjunto `DBA_*` de Oracle. Ubica metadatos en `pg_catalog` e `information_schema` y estadísticas en `pg_stat_*`; identifica `pg_database`, `pg_tablespace`, `pg_roles`, `pg_settings` y `pg_stat_activity`. Advierte que la visibilidad de otras sesiones depende de privilegios. |
| 13 | 1 min | Demuestra la secuencia de psql: conectarse, listar bases, cambiar, listar tablas, describir y salir. Aclara que pgAdmin es la alternativa gráfica mencionada. |
| 14 | 1 min | Lee el esquema de `departamentos` y `empleados`; identifica PK, FK y la autorreferencia de `jefe_id`. El DDL completo queda desplegable. |
| 15 | 2 min | Lee las filas de ejemplo e identifica los dos casos deliberados para los JOIN: Paula sin departamento y Logística sin empleados. |
| 16 | 1 min | Enmarca la sección: SELECT/FROM/WHERE es la base, pero la portabilidad exige revisar diferencias de cada motor. Anticipa DUAL, división, concatenación, filtros de texto y NULL. |
| 17 | 1 min | Compara `SELECT SQRT(16) FROM DUAL` en Oracle con `SELECT SQRT(16)` en PostgreSQL. Explica que PostgreSQL no necesita DUAL; despliega la opción de crear la vista solo si se quiere conservar esa sintaxis. |
| 18 | 2 min | Pide predecir `7 / 2` y luego compara con `7 / 2.0` y `7::numeric / 2`. Relaciona la diferencia Oracle–PostgreSQL con los tipos de los operandos. |
| 19 | 1 min | Conecta la comisión NULL de las filas de empleados con `salario + comision`. Explica por qué la suma queda NULL en esas filas; anticipa COALESCE, que se verá en funciones. |
| 20 | 2 min | Alterna `||`, `CONCAT` y el contraste Oracle–PostgreSQL. Pide predecir qué pasa con NULL y destaca la diferencia de cantidad de argumentos indicada en la fuente. |
| 21 | 2 min | Interpreta los operadores de comparación, BETWEEN inclusivo e IN. Luego explica los comodines `%` y `_`, y compara LIKE con ILIKE como opción de PostgreSQL para ignorar mayúsculas. |
| 22 | 2 min | Explica TRUE, FALSE y UNKNOWN. Contrasta `= NULL` con `IS NULL` y comenta el problema de NOT IN cuando la lista contiene NULL; la fuente recomienda NOT EXISTS en subconsultas. |
| 23 | 2 min | Lee las dos consultas con AND/OR. Pide explicar qué se agrupa en cada una; subraya que AND se evalúa antes que OR y que los paréntesis hacen explícita la intención. |
| 24 | 2 min | Convierte la sección en una pausa de recuperación activa: pide responder las cuatro preguntas antes de abrir cada respuesta. Solicita justificar la opción con la regla vista, no solo memorizar el resultado. |
| 25 | 2 min | Distingue función por fila de agregado. Presenta una función numérica del cuadro y conecta la idea con la siguiente sección de funciones. |
| 26 | 2 min | Agrupa funciones de cadenas por intención: cambiar caja, recortar, extraer, reemplazar o codificar. En la pestaña siguiente compara POSITION/STRPOS y SOUNDEX. |
| 27 | 3 min | Desarrolla el resumen de empleados: diferencia COUNT de columna y COUNT(*), y muestra qué agregados ignoran NULL. La fuente permite afirmar siete filas y dos comisiones no nulas. |
| 28 | 3 min | Compara NVL, NVL2, COALESCE y NULLIF. Analiza cómo COALESCE evita que la suma con una comisión nula permanezca NULL. |
| 29 | 3 min | Recorre equivalencias de fecha, remarcando que PostgreSQL DATE no lleva hora. Cambia a los ejemplos de CURRENT_DATE, intervalos y resta de fechas. |
| 30 | 3 min | Explica AGE/EXTRACT para meses y las partes de fecha disponibles. Distingue reloj de transacción de reloj real con NOW() y clock_timestamp(). |
| 31 | 2 min | Muestra cómo TO_CHAR transforma una fecha; separa formato de dato. Explica el ejemplo fijo de fecha como salida ilustrativa de la fuente. |
| 32 | 3 min | Lee máscaras comunes por grupos. Explica TM para el idioma, FM para quitar relleno y que los literales se escriben entre comillas dobles dentro de la máscara. |
| 33 | 2 min | Compara el enlace en WHERE con INNER JOIN y ON. Explica el producto cartesiano si falta condición y que PostgreSQL no usa la sintaxis externa (+) de Oracle. |
| 34 | 2 min | Activa INNER, LEFT, RIGHT, FULL y CROSS. Para cada modo, conecta el área seleccionada con Paula y Logística; justifica los conteos con las siete filas de empleados y cuatro departamentos. |
| 35 | 2 min | Lee LEFT, RIGHT y FULL en sus consultas completas. Destaca qué lado queda preservado y dónde aparecen valores NULL. |
| 36 | 2 min | Usa IS NULL en la columna opuesta para extraer filas sin pareja. Nombra a Paula y Logística conforme al ejemplo. |
| 37 | 2 min | Explica agrupación por departamento y el cálculo de cantidad y promedio. Revisa la regla de GROUP BY para columnas no agregadas. |
| 38 | 2 min | Contrasta el momento en que actúan WHERE y HAVING. Recorre el orden lógico y verifica los departamentos 10 y 20 del ejemplo. |
| 39 | 2 min | Explica que una subconsulta escalar devuelve un valor. Alterna promedio general y máximo; relaciona los comentarios de la fuente con Ana y Luis. |
| 40 | 2 min | Compara promedio por grupo con EXISTS. Haz notar la referencia a `e.departamento_id` exterior en la subconsulta correlacionada. |
| 41 | 1 min | Contrasta MINUS de Oracle y EXCEPT de PostgreSQL. Recuerda el requisito de igual cantidad de columnas y tipos compatibles. |
| 42 | 2 min | Explica el self-join con alias e y j. Después usa CASE para leer reglas de clasificación; aclara que CASE reemplaza DECODE en PostgreSQL. |
| 43 | 1 min | Muestra orden ascendente/descendente, posición ordinal y NULLS LAST. Explica DISTINCT y DISTINCT ON como alternativas de salida distintas. |
| 44 | 2 min | Recorre raíz y paso recursivo para jerarquías. Compara CONNECT BY con WITH RECURSIVE y generate_series para crear una secuencia. Reserva aquí una pausa breve de transición y preguntas. |
| 45 | 1 min | Lee el CREATE TABLE de clientes por columnas y restricciones. Conecta la definición con las tablas de ejemplo, sin cambiar sus nombres. |
| 46 | 2 min | Explica equivalencias de tipo y restricciones. Invita a responder cuál restricción permite varios NULL según el documento y cuál identifica una fila sin NULL. |
| 47 | 1 min | Compara PK compuesta con columna identity. Subraya el rol de nombre de restricción y la diferencia entre omitir o enviar un identificador. |
| 48 | 2 min | Presenta INSERT con columnas explícitas, varias filas, SELECT y RETURNING. Explica DEFAULT/NULL y el error por clave duplicada. |
| 49 | 1 min | Contrasta UPDATE y DELETE y pregunta qué ocurre si se elimina WHERE. Pide leer la condición antes de ejecutar cualquier cambio. |
| 50 | 2 min | Explica BEGIN, COMMIT y ROLLBACK como unidad de trabajo. Compara autocommit en PostgreSQL con COMMIT explícito en Oracle; cierra con ALTER y DROP. |
| 51 | 2 min | Define el bloque DO y señala DECLARE opcional, BEGIN/END y EXCEPTION. Compara el envoltorio con el bloque anónimo de Oracle. |
| 52 | 2 min | Recorre declaración, inicialización, constante y asignación. Explica RAISE NOTICE como salida visible en psql y clientes. |
| 53 | 2 min | Distingue %TYPE, %ROWTYPE, RECORD y arreglos. Enfatiza que el arreglo del ejemplo se indexa desde 1. |
| 54 | 2 min | Explica SELECT INTO para escalares o fila. Compara cero filas, múltiples filas e INTO STRICT; prepara la sección de excepciones. |
| 55 | 2 min | Recorre IF/ELSIF, WHILE, FOR, REVERSE y EXIT WHEN. Pide describir el orden del ciclo sin ejecutar el bloque. |
| 56 | 1 min | Explica los marcadores de RAISE NOTICE y la diferencia entre variables psql y PL/pgSQL. Aclara por qué el ejemplo pasa el dato mediante set_config/current_setting. |
| 57 | 2 min | Analiza división por cero. Sigue el camino al manejador, el orden de WHEN y SQLERRM/SQLSTATE; subraya que WHEN OTHERS va al final. |
| 58 | 3 min | Compara errores predefinidos de Oracle y PostgreSQL. Usa SELECT INTO STRICT para explicar no_data_found y too_many_rows, y cómo cambiar el filtro produce tres filas. |
| 59 | 3 min | Explica RAISE EXCEPTION, ERRCODE, HINT y niveles. Conecta el UPDATE seguido de error con el retroceso de cambios del bloque con EXCEPTION. |
| 60 | 1 min | Compara cursor implícito con explícito y presenta FOUND/GET DIAGNOSTICS como equivalencias de atributos de Oracle. |
| 61 | 3 min | Ejecuta la interacción Declarar → OPEN → FETCH → CLOSE. Haz que el público anticipe qué indica FOUND tras un FETCH sin fila. |
| 62 | 3 min | Explica parámetros, SCROLL, refcursor y FOR UPDATE/WHERE CURRENT OF. Recalca la forma simple que exige WHERE CURRENT OF y cuándo conviene una sentencia SQL única. |
| 63 | 2 min | Recorre la firma CREATE OR REPLACE FUNCTION y diferencia RETURNS del RETURN. Presenta IN como modo predeterminado y el ejemplo SQL puro. |
| 64 | 2 min | Explica OUT e INOUT. Desarrolla resumen_depto como retorno de dos columnas; la fuente define INOUT pero no incluye una función demostrativa. |
| 65 | 2 min | Alterna llamadas SELECT, aplicación por fila y llamada desde PL/pgSQL. Usa los resultados comentados solo para las llamadas que la fuente muestra. |
| 66 | 3 min | Muestra pg_proc, pg_get_functiondef, information_schema y psql. Cierra con DROP FUNCTION y el requisito de tipos al existir sobrecarga. |
| 67 | 1 min | Contrasta función y procedimiento por retorno, invocación y control transaccional. |
| 68 | 1 min | Usa la tabla como mapa final de equivalencias. Menciona que el apéndice también compara tipos, errores y atributos de cursor. |
| 69 | 8 min | Abre preguntas y respuestas; deja que el público proponga la respuesta antes de desplegarla. Elige preguntas de SQL, JOIN, subconsultas, restricciones, cursor y función/procedimiento. Conserva el tiempo restante para preguntas espontáneas. |

## Referencias oficiales para el bloque administrativo

- [Consumo de recursos: memoria, disco y procesos](https://www.postgresql.org/docs/18/runtime-config-resource.html)
- [Tablespaces](https://www.postgresql.org/docs/18/manage-ag-tablespaces.html)
- [Roles y `CREATE ROLE`](https://www.postgresql.org/docs/18/sql-createrole.html)
- [Vistas](https://www.postgresql.org/docs/18/sql-createview.html) y [vistas materializadas](https://www.postgresql.org/docs/18/sql-creatematerializedview.html)
- [Catálogos](https://www.postgresql.org/docs/18/catalogs-overview.html) y [estadísticas de actividad](https://www.postgresql.org/docs/18/monitoring-stats.html)

## Uso de la interactividad

- **Pestañas de consulta:** presenta primero el código; pide predecir y después abre la explicación o el dato que sí está sustentado.
- **Explorador JOIN:** usa el conteo del PDF y localiza Paula o Logística como fila exclusiva.
- **Cursores:** avanza en orden; el indicador FOUND cambia después de cada FETCH.
- **Preguntas:** selecciona las que correspondan a la discusión. Las demás sirven como preparación adicional.

