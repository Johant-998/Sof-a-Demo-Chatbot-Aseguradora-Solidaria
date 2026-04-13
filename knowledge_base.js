// ============================================================
//  KNOWLEDGE BASE — Aseguradora Solidaria de Colombia
//  Fuente: aseguradorasolidaria.com.co  |  Abril 2026
// ============================================================

const KB = {

  // ----------------------------------------------------------
  // BIENVENIDA / PORTAFOLIO GENERAL
  // ----------------------------------------------------------
  bienvenida: {
    keywords: ["hola", "buenos", "ayuda", "info", "información", "seguros", "portafolio", "qué ofrecen", "productos", "catálogo"],
    respuesta: `¡Hola! Soy <strong>Sofía</strong>, tu asistente de Aseguradora Solidaria 👋<br><br>
Ofrecemos seguros para cada etapa de tu vida:<br><br>
🏠 <strong>Seguros para tu hogar</strong> — Hogar, arrendamiento, mascotas<br>
🧑 <strong>Seguros para ti</strong> — Accidentes personales, indemnizaciones<br>
🚗 <strong>Seguros para tu vehículo</strong> — SOAT, todo riesgo, autos, camiones<br>
💻 <strong>Seguros en línea</strong> — Cotiza, compra y gestiona desde tu celular<br><br>
¿Sobre cuál quieres saber más?`,
    quickReplies: ["Seguro de hogar", "Seguro de vida", "SOAT 2025", "Seguro de mascotas", "Seguro de arrendamiento"]
  },

  // ----------------------------------------------------------
  // SEGURO DE HOGAR
  // ----------------------------------------------------------
  hogar: {
    keywords: ["hogar", "casa", "vivienda", "inmueble", "incendio", "robo", "inundación", "daños", "solihogar"],
    respuesta: `El <strong>Seguro de Hogar Solidaria</strong> protege tu vivienda y todo lo que hace parte de ella.<br><br>
<strong>¿Qué cubre?</strong><br>
🔥 Incendio y rayo<br>
🔓 Robo y hurto calificado<br>
🌊 Desastres naturales e inundación<br>
⚡ Daños eléctricos<br>
🏗️ Responsabilidad civil frente a terceros<br>
🔧 Asistencia domiciliaria: plomería, electricidad, cerrajería y más<br><br>
<strong>¿Quién puede tomarlo?</strong><br>
• Propietarios: asegura estructura + contenidos<br>
• Arrendatarios: asegura solo contenidos<br>
• Si ya tienes seguro de vivienda (financiado), puedes complementar con cobertura de contenidos<br><br>
<strong>Pago:</strong> Anualidad completa por PSE o tarjeta de crédito.<br>
<strong>Asistencia:</strong> 📱 WhatsApp CAMI o ☎️ 3232641770`,
    quickReplies: ["¿Cómo cotizo el seguro de hogar?", "¿Cubre arriendo?", "¿Cómo reclamo?", "Seguro de arrendamiento"]
  },

  // ----------------------------------------------------------
  // SEGURO DE ARRENDAMIENTO
  // ----------------------------------------------------------
  arrendamiento: {
    keywords: ["arrendamiento", "arriendo", "canon", "arrendatario", "propietario", "alquiler", "inquilino"],
    respuesta: `El <strong>Seguro de Arrendamiento Solidaria</strong> está dirigido a propietarios y arrendadores de locales comerciales, oficinas, bodegas y viviendas urbanas.<br><br>
<strong>¿Qué cubre?</strong><br>
📄 100% de cánones no pagados por el arrendatario<br>
🏢 Cuotas de administración pactadas en contrato<br>
💧 Servicios públicos pendientes al entregar el inmueble<br>
🔧 Asistencia domiciliaria (plomería, cerrajería y más)<br>
🏚️ Pérdida de arrendamiento por inhabitabilidad<br>
⚖️ Respaldo de la cláusula penal en caso de mora<br><br>
<strong>Cotiza en:</strong> solidaria.com.co/WALeasing/cotizacion/<br><br>
⚠️ <strong>Aviso antifraude:</strong> Solo pagamos por PSE o tarjeta de crédito. NO aceptamos Nequi, Daviplata ni QR Bancolombia.`,
    quickReplies: ["Cotizar seguro de arrendamiento", "Seguro de hogar", "¿Cómo pago?"]
  },

  // ----------------------------------------------------------
  // SEGURO DE MASCOTAS
  // ----------------------------------------------------------
  mascotas: {
    keywords: ["mascota", "perro", "gato", "peludo", "veterinario", "animal", "mascota"],
    respuesta: `El <strong>Seguro para Mascotas Solidaria</strong> es 100% digital y protege a tu mejor amigo 🐾<br><br>
<strong>¿Qué cubre?</strong><br>
🏥 Gastos médicos por accidente o enfermedad (atención, hospitalización, tratamiento)<br>
🤝 Daños a terceros: si tu mascota causa daños materiales o lesiones<br>
🕊️ Servicios exequiales (incluye eutanasia)<br>
🏨 Hospedaje para tu mascota y controles médicos<br><br>
<strong>¿Qué mascotas cubre?</strong><br>
• Perros y gatos entre <strong>3 meses y 10 años</strong> de edad<br>
• Hasta <strong>3 mascotas</strong> en una sola póliza (con descuento)<br><br>
<strong>Pago:</strong> Anualidad completa por PSE o tarjeta de crédito<br>
<strong>Vigencia:</strong> 365 días`,
    quickReplies: ["Cotizar seguro de mascotas", "¿Cuánto vale?", "Volver al portafolio"]
  },

  // ----------------------------------------------------------
  // SEGURO DE ACCIDENTES PERSONALES
  // ----------------------------------------------------------
  accidentes: {
    keywords: ["accidente", "accidentes personales", "muerte accidental", "incapacidad", "hospitalización", "gastos médicos personales", "renta diaria"],
    respuesta: `El <strong>Seguro de Accidentes Personales Solidaria</strong> cuida tu bienestar y el de tu familia ante cualquier imprevisto 24/7.<br><br>
<strong>¿Qué cubre?</strong><br>
💔 <strong>Muerte accidental:</strong> apoyo económico para tus beneficiarios<br>
🦽 <strong>Incapacidad total o parcial:</strong> indemnización proporcional al grado de incapacidad<br>
🏥 <strong>Gastos médicos:</strong> reembolso por atención hospitalaria y quirúrgica<br>
⚰️ <strong>Auxilio funerario:</strong> cobertura de gastos exequiales<br>
🛏️ <strong>Renta diaria por hospitalización:</strong> pago por cada día hospitalizado<br>
🌟 <strong>Cobertura Platinum adicional:</strong> auxilio educativo + asistencia SOS Solienvida<br><br>
<strong>Solicítalo en:</strong> aseguradorasolidaria.com.co/seguros-para-ti/accidentes-personales`,
    quickReplies: ["Cotizar accidentes personales", "¿Qué es la cobertura Platinum?", "Volver al portafolio"]
  },

  // ----------------------------------------------------------
  // SOAT
  // ----------------------------------------------------------
  soat: {
    keywords: ["soat", "obligatorio", "tránsito", "accidente tránsito", "vehículo obligatorio", "placa"],
    respuesta: `El <strong>SOAT (Seguro Obligatorio de Accidentes de Tránsito)</strong> te acompaña en cada trayecto y es obligatorio para circular en Colombia.<br><br>
<strong>¿Qué cubre?</strong><br>
🏥 Gastos médicos, quirúrgicos, farmacéuticos y hospitalarios<br>
🦽 Incapacidad permanente<br>
⚰️ Muerte de la víctima y gastos funerarios<br>
🚑 Gastos de transporte y movilización de víctimas<br>
🚗 Protección en accidentes con vehículos no identificados<br><br>
<strong>¿Quién debe tenerlo?</strong> Todos los vehículos automotores que circulen en vías públicas de Colombia.<br><br>
<strong>¿Cómo adquirirlo?</strong><br>
💻 Digital: aseguradorasolidaria.com.co/seguro-vehiculo/soat<br>
🏢 Físico: puntos autorizados Aseguradora Solidaria<br><br>
<strong>Reclamaciones:</strong><br>
• Digital: activa-it.net<br>
• Físico: Calle 103B No. 49B-41, Bogotá (único punto autorizado)`,
    quickReplies: ["Ver precios del SOAT", "¿Cómo renuevo el SOAT?", "¿Qué hago en un accidente?", "Seguro todo riesgo carro"]
  },

  // ----------------------------------------------------------
  // PRECIOS SOAT
  // ----------------------------------------------------------
  preciosSoat: {
    keywords: ["precio soat", "valor soat", "tarifa soat", "cuánto cuesta soat", "cuánto vale soat"],
    respuesta: `<strong>Tarifas SOAT 2025</strong> — Aseguradora Solidaria:<br><br>
🏍️ Motos hasta 100cc: <strong>$232.400</strong><br>
🏍️ Motos 100–200cc: <strong>$265.800</strong><br>
🏍️ Motos más de 200cc: <strong>$302.100</strong><br>
🚗 Automóviles particulares: <strong>$289.900</strong><br>
🚕 Taxis: <strong>$398.200</strong><br>
🚌 Buses y busetas: desde <strong>$412.000</strong><br>
🚛 Camiones: desde <strong>$456.000</strong><br><br>
💳 Puedes pagar en línea por PSE o tarjeta de crédito.<br>
🌐 Adquiérelo en: aseguradorasolidaria.com.co`,
    quickReplies: ["Comprar SOAT ahora", "¿Cómo renuevo?", "Seguro todo riesgo para carro"]
  },

  // ----------------------------------------------------------
  // SEGURO DE VEHÍCULOS (TODO RIESGO)
  // ----------------------------------------------------------
  vehiculos: {
    keywords: ["carro", "auto", "vehículo", "todo riesgo", "automóvil", "camioneta", "robo carro", "daños carro", "seguro carro"],
    respuesta: `Aseguradora Solidaria tiene seguros para <strong>todos los tipos de vehículos</strong>:<br><br>
🚗 <strong>Automóviles particulares:</strong> accidentes, robos, daños. Incluye asistencia vial y respaldo legal<br>
🏕️ <strong>Camperos, camionetas y pick-ups:</strong> protección todo terreno ante daños, accidentes o pérdida total<br>
🚕 <strong>Taxis amarillos:</strong> respaldo diario ante daños, robos o accidentes<br>
🚛 <strong>Camiones y furgones:</strong> cubre cargas, rutas e inversión<br>
🚐 <strong>Póliza colectiva (flotas):</strong> para empresas con múltiples vehículos<br>
🔑 <strong>Vehículos en alquiler:</strong> daños, hurto, accidentes y responsabilidad civil<br><br>
<strong>Beneficios generales:</strong><br>
✅ Asistencia 24/7<br>
✅ Coberturas flexibles<br>
✅ Acompañamiento constante`,
    quickReplies: ["SOAT 2025", "Cotizar seguro de carro", "Seguro para flotas"]
  },

  // ----------------------------------------------------------
  // CANALES DE ATENCIÓN / CONTACTO
  // ----------------------------------------------------------
  contacto: {
    keywords: ["contacto", "teléfono", "llamar", "hablar", "asesor", "línea", "whatsapp", "cami", "atención", "comunicarme"],
    respuesta: `Puedes contactarnos por estos canales:<br><br>
📞 <strong>Línea gratuita nacional:</strong> 018000 512021<br>
📱 <strong>Línea Solidaria:</strong> #789 (desde celular)<br>
📱 <strong>WhatsApp CAMI:</strong> <a href="https://wa.me/573142034106" target="_blank">+57 314 203 4106</a> — disponible 24/7<br>
🌐 <strong>Portal web:</strong> aseguradorasolidaria.com.co<br>
🏢 <strong>Agencias:</strong> Red nacional en todo Colombia<br><br>
⏰ <strong>Horario de atención:</strong> Lun–Vie 7am–8pm · Sáb 8am–3pm<br><br>
📣 <strong>Siniestros de personas e infraestructura:</strong> 333 0334595 (Lun–Vie 8am–5pm)`,
    quickReplies: ["Chatear con CAMI", "Reportar siniestro", "Encontrar agencia"]
  },

  // ----------------------------------------------------------
  // SINIESTROS
  // ----------------------------------------------------------
  siniestros: {
    keywords: ["siniestro", "accidente", "robo", "daño", "reportar", "reclamar", "reclamación", "qué hago"],
    respuesta: `Para <strong>reportar un siniestro</strong> tienes varias opciones:<br><br>
📞 <strong>018000 512021</strong> — línea gratuita 24/7<br>
📱 <strong>#789</strong> — Línea Solidaria desde celular<br>
📱 <strong>WhatsApp CAMI:</strong> +57 314 203 4106<br>
🌐 <strong>Portal:</strong> aseguradorasolidaria.com.co/reporte-seguros-siniestros<br>
🏢 Cualquier agencia en Colombia<br><br>
<strong>Para siniestros de SOAT:</strong><br>
• Digital: activa-it.net<br>
• Físico: Calle 103B No. 49B-41, Bogotá<br><br>
💡 Puedes hacer tu reclamación directamente, <strong>sin apoderados ni intermediarios</strong>.`,
    quickReplies: ["Documentos para reclamar", "Siniestro de hogar", "Siniestro de vehículo"]
  },

  // ----------------------------------------------------------
  // PAGOS
  // ----------------------------------------------------------
  pagos: {
    keywords: ["pagar", "pago", "PSE", "tarjeta", "cuánto cuesta", "precio", "valor", "cuota", "efecty", "baloto"],
    respuesta: `Puedes pagar tus seguros de forma <strong>fácil y segura</strong>:<br><br>
💻 <strong>PSE</strong> (débito) — desde nuestra web<br>
💳 <strong>Tarjeta de crédito</strong> — en línea<br>
🏦 <strong>Puntos aliados:</strong> Efecty, Baloto, Bancolombia<br>
📱 <strong>App Aseguradora Solidaria</strong><br>
🏢 <strong>Cualquier agencia</strong> en Colombia<br><br>
⚠️ <strong>Importante — Evita fraudes:</strong><br>
Aseguradora Solidaria <strong>NO</strong> solicita pagos por:<br>
❌ Nequi<br>
❌ Daviplata<br>
❌ QR Bancolombia<br><br>
Ante dudas llama al <strong>018000 512021</strong> (gratuita).`,
    quickReplies: ["Pagar en línea", "Reportar fraude", "Contactar asesor"]
  },

  // ----------------------------------------------------------
  // CERTIFICACIONES / CONFIANZA
  // ----------------------------------------------------------
  confianza: {
    keywords: ["confiable", "certificación", "solidez", "respaldo", "calificación", "great place", "financiera"],
    respuesta: `Aseguradora Solidaria cuenta con <strong>certificaciones que garantizan excelencia y transparencia</strong>:<br><br>
🏆 <strong>Great Place to Work</strong> — Mujeres 2026<br>
🏆 <strong>Great Place to Work</strong> — Cultura Organizacional<br>
⭐ <strong>Calificación AA+</strong> — Value & Risk Rating<br>
💪 <strong>Alta fortaleza financiera</strong><br>
🌿 <strong>Sello Verde de Verdad</strong> — Categoría Árbol<br><br>
Con más de 20 años respaldando a los colombianos, somos una aseguradora sólida, transparente y comprometida.`,
    quickReplies: ["Ver productos", "Contactar asesor"]
  },

  // ----------------------------------------------------------
  // AUTOGESTIÓN / PORTAL CLIENTES
  // ----------------------------------------------------------
  autogestion: {
    keywords: ["póliza", "poliza", "consultar", "descargar", "portal", "acceso clientes", "mi cuenta", "autogestión"],
    respuesta: `Gestiona tus seguros de forma <strong>fácil y rápida</strong> desde cualquier lugar:<br><br>
🌐 <strong>Portal de clientes:</strong> solidaria.com.co/WA_DigitalClient<br>
📱 <strong>WhatsApp CAMI</strong> — disponible 24/7 para:<br>
&nbsp;&nbsp;• Cotizar seguros<br>
&nbsp;&nbsp;• Reportar siniestros<br>
&nbsp;&nbsp;• Solicitar asistencias<br>
&nbsp;&nbsp;• Resolver dudas<br><br>
Desde el portal puedes:<br>
✅ Consultar tus pólizas<br>
✅ Realizar pagos<br>
✅ Hacer seguimiento de siniestros<br>
✅ Solicitar asistencias especiales`,
    quickReplies: ["Ingresar al portal", "Hablar con CAMI", "Reportar siniestro"]
  },

  // ----------------------------------------------------------
  // FALLBACK — respuesta por defecto
  // ----------------------------------------------------------
  default: {
    keywords: [],
    respuesta: `Entiendo tu consulta. Para darte la mejor asesoría, contáctanos directamente:<br><br>
📞 <strong>018000 512021</strong> — línea gratuita nacional<br>
📱 <strong>#789</strong> — Línea Solidaria<br>
💬 <strong>WhatsApp CAMI:</strong> +57 314 203 4106 (24/7)<br>
⏰ Lun–Vie 7am–8pm · Sáb 8am–3pm<br><br>
¿Puedo ayudarte con algo más?`,
    quickReplies: ["Ver todos los seguros", "Cotizar seguro", "Reportar siniestro", "Encontrar agencia"]
  }
};

// ============================================================
//  MOTOR DE BÚSQUEDA EN LA BASE DE CONOCIMIENTO
// ============================================================

function getResponse(userText) {
  const text = userText.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Recorre todos los temas y busca coincidencias de keywords
  for (const [topic, data] of Object.entries(KB)) {
    if (topic === "default") continue;
    const match = data.keywords.some(kw =>
      text.includes(kw.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
    );
    if (match) return data;
  }

  return KB.default;
}
