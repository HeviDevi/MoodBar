// BACKGROUND FACE ANIMATIONS//

// For Happy Face Background Animation
for (let  i= 0;  i<=50; i++) {
  let happyFace = document.createElement('div');
  happyFace.classList.add('happy');
  let size = Math.random() * 15;
  happyFace.style.fontSize = 3 + size + 'px';
  happyFace.style.right = Math.random() * + innerWidth + 'px';
  happyFace.style.top = Math.random() * + innerHeight + 'px';
  document.querySelector('.background-faces').appendChild(happyFace);
}

function animateHappy() {
  let allHappy = document.querySelectorAll('.happy');
  let num = Math.floor(Math.random()* allHappy.length);
  allHappy[num].classList.toggle('animate');
}

// For Sad Face Background Animation
for(let i=0; i<=50; i++) {
  let sadFace = document.createElement('div');
  sadFace.classList.add('sad');
  let size = Math.random() * 15;
  sadFace.style.fontSize = 3 + size + 'px';
  sadFace.style.right = Math.random() * + innerWidth + 'px';
  sadFace.style.top = Math.random() * + innerHeight + 'px';
  document.querySelector('.background-faces').appendChild(sadFace);
}

function animateSad() {
  let allSad = document.querySelectorAll('.sad');
  let num2 = Math.floor(Math.random()*allSad.length);
  allSad[num2].classList.toggle('animate');
}

setInterval(animateHappy, 50);
setInterval(animateSad, 50);


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
    deleteButton.className = "deleteBtn btn mt-1";
    deleteButton.innerHTML = '<i class="fa-regular fa-trash"></i>';
    deleteButton.addEventListener("click", handleDeleteFavorite);

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
    photo.style.width = "220px"; // Set size of the image

    const cardTitle = document.createElement("h1");
    cardTitle.className = "card-title";
    cardTitle.textContent = drink.strDrink || "No drink name available";

    const ingredientHowToWrapper = document.createElement("div");
    ingredientHowToWrapper.className = "ingredientHowToWrapper";
    ingredientHowToWrapper.style.display = "flex";
    ingredientHowToWrapper.style.justifyContent = "flex-start";
    ingredientHowToWrapper.style.gap = "100px";

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

function handleDeleteFavorite() {
 console.log('Delete button clicked');

 let deletedDrink = this.parentElement.parentElement.querySelector(".card-title").textContent;
  console.log(deletedDrink);

  favorites = favorites.filter((drink) => drink.strDrink !== deletedDrink);
    
  this.parentElement.parentElement.parentElement.remove();
  localStorage.setItem("savedDrinks", JSON.stringify(favorites));
}

