export function ExpandeColapsa() {
  const doc = document;
  const toggle = doc.querySelector(".toggle");
  const navbar = doc.querySelector(".navbar");
  const estaAtivo = navbar.classList.contains("ativo");

  if (estaAtivo) {
    toggle.innerText = "=";
    navbar.classList.remove("ativo");
  } else {
    toggle.innerText = "x";
    navbar.classList.add("ativo");
  }
}