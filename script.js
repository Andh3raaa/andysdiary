(() => {
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("andysDiaryTheme");
  if (savedTheme === "light") document.body.classList.add("light");

  function updateThemeIcon() {
    if (themeToggle) themeToggle.textContent = document.body.classList.contains("light") ? "☀" : "☾";
  }
  updateThemeIcon();

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light");
      localStorage.setItem("andysDiaryTheme", document.body.classList.contains("light") ? "light" : "dark");
      updateThemeIcon();
    });
  }

  const search = document.getElementById("searchEntries");
  const cards = [...document.querySelectorAll(".entry-card")];
  const empty = document.getElementById("emptyState");
  if (search) {
    search.addEventListener("input", () => {
      const query = search.value.trim().toLowerCase();
      let visible = 0;
      cards.forEach(card => {
        const match = card.textContent.toLowerCase().includes(query);
        card.hidden = !match;
        if (match) visible++;
      });
      if (empty) {
        empty.hidden = visible !== 0;
        empty.textContent = cards.length
          ? "no memories match that search... try another little word? ♡"
          : "no memories here yet...♡";
      }
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();