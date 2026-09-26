const KEY = "notevault.notes";
const form = document.querySelector("#note-form");
const input = document.querySelector("#noteInput");
const list = document.querySelector("#noteList");
const emptyState = document.querySelector("#empty-state");

function load() {
  try {
    const stored = JSON.parse(localStorage.getItem(KEY) || "[]");
    return Array.isArray(stored)
      ? stored.filter((item) => item && item.id && typeof item.text === "string")
      : [];
  } catch {
    return [];
  }
}

let notes = load();

function save() {
  localStorage.setItem(KEY, JSON.stringify(notes));
}

function render() {
  list.replaceChildren();
  notes.forEach((note) => {
    const item = document.createElement("li");
    const body = document.createElement("p");
    body.textContent = note.text;
    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "Delete";
    remove.dataset.id = note.id;
    remove.setAttribute("aria-label", "Delete note");
    item.append(body, remove);
    list.append(item);
  });
  emptyState.hidden = notes.length > 0;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  notes.unshift({ id: crypto.randomUUID?.() || String(Date.now()) + Math.random(), text });
  save();
  render();
  form.reset();
  input.focus();
});

list.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  if (!id) return;
  notes = notes.filter((note) => note.id !== id);
  save();
  render();
});

render();
