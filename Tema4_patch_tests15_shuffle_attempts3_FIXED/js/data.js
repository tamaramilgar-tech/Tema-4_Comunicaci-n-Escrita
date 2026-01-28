// js/data.js
// Datos del tema y bancos de preguntas (SOLO DATOS, sin lógica).
window.UNIT_NAME = "Tema 4 · Comunicación escrita";

/**
 * Formato:
 * { q: "Texto", options: ["A","B","C","D"], answerIndex: 0..3 }
 *
 * La app (js/app.js):
 * - Muestra 15 preguntas por fase.
 * - Baraja preguntas y opciones en cada intento.
 */

// =========================
// FASE 1 — Mapa conceptual + Comunicación escrita (características, pasos y principios)
// =========================
window.phase1Bank = [
  // 1–3: mapa conceptual
  { q: "En un mapa conceptual, lo más importante es:", options: ["Escribir párrafos largos sin títulos","Organizar conceptos de forma jerárquica y relacionada","Usar solo dibujos sin texto","Reunir ideas sin conectores"], answerIndex: 1 },
  { q: "La función de los conectores en un mapa conceptual es:", options: ["Decorar el mapa","Indicar la relación entre conceptos mediante palabras enlace","Sustituir conceptos por frases extensas","Eliminar la jerarquía"], answerIndex: 1 },
  { q: "Para que un mapa conceptual sea claro conviene:", options: ["Incluir conceptos clave, jerarquía y relaciones lógicas","Copiar el tema literalmente","Evitar enlaces entre ideas","Dar la misma importancia a todo"], answerIndex: 0 },

  // comunicación escrita
  { q: "Una característica propia de la comunicación escrita es que:", options: ["No deja constancia","Permite conservar y consultar la información","Siempre es más rápida que la oral","No requiere planificación"], answerIndex: 1 },
  { q: "Antes de redactar, el primer paso recomendable es:", options: ["Definir objetivo, destinatario y mensaje","Escribir directamente sin planificar","Elegir tipografía y colores antes del contenido","Firmar el documento y después redactar"], answerIndex: 0 },
  { q: "Un principio fundamental de la redacción empresarial es:", options: ["Extender el texto para sonar más formal","Priorizar claridad, concisión y corrección","Usar tecnicismos siempre","Evitar revisar para ahorrar tiempo"], answerIndex: 1 },
  { q: "La coherencia en un texto significa:", options: ["Que las ideas se relacionan lógicamente","Que todo está en mayúsculas","Que se usan muchas abreviaturas","Que el texto es muy largo"], answerIndex: 0 },
  { q: "La cohesión de un texto se consigue mediante:", options: ["Conectores, referencias y puntuación adecuada","Frases muy largas sin signos","Eliminar puntos y comas","Cambios constantes de tema"], answerIndex: 0 },
  { q: "La adecuación en un escrito implica:", options: ["Usar el mismo registro siempre","Adaptar lenguaje al destinatario y contexto","Evitar indicar el propósito","Escribir siempre informal"], answerIndex: 1 },
  { q: "Un texto profesional claro suele tener:", options: ["Párrafos interminables","Estructura y párrafos breves con ideas completas","Ausencia de títulos","Exceso de información irrelevante"], answerIndex: 1 },
  { q: "La revisión final de un documento sirve para:", options: ["Comprobar ortografía, coherencia y datos","Añadir informalidad","Evitar que se entienda","Sustituir la planificación"], answerIndex: 0 },
  { q: "En redacción profesional, la objetividad significa:", options: ["Centrarse en hechos y evitar valoraciones innecesarias","Añadir opiniones para convencer","Usar humor en documentos","Usar coloquialismos"], answerIndex: 0 },
  { q: "Un error que perjudica la comprensión es:", options: ["Usar conectores adecuados","Separar en apartados","Emplear puntuación correcta","Incluir ambigüedades y frases confusas"], answerIndex: 3 },
  { q: "La comunicación escrita profesional exige:", options: ["Improvisación","Corrección lingüística y responsabilidad","Evitar normas de estilo","No indicar destinatario"], answerIndex: 1 },
  { q: "Un documento escrito eficaz suele responder a:", options: ["Qué se pide, a quién va dirigido y para cuándo","Qué música se oye al redactar","Qué temas evitar siempre","Qué frases largas incluir"], answerIndex: 0 }
];

