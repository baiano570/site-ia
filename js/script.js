const messages = document.getElementById("messages");
const input = document.getElementById("input");
const sendBtn = document.getElementById("sendBtn");
const toggleTheme = document.getElementById("toggleTheme");
const body = document.body;

function addMessage(text, type) {
  const bubble = document.createElement("div");
  bubble.className = "bubble " + type;
  bubble.innerText = text;
  messages.appendChild(bubble);
  messages.scrollTop = messages.scrollHeight;

  // Limita histórico (leve)
  if (messages.children.length > 14) {
    messages.removeChild(messages.children[0]);
  }
}

function fakeIAResponse(userText) {
  return `Resposta da IA (teste) para: "${userText}"`;
}

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  setTimeout(() => {
    addMessage(fakeIAResponse(text), "bot");
  }, 500);
}

sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keydown", e => {
  if (e.key === "Enter") sendMessage();
});

/* MODO CLARO / ESCURO */
toggleTheme.addEventListener("click", () => {
  if (body.classList.contains("light")) {
    body.classList.replace("light", "dark");
    toggleTheme.innerText = "☀️";
  } else {
    body.classList.replace("dark", "light");
    toggleTheme.innerText = "🌙";
  }
});
