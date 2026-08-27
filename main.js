const menuButton = document.querySelector(".menu-button");
const menuOverlay = document.getElementById("menuOverlay");
const menuClose = document.getElementById("menuClose");
const menuLinks = document.querySelectorAll(".menu-link");

function openMenu() {
  if (!menuOverlay) return;

  menuOverlay.classList.add("is-open");
  document.body.classList.add("menu-open");
}

function closeMenu() {
  if (!menuOverlay) return;

  menuOverlay.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

if (menuButton) {
  menuButton.addEventListener("click", openMenu);
}

if (menuClose) {
  menuClose.addEventListener("click", closeMenu);
}

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});