// =========================
// FASE 2 — Comunicación interna (documento interno + estructura + requisitos formales + tratamientos)
// =========================
window.phase2Bank = [
  { q: "La comunicación interna en un centro educativo se dirige principalmente a:", options: ["Familias y proveedores","Personal del centro (equipos, departamentos, administración)","Medios de comunicación","Administración pública exclusivamente"], answerIndex: 1 },
  { q: "Un objetivo clave de la comunicación interna es:", options: ["Promocionar el centro al exterior","Coordinar tareas, información y funcionamiento","Sustituir toda comunicación oral","Evitar registro documental"], answerIndex: 1 },
  { q: "Un ejemplo típico de documento de comunicación interna es:", options: ["Acta de reunión","Folleto al público","Nota de prensa","Anuncio publicitario"], answerIndex: 0 },
  { q: "Una estructura formal habitual en documentos internos incluye:", options: ["Encabezado (datos/asunto), cuerpo y cierre","Solo cuerpo del texto","Solo firma y sello","Solo anexos"], answerIndex: 0 },
  { q: "El apartado “Asunto” se utiliza para:", options: ["Añadir datos irrelevantes","Anticipar el contenido y facilitar la clasificación","Sustituir el cuerpo del documento","Evitar la lectura"], answerIndex: 1 },
  { q: "En un acta, un elemento imprescindible es:", options: ["Lista de asistentes y acuerdos adoptados","Publicidad del centro","Opiniones personales del redactor","Imágenes decorativas"], answerIndex: 0 },
  { q: "Para mejorar la claridad en documentos internos conviene:", options: ["Frases muy extensas sin puntos","Apartados, viñetas y párrafos breves","Eliminar títulos y subtítulos","Evitar enumeraciones"], answerIndex: 1 },
  { q: "Un requisito formal recomendable es:", options: ["No indicar fecha","Identificar remitente/destinatario cuando proceda","Omitir el asunto siempre","Evitar firmas"], answerIndex: 1 },
  { q: "Un tratamiento formal correcto en un escrito interno puede ser:", options: ["Hola tío/tía","Estimado/a Sr./Sra. + apellido (según el caso)","Qué pasa","Ey"], answerIndex: 1 },
  { q: "Una norma básica de puntuación para claridad es:", options: ["No usar comas nunca","Separar ideas completas con punto y aparte cuando cambia el tema","Sustituir puntos por emoticonos","Evitar dos puntos en enumeraciones"], answerIndex: 1 },
  { q: "Un error frecuente en documentos internos es:", options: ["No especificar acción/responsable/plazo","Usar asunto claro","Revisar datos antes de enviar","Mantener estructura fija"], answerIndex: 0 },
  { q: "Una buena práctica de redacción es:", options: ["Mezclar varios asuntos sin separarlos","Ordenar la información de lo general a lo específico","Eliminar el contexto","Escribir solo en mayúsculas"], answerIndex: 1 },
  { q: "La ortografía correcta en documentos internos es importante porque:", options: ["No afecta a la comprensión","Evita errores de interpretación y mejora la profesionalidad","Solo importa en documentos externos","Solo importa en documentos oficiales"], answerIndex: 1 },
  { q: "En un documento interno, el cierre suele incluir:", options: ["Conclusión/acción requerida y firma o identificación","Inicio del documento","Listado de asistentes","Portada con imágenes"], answerIndex: 0 },
  { q: "Al elaborar un documento interno, se debe identificar y marcar:", options: ["Solo el título","Estructura correcta y conceptos asociados","Solo los colores","Solo el número de páginas"], answerIndex: 1 }
];

