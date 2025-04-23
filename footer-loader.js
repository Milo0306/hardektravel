document.addEventListener("DOMContentLoaded", () => {
  fetch("footer.html")
    .then(res => res.text())
    .then(data => {
      document.querySelector("footer").innerHTML = data;
      setLanguage(currentLanguage); // uruchamiamy tłumaczenie dopiero po załadowaniu stopki
    });
});
