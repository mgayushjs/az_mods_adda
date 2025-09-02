async function loadApps() {
  const response = await fetch('apps.json');
  const apps = await response.json();

  // Recommended apps
  const recommendSection = document.querySelector('#recommend .app-list');
  apps.filter(app => app.category === "Recommend")
      .forEach(app => renderApp(app, recommendSection));

  // Latest apps
  const latestSection = document.querySelector('#latest .app-list');
  apps.filter(app => app.category === "Latest")
      .forEach(app => renderApp(app, latestSection));
}

function renderApp(app, container) {
  const card = document.createElement('div');
  card.className = 'app-card';
  card.innerHTML = `
    <img src="${app.image}" alt="${app.name}">
    <h3>${app.name}</h3>
    <p>⭐ ${app.rating} | ${app.version}</p>
    <a href="${app.link}" target="_blank">Download</a>
  `;
  container.appendChild(card);
}

loadApps();