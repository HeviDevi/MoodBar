let favorites = JSON.parse(localStorage.getItem("savedDrinks")) || [];

function displayfavorites(favorites) {
  const favoritesCard = document.querySelector(".favoritesCard");

  favorites.forEach((drink) => {
    const card = document.createElement("div");
    card.className = "card m-3";
    card.style.width = "48rem";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    cardBody.style.display = "flex";
    cardBody.style.flexDirection = "column";

    const deleteButton = document.createElement("button");
    deleteButton.id = "delete-btn";
    deleteButton.className = "btn mt-1";
    deleteButton.innerHTML = '<i class="fa-regular fa-trash"></i>';

    const deleteContainer = document.createElement("div");
    deleteContainer.className = "deleteContainer";
    deleteContainer.style.display = "flex";
    deleteContainer.style.justifyContent = "flex-end";
    deleteContainer.style.width = "100%";
    deleteContainer.appendChild(deleteButton);

    const photoTitleWrapper = document.createElement("div");
    photoTitleWrapper.className = "photoTitleWrapper";
    photoTitleWrapper.style.display = "flex";
    photoTitleWrapper.style.alignItems = "center";
    photoTitleWrapper.style.justifyContent = "flex-start";
    photoTitleWrapper.style.gap = "20px";

    const photo = document.createElement("img");
    photo.src = drink.strDrinkThumb || "./assets/images/placeholder.jpg"; // Fallback to a placeholder image
    photo.className = "card-img-top mt-3";
    photo.style.width = "200px"; // Set size of the image

    const cardTitle = document.createElement("h1");
    cardTitle.className = "card-title";
    cardTitle.textContent = drink.strDrink || "No drink name available";

    const ingredientHowToWrapper = document.createElement("div");
    ingredientHowToWrapper.className = "ingredientHowToWrapper";
    ingredientHowToWrapper.style.display = "flex";
    ingredientHowToWrapper.style.justifyContent = "flex-start";
    ingredientHowToWrapper.style.gap = "70px";

    const cardIngredients = document.createElement("ul"); // Create <ul> element
    cardIngredients.className = "ingredients mt-4";

    const header = document.createElement("h3");
    header.textContent = "Ingredients:";
    cardIngredients.appendChild(header);

    // Create a for loop for ingredients and make it a list with <li> element
    for (let i = 0; i <= 20; i++) {
      const ingredient = drink["strIngredient" + i];
      if (ingredient) {
        const listItem = document.createElement("li");
        listItem.textContent = ingredient;
        cardIngredients.appendChild(listItem);
      }
    }

    // If no ingredients are present, display a placeholder message
    if (cardIngredients.children.length === 0) {
      const listItem = document.createElement("li");
      listItem.textContent = "No ingredients available";
    }

    const cardHowTo = document.createElement("p");
    cardHowTo.className = "how-to";
    cardHowTo.textContent = drink.strInstructions;

    const instructionHeader = document.createElement("h3");
    instructionHeader.className = "instructionHeader mt-4";
    instructionHeader.textContent = "Instructions:";
    cardHowTo.prepend(instructionHeader);

    // Append elements to cardBody
    cardBody.appendChild(deleteContainer);
    cardBody.appendChild(photoTitleWrapper);
    photoTitleWrapper.appendChild(photo);
    photoTitleWrapper.appendChild(cardTitle);
    cardBody.appendChild(ingredientHowToWrapper);
    ingredientHowToWrapper.appendChild(cardIngredients);
    ingredientHowToWrapper.appendChild(cardHowTo);

    card.appendChild(cardBody);
    favoritesCard.appendChild(card);
  });
}

addEventListener("DOMContentLoaded", function () {
  displayfavorites(favorites);
});

deleteButtonElement = document.getElementById("delete-btn");

deleteButtonElement.addEventListener("click", handleDeleteTask());

function handleDeleteTask() {
  this.parentElement.remove();

  let deleteById = this.parentElement.id;

  favorites = favorites.filter((project) => project.title !== deleteById);
  localStorage.setItem("projects", JSON.stringify(allProjects));
}