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
  { q:"En un correo profesional, el asunto debe ser…", options:["Vago ('Hola')","Claro y específico","Con emoticonos en exceso","Muy largo y confuso"], answerIndex:1 },
  { q:"Una buena práctica antes de enviar es…", options:["No releer","Revisar ortografía y destinatarios","Escribir en MAYÚSCULAS","Enviar sin adjuntar"], answerIndex:1 },
  { q:"La firma profesional suele incluir…", options:["Apodos","Nombre y datos de contacto","Chistes","Opiniones personales"], answerIndex:1 },
];

window.phase2Bank = [
  { q:"Estructura recomendada de un correo:", options:["Sin saludo","Saludo + contexto + acción + cierre","Solo adjunto","Todo en mayúsculas"], answerIndex:1 },
  { q:"Uso correcto de CC:", options:["Copiar a todos","Solo a quienes deban estar informados","Nunca usar CC","Usar CC para presionar"], answerIndex:1 },
  { q:"Con adjuntos, conviene…", options:["No mencionarlos","Mencionarlos y comprobar que están","Enviar sin revisar","Adjuntar sin nombre"], answerIndex:1 },
];

window.phase3Bank = [
  { q:"En documentos, la claridad mejora cuando…", options:["Mezclas temas","Usas frases cortas y ordenadas","Omites datos clave","Usas jerga innecesaria"], answerIndex:1 },
  { q:"Un registro interno debe priorizar…", options:["Opiniones","Datos verificables y referencias","Rumores","Emojis"], answerIndex:1 },
  { q:"Si hay datos sensibles, lo correcto es…", options:["Pegarlos en cualquier chat","Usar canal autorizado y verificar destinatario","Enviarlos a un grupo","Publicarlos"], answerIndex:1 },
];

window.phase4Bank = [
  { q:"En mensajería interna, un buen mensaje incluye…", options:["Solo 'llámame'","Contexto + acción + referencia + plazo","Chistes","Mayúsculas"], answerIndex:1 },
  { q:"La urgencia debe…", options:["No indicarse","Indicarse con plazo realista","Expresarse con gritos","Darse por supuesta"], answerIndex:1 },
  { q:"Al reenviar un correo, conviene…", options:["No explicar nada","Añadir contexto y qué se espera","Cambiar asunto sin motivo","Borrar historial siempre"], answerIndex:1 },
];

window.phase5Bank = [
  { q:"Un cierre profesional de correo:", options:["Bye","Un saludo / Quedo a su disposición","Nos vemos","Lo dicho"], answerIndex:1 },
  { q:"Evita en comunicación escrita:", options:["Listas claras","MAYÚSCULAS sostenidas","Puntos clave","Cierre cordial"], answerIndex:1 },
  { q:"Si no puedes cumplir un plazo, lo profesional es…", options:["No contestar","Proponer alternativa y nuevo plazo realista","Prometer igual","Culpar a otro"], answerIndex:1 },
];
