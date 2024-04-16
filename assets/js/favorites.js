let favorites = JSON.parse(localStorage.getItem("savedDrinks")) || [];

function displayfavorites(favorites) {
  const mainCard = document.querySelector(".mainCard");

  favorites.forEach((drink) => {
    const card = document.createElement("div");
    card.className = "card m-3";
    card.style.width = "48rem";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    cardBody.style.display = "flex";
    cardBody.style.flexDirection = "column";

    //   Background color based on mood

    switch (localStorage.getItem("userMood")) {
      case "Happy":
        card.classList.add("cardHappy");
        break;
      case "Sad":
        card.classList.add("cardSad");
        break;
      case "Angry":
        card.classList.add("cardAngry");
        break;
      case "Exhausted":
        card.classList.add("cardExhausted");
        break;
      case "In Love":
        card.classList.add("cardInLove");
        break;
      default:
        // Default background color
        card.style.backgroundColor = "#0d0d0d";
    }

    // Make the background color solid
    card.style.opacity = "1";

    const deleteButton = document.createElement("button");
    deleteButton.id = "deleteBtn";
    deleteButton.className = "deleteBtn btn mt-1";
    deleteButton.innerHTML = '<i class="fa-regular fa-trash"></i>';
    deleteButton.addEventListener("click", handleDeleteTask);

    const deleteContainer = document.createElement("div");
    deleteContainer.className = "deleteContainer";
    deleteContainer.style.display = "flex";
    deleteContainer.style.justifyContent = "flex-end";
    deleteContainer.style.width = "100%";
    deleteContainer.appendChild(deleteButton);

    const photo = document.createElement("img");
    photo.src = drink.strDrinkThumb || "./assets/images/placeholder.jpg"; // Fallback to a placeholder image
    photo.className = "card-img-top mt-3";
    photo.style.width = "200px"; // Set size of the image

    const cardTitle = document.createElement("h1");
    cardTitle.className = "card-title";
    cardTitle.textContent = drink.strDrink || "No drink name available";

    const cardIngredients = document.createElement("ul"); // Create <ul> element
    cardIngredients.className = "ingredients";

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
      cardIngredients.appendChild(listItem);
    }

    // Append cardIngredients to cardBody
    cardBody.appendChild(cardIngredients);

    const cardHowTo = document.createElement("p");
    cardHowTo.className = "how-to";
    cardHowTo.textContent = "Instructions: " + drink.strInstructions;

    // Append elements to cardBody
    cardBody.appendChild(deleteContainer);
    cardBody.appendChild(photo);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardIngredients);
    cardBody.appendChild(cardHowTo);

    card.appendChild(cardBody);
    mainCard.appendChild(card);
  });
}

addEventListener("DOMContentLoaded", function () {
  displayfavorites(favorites);
});

function handleDeleteTask() {
 console.log('Delete button clicked');

 let deletedDrink = this.cardtitle.textContent;
  console.log(deletedDrink);

 favorites.forEach((drink) => {
    if (drink.strDrink === deletedDrink) {
      favorites.filter((drink) => drink.strDrink !== deletedDrink);
    }
  })
  this.parentElement.remove;
  localStorage.setItem("savedDrinks", JSON.stringify(favorites));
}

