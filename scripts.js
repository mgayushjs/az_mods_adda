async function loadApps() {
  const response = await fetch("apps.json");
  const apps = await response.json();
  const appList = document.getElementById("app-list");

  function displayApps(filteredApps) {
    appList.innerHTML = "";
    filteredApps.forEach(app => {
      const card = document.createElement("div");
      card.className = "app-card";

      card.innerHTML = `
        <img src="${app.image}" alt="${app.name}">
        <h3>${app.name}</h3>
        <p><strong>Version:</strong> ${app.version}</p>
        <p><strong>Category:</strong> ${app.category}</p>
        <p><strong>Rating:</strong> ⭐ ${app.rating}</p>
        <a href="${app.link}" target="_blank">Download</a>
      `;
      appList.appendChild(card);
    });
  }

  // Initial load
  displayApps(apps);

  // Search filter
  document.getElementById("search").addEventListener("input", (e) => {
    const keyword = e.target.value.toLowerCase();
    const filtered = apps.filter(app => app.name.toLowerCase().includes(keyword));
    displayApps(filtered);
  });
}

loadApps();
