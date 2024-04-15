// For Happy Face
for (let i = 0; i <= 75; i++) {
  let happyFace = document.createElement("div");
  happyFace.classList.add("happy");
  let size = Math.random() * 15;
  happyFace.style.fontSize = 3 + size + "px";
  happyFace.style.right = Math.random() * +innerWidth + "px";
  happyFace.style.top = Math.random() * +innerHeight + "px";
  document.querySelector(".background-faces").appendChild(happyFace);
}

function animateHappy() {
  let allHappy = document.querySelectorAll(".happy");
  let num = Math.floor(Math.random() * allHappy.length);
  allHappy[num].classList.toggle("animate");
}

// For Sad Face
for (let i = 0; i <= 75; i++) {
  let sadFace = document.createElement("div");
  sadFace.classList.add("sad");
  let size = Math.random() * 15;
  sadFace.style.fontSize = 3 + size + "px";
  sadFace.style.right = Math.random() * +innerWidth + "px";
  sadFace.style.top = Math.random() * +innerHeight + "px";
  document.querySelector(".background-faces").appendChild(sadFace);
}

function animateSad() {
  let allSad = document.querySelectorAll(".sad");
  let num2 = Math.floor(Math.random() * allSad.length);
  allSad[num2].classList.toggle("animate");
}

// For Angry Face
for (let i = 0; i <= 75; i++) {
  let angryFace = document.createElement("div");
  angryFace.classList.add("angry");
  let size = Math.random() * 15;
  angryFace.style.fontSize = 3 + size + "px";
  angryFace.style.right = Math.random() * +innerWidth + "px";
  angryFace.style.top = Math.random() * +innerHeight + "px";
  document.querySelector(".background-faces").appendChild(angryFace);
}

function animateAngry() {
  let allAngry = document.querySelectorAll(".angry");
  let num3 = Math.floor(Math.random() * allAngry.length);
  allAngry[num3].classList.toggle("animate");
}

// For Exhausted Face
for (let i = 0; i <= 75; i++) {
  let exhaustedFace = document.createElement("div");
  exhaustedFace.classList.add("exhausted");
  let size = Math.random() * 15;
  exhaustedFace.style.fontSize = 3 + size + "px";
  exhaustedFace.style.right = Math.random() * +innerWidth + "px";
  exhaustedFace.style.top = Math.random() * +innerHeight + "px";
  document.querySelector(".background-faces").appendChild(exhaustedFace);
}

function animateExhausted() {
  let allExhausted = document.querySelectorAll(".exhausted");
  let num = Math.floor(Math.random() * allExhausted.length);
  allExhausted[num].classList.toggle("animate");
}

// For In Love Face
for (let i = 0; i <= 75; i++) {
  let inLoveFace = document.createElement("div");
  inLoveFace.classList.add("inLove");
  let size = Math.random() * 15;
  inLoveFace.style.fontSize = 3 + size + "px";
  inLoveFace.style.right = Math.random() * +innerWidth + "px";
  inLoveFace.style.top = Math.random() * +innerHeight + "px";
  document.querySelector(".background-faces").appendChild(inLoveFace);
}

function animateInLove() {
  let allInLove = document.querySelectorAll(".inLove");
  let num = Math.floor(Math.random() * allInLove.length);
  allInLove[num].classList.toggle("animate");
}

// Variable for current interval
let currentInterval;

// Clear the current interval to prevent multiple intervals
function clearCurrentInterval() {
  if (currentInterval) {
    clearInterval(currentInterval);
  }
}

// const moodSelection = document.querySelector('.background-faces');---- intervals within if/elseIf will cause animation to activate
const cardMood = document.querySelector(".cardMood");
const optionMood = document.querySelector(".optionEmotion");

function switchMood(mood) {
  localStorage.setItem("userMood", mood); // will select the mood from local storage
  // when functions pulls mood from local storage, it'll change the way its stored, i.e. "inLove = In Love"
  if (mood === "Happy") {
    setInterval(animateHappy, 50);
    // moodSelection.className = 'cardHappy';  ---intervals will activate background.
    optionMood.className = "optionHappy";
  } else if (mood === "Sad") {
    // moodSelection.className = 'cardSad';
    setInterval(animateSad, 50);
    optionMood.className = "optionSad";
  } else if (mood === "Angry") {
    // moodSelection.className = 'cardAngry';
    setInterval(animateAngry, 50);
    optionMood.className = "optionAngry";
  } else if (mood === "Exhausted") {
    // moodSelection.className = 'cardExhausted';
    setInterval(animateExhausted, 50);
    optionMood.className = "optionExhausted";
  } else if (mood === "In Love") {
    // moodSelection.className = 'cardInLove';
    setInterval(animateInLove, 50);
    optionMood.className = "optionInLove";
  }
}

// Call switchMood with the mood from local storage
switchMood(localStorage.getItem("userMood"));

document.addEventListener("DOMContentLoaded", function () {
  // Retrieve stored inputs
  let userMood = localStorage.getItem("userMood");
  let userSpirit = localStorage.getItem("userSpirit");

  if (userMood && userSpirit) {
    // Fetch drink data and display card
    chooseRandomCocktail(userSpirit, userMood);
  } else {
    console.error("No mood or spirit data found.");
  }
});

