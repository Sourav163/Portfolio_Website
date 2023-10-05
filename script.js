let bar = document.getElementById("bar");
let navbarItems = document.getElementById("navbarItems");
let closeBtn = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    navbarItems.classList.add("active");
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    navbarItems.classList.remove("active");
  });
}
