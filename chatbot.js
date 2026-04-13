// ============================================================
//  chatbot.js — Lógica del asistente Sofía
//  Depende de: knowledge_base.js (debe cargarse antes)
// ============================================================

// ------------------------------------------------------------
//  UTILIDADES
// ------------------------------------------------------------
function now() {
  return new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' });
}

// ------------------------------------------------------------
//  RENDERIZADO DE MENSAJES
// ------------------------------------------------------------
function addUserMessage(text) {
  const container = document.getElementById('msgs');
  const div = document.createElement('div');
  div.className = 'm u';
  div.innerHTML = `<div class="bb">${text}</div><div class="t">${now()}</div>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function addTypingIndicator() {
  const container = document.getElementById('msgs');
  const div = document.createElement('div');
  div.id = 'ty';
  div.className = 'm b';
  div.innerHTML = `
    <div class="tw">
      <div class="td"></div>
      <div class="td"></div>
      <div class="td"></div>
    </div>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function addBotMessage(data) {
  const container = document.getElementById('msgs');

  // Eliminar indicador de escritura
  const typing = document.getElementById('ty');
  if (typing) typing.remove();

  const div = document.createElement('div');
  div.className = 'm b';

  // Quick replies
  let quickRepliesHTML = '';
  if (data.quickReplies && data.quickReplies.length) {
    const buttons = data.quickReplies
      .map(q => `<button class="qb" onclick="handleQuickReply('${q}')">${q}</button>`)
      .join('');
    quickRepliesHTML = `<div class="qrs">${buttons}</div>`;
  }

  div.innerHTML = `
    <div class="bb">${data.respuesta}</div>
    <div class="t">${now()}</div>
    ${quickRepliesHTML}`;

  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

// ------------------------------------------------------------
//  FLUJO PRINCIPAL
// ------------------------------------------------------------
function send() {
  const input = document.getElementById('ci');
  const text = input.value.trim();
  if (!text) return;

  input.value = '';
  addUserMessage(text);
  addTypingIndicator();

  const delay = 900 + Math.random() * 600;
  setTimeout(() => {
    const response = getResponse(text);
    addBotMessage(response);
  }, delay);
}

function handleQuickReply(text) {
  addUserMessage(text);
  addTypingIndicator();

  const delay = 900 + Math.random() * 600;
  setTimeout(() => {
    const response = getResponse(text);
    addBotMessage(response);
  }, delay);
}

function toggleChat() {
  const widget = document.getElementById('chatW');
  const bubble = document.getElementById('chatBubble');
  if (widget.style.display === 'none' || widget.style.display === '') {
    widget.style.display = 'flex';
    bubble.style.display = 'none';
  } else {
    widget.style.display = 'none';
    bubble.style.display = 'flex';
  }
}

// ------------------------------------------------------------
//  MENSAJE INICIAL AL CARGAR
// ------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    addBotMessage(KB.bienvenida);
  }, 600);
});