function chooseRandomCocktail(spirit, mood) {
  fetch(
    `https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${spirit},${mood}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.drinks && data.drinks.length > 0) {
        displayCard(data.drinks[0]); // Display the first drink
        displayDrink(data.drinks[0]); // Display the first drink details
      } else {
        console.error("No drinks found for the selected mood and spirit.");
        alert(
          "No drinks available for the selected options. Please try again."
        );
      }
    })
    .catch((error) => {
      console.error("Failed to fetch drinks:", error);
      alert(
        "Failed to load drinks. Please check your internet connection and try again."
      );
    });
}

// Main Drink Card
const displayDrink = function (drink) {
  if (!drink) {
    console.error("No drink data provided.");
    return;
  }

  const mainCard = document.querySelector(".mainCard");
  if (!mainCard) {
    console.error("Main card element not found.");
    return;
  }

  mainCard.innerHTML = ""; // Clears previous content

  const card = document.createElement("div");
  card.className = "card m-3";
  card.style.width = "48rem";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  cardBody.style.display = "flex";
  cardBody.style.flexDirection = "column";

  const bartenderImage = document.createElement("img");
  bartenderImage.src = bartenderRandomizer();
  bartenderImage.alt = "Bartender";
  bartenderImage.className = "bartender-image";
  bartenderImage.style.width = "300px"; // Set width
  bartenderImage.style.height = "300px"; // Set height
  bartenderImage.style.display = "none"; // Initially hide the bartender image

  const adviceContentWrapper = document.createElement("div");
  adviceContentWrapper.className = "advice-content-wrapper";
  adviceContentWrapper.style.display = "none"; // Initially hide the advice content wrapper
  adviceContentWrapper.style.display = "flex"; // Set display to flex
  adviceContentWrapper.style.alignItems = "center"; // Align items vertically
  adviceContentWrapper.style.marginLeft = "15px"; // Add some space between the image and advice
  adviceContentWrapper.style.backgroundColor = "#0d0d0d"; // Set the background color
  adviceContentWrapper.style.borderRadius = "10px"; // Add border radius
  adviceContentWrapper.style.color = "#ffffff"; // Set font color to white

  const adviceContent = document.createElement("div");
  adviceContent.className = "advice-content";
  adviceContent.style.display = "none"; // Initially hide the advice content

  const adviceButton = document.createElement("button");
  adviceButton.className = "btn btn-dark mt-1";
  adviceButton.textContent = "Bartender's Advice";

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

  const cardBodyWrapper = document.createElement("div");
  cardBodyWrapper.className = "card-body-wrapper";
  cardBodyWrapper.style.display = "flex";
  cardBodyWrapper.style.flexDirection = "row";
  
  const photoContainer = document.createElement("div");
  photoContainer.style.flex = ".5";

  const photo = document.createElement("img");
  photo.src = drink.strDrinkThumb || "./assets/images/placeholder.jpg"; // Fallback to a placeholder image
  photo.className = "card-img-top mt-3";
  photo.style.width = "200px"; // Set size of the image
  photo.style.height = "auto";// Set height to auto
  photoContainer.appendChild(photo);

  const detailsContainer = document.createElement("div");
  detailsContainer.style.flex = "2";
  detailsContainer.style.display = "flex";
  detailsContainer.style.flexDirection = "column";
  detailsContainer.style.padding = "0 15px";

  const cardTitle = document.createElement("h1");
  cardTitle.className = "card-title";
  cardTitle.textContent = drink.strDrink || "No drink name available";

  const cardIngredients = document.createElement("ul"); // Create <ul> element
  cardIngredients.className = "ingredients";

  // Iterate over each ingredient and create a <li> element for it
  [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
  ]
    .filter(Boolean)
    .forEach(function (ingredient) {
      const listItem = document.createElement("li");
      listItem.textContent = ingredient;
      cardIngredients.appendChild(listItem);
    });

  // If no ingredients are present, display a placeholder message
  if (cardIngredients.children.length === 0) {
    const listItem = document.createElement("li");
    listItem.textContent = "No ingredients available";
    cardIngredients.appendChild(listItem);
  }


  const cardHowTo = document.createElement("p");
  cardHowTo.className = "how-to";
  cardHowTo.textContent = "Instructions: " + drink.strInstructions;


  adviceButton.addEventListener("click", function () {
    card.classList.toggle("open");

    // Toggle the visibility of the bartender image and the advice content
    bartenderImage.style.display =
      bartenderImage.style.display === "none" ? "block" : "none";
    adviceContent.style.display =
      adviceContent.style.display === "none" ? "block" : "none";
  });

  // Append elements to cardBody
  adviceContentWrapper.appendChild(bartenderImage);
  adviceContentWrapper.appendChild(adviceContent);
  cardBody.appendChild(adviceContentWrapper);
  cardBody.appendChild(adviceButton);
  cardBodyWrapper.appendChild(photoContainer);
  detailsContainer.appendChild(cardTitle);
  detailsContainer.appendChild(cardIngredients);
  detailsContainer.appendChild(cardHowTo);
  cardBodyWrapper.appendChild(detailsContainer);
  cardBody.appendChild(cardBodyWrapper);
  card.appendChild(cardBody);
  mainCard.appendChild(card);

  // Fetch a random quote after displaying the drink
  fetchAndDisplayQuote();
};

displayDrink();

function displayCard(drink) {
  const optionCards = document.querySelector(".drinkOptionCards");
  optionCards.innerHTML = "";

  const card = document.createElement("div");
  card.classList.add("card", "m-3");
  card.style.width = "100%";

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const photo = document.createElement("img");
  photo.src = drink.strDrinkThumb;
  photo.alt = "Drink Photo";
  photo.classList.add("card-img-top");

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = drink.strDrink;

  cardBody.appendChild(photo);
  cardBody.appendChild(cardTitle);
  card.appendChild(cardBody);
  optionCards.appendChild(card);
}