// =========================
// FASE 3 — Comunicación externa (documento externo + tono/registro + estructura)
// =========================
window.phase3Bank = [
  { q: "La comunicación externa de un centro educativo se dirige a:", options: ["Solo al equipo directivo","Personas/entidades fuera del centro (familias, empresas, etc.)","Únicamente al alumnado","Solo al personal docente"], answerIndex: 1 },
  { q: "En un documento externo, el tono debe ser:", options: ["Improvisado y coloquial","Adecuado al destinatario y a la imagen institucional","Siempre informal para ser cercano","Excesivamente técnico sin necesidad"], answerIndex: 1 },
  { q: "Un elemento formal habitual en un documento externo es:", options: ["Asunto y datos del destinatario","Contenido ambiguo","Opiniones personales del redactor","Mensajes sin estructura"], answerIndex: 0 },
  { q: "Una finalidad típica de una comunicación externa es:", options: ["Coordinar tareas internas","Informar o solicitar algo a familias/entidades externas","Registrar acuerdos internos","Sustituir actas"], answerIndex: 1 },
  { q: "La ortografía y la sintaxis en documentos externos son importantes porque:", options: ["No influyen en la imagen","Transmiten profesionalidad y evitan malentendidos","Solo importan con anexos","Solo importan en textos largos"], answerIndex: 1 },
  { q: "El saludo de un documento externo debe:", options: ["Ser acorde al grado de formalidad","Omitirse siempre","Ser siempre “Hola”","Ser igual para cualquier destinatario"], answerIndex: 0 },
  { q: "Un error habitual en comunicación externa es:", options: ["Identificar destinatario y asunto","Usar tecnicismos innecesarios","Revisar el documento","Mantener tono institucional"], answerIndex: 1 },
  { q: "Un cierre adecuado suele incluir:", options: ["Despedida formal, firma y datos de contacto","Solo un icono","Una posdata sin relación","Un comentario personal"], answerIndex: 0 },
  { q: "Identificar al remitente sirve para:", options: ["Evitar responsabilidades","Aportar credibilidad y facilitar respuesta/seguimiento","Hacer el documento más largo","Sustituir el asunto"], answerIndex: 1 },
  { q: "La puntuación adecuada ayuda a:", options: ["Complicar el texto","Estructurar ideas y mejorar comprensión","Eliminar conectores","Reducir formalidad"], answerIndex: 1 },
  { q: "Una norma de tratamiento adecuada en documento externo es:", options: ["Tutear siempre","Usar “Sr./Sra.” cuando proceda y mantener cortesía","Usar apodos","Evitar tratamientos"], answerIndex: 1 },
  { q: "Un requisito formal importante es:", options: ["No incluir fecha","Cuidar la presentación (membrete/encabezado si procede)","Eliminar el asunto","No incluir firma"], answerIndex: 1 },
  { q: "La adecuación en comunicación externa implica:", options: ["Usar el mismo estilo siempre","Adaptar registro y vocabulario al destinatario","Evitar indicar propósito","Escribir con frases hechas"], answerIndex: 1 },
  { q: "Si el documento externo incluye anexos, conviene:", options: ["No mencionarlos","Indicarlos claramente y referenciarlos en el texto","Adjuntarlos sin nombre","Adjuntar documentos no relacionados"], answerIndex: 1 },
  { q: "En la actividad de fase 3, debes identificar y marcar:", options: ["Solo la extensión","Estructura correcta y conceptos asociados (uso, destinatario, tono…)","Solo la tipografía","Solo las imágenes"], answerIndex: 1 }
];

// =========================
// FASE 4 — Administración pública + soportes y canales
// =========================
window.phase4Bank = [
  { q: "En un documento dirigido a la Administración pública, el lenguaje debe ser:", options: ["Coloquial","Formal, preciso y objetivo","Creativo y publicitario","Ambiguo"], answerIndex: 1 },
  { q: "Un elemento imprescindible en un escrito a la Administración es:", options: ["Identificación del interesado y solicitud clara","Chistes para mejorar la lectura","Imágenes decorativas","Opiniones personales extensas"], answerIndex: 0 },
  { q: "La solicitud en un escrito administrativo debe:", options: ["Quedar implícita","Expresarse de forma concreta y sin ambigüedad","Redactarse informal","Evitarse para no alargar"], answerIndex: 1 },
  { q: "Una estructura típica incluye:", options: ["Identificación, exposición, solicitud y firma","Solo saludo y despedida","Solo anexos","Texto libre sin apartados"], answerIndex: 0 },
  { q: "Diferencia principal entre soporte y canal:", options: ["Soporte=vía de envío; canal=formato","Soporte=formato (papel/digital); canal=vía de transmisión (correo/sede electrónica)","No hay diferencia","Canal=lugar de archivo; soporte=destinatario"], answerIndex: 1 },
  { q: "Un canal oficial habitual es:", options: ["Mensajería personal","Sede electrónica/registro oficial","Red social del centro","Llamada informal"], answerIndex: 1 },
  { q: "La fecha en documento administrativo es importante porque:", options: ["Es decorativa","Afecta a plazos y registro","Sustituye al asunto","Evita anexos"], answerIndex: 1 },
  { q: "El registro de entrada/salida sirve para:", options: ["Dejar constancia y trazabilidad","Eliminar documentos antiguos","Sustituir la firma","Reducir controles"], answerIndex: 0 },
  { q: "Un requisito formal recomendable es:", options: ["Omitir órgano destinatario","Identificar órgano/unidad destinataria cuando proceda","No incluir datos del interesado","No firmar"], answerIndex: 1 },
  { q: "Una ventaja del soporte digital es:", options: ["No se puede archivar","Facilita almacenamiento, búsqueda y envío","Impide trazabilidad","No admite firma"], answerIndex: 1 },
  { q: "Una característica del soporte papel es:", options: ["Es intangible","Es tangible y tradicional, con archivo físico","No deja constancia","No se puede registrar"], answerIndex: 1 },
  { q: "Al elegir canal de envío conviene:", options: ["Elegir siempre el mismo","Ajustarlo a destinatario, urgencia y formalidad","Usar canales informales para documentos oficiales","Evitar registro"], answerIndex: 1 },
  { q: "Los modelos normalizados facilitan:", options: ["Errores","Tramitación y comprensión","Ambigüedad","Ausencia de control"], answerIndex: 1 },
  { q: "Un error que puede retrasar un trámite es:", options: ["Identificar al interesado","Redactar solicitud ambigua o incompleta","Incluir anexos relevantes","Indicar órgano destinatario"], answerIndex: 1 },
  { q: "En la actividad sobre soportes y canales debes explicar:", options: ["Solo definición de soporte","Diferencias soporte/canal y lo más característico de cada uno","Solo ejemplos sin explicación","Solo un canal digital"], answerIndex: 1 }
];

