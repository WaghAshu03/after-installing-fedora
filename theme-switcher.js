(function () {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const savedTheme = localStorage.getItem("theme");
  if (!savedTheme) {
    document.documentElement.setAttribute(
      "data-theme",
      prefersDarkMode ? "dark" : "light"
    );
    localStorage.setItem("theme", prefersDarkMode ? "dark" : "light");
  } else {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }
})();

console.log("theme switcher");
