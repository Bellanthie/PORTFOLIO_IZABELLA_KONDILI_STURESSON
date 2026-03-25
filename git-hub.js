const baseUrl = "https://api.github.com/users/Bellanthie/repos";
// let loadGitHubProjects = 0;

async function loadGitHubProjects() {
  const loading = document.getElementById("loading");
  const container = document.getElementById("github-projects");
  try {
    const response = await fetch(
      "https://api.github.com/users/Bellanthie/repos",
    );
    if (!response.ok) {
      throw new Error("Kunde inte hämta GitHub-projekt");
    }

    const repos = await response.json();
    loading.style.display = "none";
    repos.forEach((repo) => {
      const card = document.createElement("article");
      card.className = "card";

      card.innerHTML = `
        <div class="card-body">
            <h3>${repo.name}</h3>
            <p>${repo.description ?? "ingen beskrivning ännu."}</p>
            <a href="${repo.html_url}" target="_blank" class="btn">View on GitHub</a>
        </div>
        `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error(error);
    container.innerHTML = "<p>Kunde inte ladda projekt just nu.</p>";
  }
}

loadGitHubProjects();
