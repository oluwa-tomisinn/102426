const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "×" : "☰";
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = "☰";
      nav.querySelectorAll("a").forEach(item => item.classList.remove("active"));
      link.classList.add("active");
    });
  });
}

document.querySelectorAll(".portfolio-tags button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".portfolio-tags button").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
  });
});

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
