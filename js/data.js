// js/data.js
// Datos del tema y bancos de preguntas (SOLO DATOS, sin lógica).
window.UNIT_NAME = "Tema 4 · Comunicación escrita";

/**
 * Formato:
 * { q: "Texto", options: ["A","B","C","D"], answerIndex: 0..3 }
 *
 * Bancos: idealmente 30 por fase (la app mostrará 15 aleatorias).
 */

window.phase1Bank = [
  { q:"Un mapa conceptual se caracteriza por…", options:["Listar ideas sin orden","Organizar conceptos de forma jerárquica y relacionada","Ser un texto en párrafos","Ser un resumen solo con definiciones"], answerIndex:1 },
  { q:"En un mapa conceptual, los conectores sirven para…", options:["Decorar","Expresar la relación entre conceptos","Sustituir conceptos","Evitar ejemplos"], answerIndex:1 },
  { q:"Para que el mapa sea útil, conviene…", options:["Incluir todo el tema sin selección","Usar conceptos clave y relaciones claras","Escribir frases muy largas","Evitar jerarquías"], answerIndex:1 },
  { q:"Una buena práctica al entregarlo en EVAGD es…", options:["Enviar una foto borrosa","Asegurar legibilidad (foto/escaneo) y buen encuadre","Cortar partes","No poner nombre"], answerIndex:1 },
];

window.phase2Bank = [
  { q:"Un documento de comunicación interna se dirige principalmente a…", options:["Público general","Personal del centro/organización","Medios de comunicación","Administración pública"], answerIndex:1 },
  { q:"En comunicación interna, es clave que el documento incluya…", options:["Opiniones personales","Datos, referencias y acciones claras","Emojis","Lenguaje ambiguo"], answerIndex:1 },
  { q:"¿Qué elemento suele aparecer en un documento interno formal?", options:["Identificación/encabezado y fecha","Chistes","Memes","Acrónimos sin explicar"], answerIndex:0 },
  { q:"Al marcar la estructura del documento, lo correcto es…", options:["Inventar apartados","Señalar partes (encabezado, cuerpo, firma/anexos si procede)","Eliminar el cuerpo","Ocultar la fecha"], answerIndex:1 },
];

window.phase3Bank = [
  { q:"Un documento de comunicación externa se orienta a…", options:["Solo al equipo directivo","Personas/entidades fuera del centro (familias, empresas, proveedores)","Solo a alumnado","Nadie en concreto"], answerIndex:1 },
  { q:"En comunicación externa, el tono debe ser…", options:["Informal siempre","Adecuado al destinatario, claro y respetuoso","Irónico","Excesivamente técnico sin necesidad"], answerIndex:1 },
  { q:"¿Qué es importante en la estructura de una carta/comunicado externo?", options:["No poner asunto","Identificar destinatario, asunto/objetivo y cierre/firma","Escribir todo en mayúsculas","No indicar fecha"], answerIndex:1 },
  { q:"Al elaborar el documento, también debes…", options:["Evitar justificar su uso","Definir su uso y finalidad en el contexto del centro","No relacionarlo con el tema","Omitir conceptos asociados"], answerIndex:1 },
];

window.phase4Bank = [
  { q:"En un documento dirigido a la Administración pública, suele ser imprescindible…", options:["No identificarse","Identificación del solicitante y objeto de la solicitud","Usar emoticonos","No poner fecha"], answerIndex:1 },
  { q:"La diferencia básica entre soporte y canal es que…", options:["Son lo mismo","El soporte es el formato/medio (papel/digital) y el canal es la vía de envío","El canal es el archivo y el soporte es el correo","No hay diferencia"], answerIndex:1 },
  { q:"Un ejemplo de canal de transmisión es…", options:["PDF","Papel","Sede electrónica / correo / registro","Grapa"], answerIndex:2 },
  { q:"Al comparar soportes, conviene considerar…", options:["Solo el color","Seguridad, accesibilidad, conservación y trazabilidad","Solo el tamaño","Solo el coste"], answerIndex:1 },
];

window.phase5Bank = [
  { q:"La normalización de impresos y documentos busca…", options:["Que cada uno use su formato","Unificar formato y estructura para facilitar comprensión y tramitación","Evitar firmas","Eliminar fechas"], answerIndex:1 },
  { q:"En gestión documental, una buena práctica es…", options:["Guardar todo sin nombrar","Nombrar archivos con criterio y controlar versiones","Borrar anexos","Usar carpetas al azar"], answerIndex:1 },
  { q:"Un soporte digital habitual para entregar documentación es…", options:["Servilleta","PDF","Pizarra","Sticker"], answerIndex:1 },
  { q:"La trazabilidad de un documento mejora si…", options:["No se registra nada","Se registra entrada/salida y se conserva evidencia","Se envía por cualquier chat","No se pone referencia"], answerIndex:1 },
];