// =========================
// FASE 5 — Globalizadora (contenido propio: soportes, normalización, digital, gestión documental) + repaso integrado
// =========================
window.phase5Bank = [
  // Contenido específico (11)
  { q: "La normalización de impresos y documentos busca principalmente:", options: ["Que cada persona use su propio formato","Unificar criterios para facilitar comprensión y tramitación","Eliminar la estructura","Aumentar la extensión del texto"], answerIndex: 1 },
  { q: "Una ventaja de la normalización documental es:", options: ["Incrementar confusión","Facilitar archivo, búsqueda y tratamiento de documentos","Evitar trazabilidad","Eliminar revisiones"], answerIndex: 1 },
  { q: "Para el envío formal, un formato recomendable es:", options: ["PDF","Imagen sin texto","Archivo sin nombre","Documento sin estructura"], answerIndex: 0 },
  { q: "Una buena práctica de gestión documental es:", options: ["Guardar todo en una sola carpeta","Usar estructura de carpetas lógica y coherente","No usar nombres de archivo","Evitar fechas"], answerIndex: 1 },
  { q: "El control de versiones consiste en:", options: ["Eliminar documentos antiguos siempre","Registrar cambios y mantener histórico","Cambiar nombres sin criterio","Guardar copias sin identificar"], answerIndex: 1 },
  { q: "Un criterio útil para nombrar archivos es incluir:", options: ["Solo emojis","Fecha + asunto + versión (si procede)","Solo nombre del alumno/a","Nombre aleatorio"], answerIndex: 1 },
  { q: "Los metadatos permiten:", options: ["Ocultar información","Identificar información clave (fecha, asunto, responsable…)","Eliminar trazabilidad","Sustituir la firma"], answerIndex: 1 },
  { q: "Una medida importante de seguridad documental digital es:", options: ["No hacer copias de seguridad","Controlar accesos y permisos según roles","Compartir enlaces sin restricción","Guardar contraseñas en el nombre del archivo"], answerIndex: 1 },
  { q: "El procesamiento informático de documentos implica:", options: ["Ignorar formatos","Crear, editar, almacenar y recuperar documentos con herramientas digitales","Evitar sistemas de archivo","No aplicar normas de estilo"], answerIndex: 1 },
  { q: "La trazabilidad documental se refiere a:", options: ["No poder seguir el recorrido del documento","Poder seguir el ciclo del documento (creación, envío, registro, archivo)","Eliminar registros","Guardar sin orden"], answerIndex: 1 },
  { q: "Un error habitual en gestión documental es:", options: ["Hacer copias de seguridad","No controlar versiones y duplicar archivos sin criterio","Clasificar por carpetas","Usar nombres descriptivos"], answerIndex: 1 },

  // Repaso integrador (4)
  { q: "Para una comunicación escrita eficaz (repaso) es recomendable:", options: ["Planificar, redactar y revisar","Escribir sin revisar","Evitar estructura","Usar lenguaje ambiguo"], answerIndex: 0 },
  { q: "En documentos externos (repaso), es clave:", options: ["Omitir destinatario","Identificar destinatario y asunto claramente","Evitar firma","No incluir fecha nunca"], answerIndex: 1 },
  { q: "En comunicación con la Administración (repaso), conviene:", options: ["Redactar solicitud concreta y objetiva","Usar tono informal","Evitar identificación","Eliminar apartados"], answerIndex: 0 },
  { q: "En comunicación interna (repaso), es importante:", options: ["Indicar acción esperada, responsable y plazo cuando proceda","Poner solo una idea general","Incluir solo anexos","No usar asunto"], answerIndex: 0 }
];
