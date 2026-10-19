(function () {
  var theme = "dark";

  try {
    var saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      theme = saved;
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      theme = "light";
    }
  } catch (_) {
    // Storage can be unavailable. The deterministic dark fallback still works.
  }

  document.documentElement.dataset.theme = theme;
}());
