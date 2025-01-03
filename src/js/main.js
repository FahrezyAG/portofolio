const btnmenu = document.getElementById("btn-menu");
const menu = document.getElementById("menu");
const header = document.getElementById("nav"); // Assuming the header is the nav element

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    btnmenu.classList.remove("hidden");
  } else {
    btnmenu.classList.add("hidden");
  }
});
btnmenu.addEventListener("click", function () {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    setTimeout(() => {
      menu.classList.remove("opacity-0", "-translate-y-6");
      menu.classList.add("opacity-100", "translate-y-0");
    }, 10); // Small delay to ensure the transition is applied
  } else {
    menu.classList.add("opacity-0", "-translate-y-6");
    menu.classList.remove("opacity-100", "translate-y-0");
    setTimeout(() => {
      menu.classList.add("hidden");
    }, 300); // Duration of the transition
  }
});
z