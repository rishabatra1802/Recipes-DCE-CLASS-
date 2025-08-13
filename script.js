document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("recipes-container");

  recipes.forEach(recipe => {
    const card = document.createElement("div");
    card.classList.add("recipe-card");

    card.innerHTML = `
      <a href="${recipe.link}">
        <img src="${recipe.image}" alt="${recipe.title}">
        <h2>${recipe.title}</h2>
      </a>
    `;

    container.appendChild(card);
  });
});

document.getElementById('search-bar').addEventListener('input', function(e) {
    const searchValue = e.target.value.toLowerCase();
    const recipeCards = document.querySelectorAll('.recipe-card');

    recipeCards.forEach(card => {
        const title = card.querySelector('a').textContent.toLowerCase();
        if (title.includes(searchValue)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

