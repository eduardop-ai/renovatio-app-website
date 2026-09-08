(function () {
  var stored = null;
  try { stored = localStorage.getItem("renovatio-theme"); } catch (e) {}
  if (stored === "light" || stored === "dark") {
    document.documentElement.setAttribute("data-theme", stored);
  }
})();

document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("nav-links-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("nav-links-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    var setLabel = function () {
      var current = document.documentElement.getAttribute("data-theme");
      if (!current) {
        current = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      }
      themeToggle.textContent = current === "dark" ? "Light mode" : "Dark mode";
    };
    setLabel();
    themeToggle.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme");
      if (!current) {
        current = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      }
      var next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("renovatio-theme", next); } catch (e) {}
      setLabel();
    });
  }
});
