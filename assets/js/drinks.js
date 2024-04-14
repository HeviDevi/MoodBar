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
  let size = Math.random() * 20;
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

// setInterval(animateHappy, 50);
// setInterval(animateSad, 50);
// setInterval(animateAngry, 50);
// setInterval(animateExhausted, 50);
// setInterval(animateInLove, 50);

const displayCard = function () {
  const mainCard = document.querySelector(".mainCard");
  mainCard.innerHTML = "";

  for (let i = 0; i < 1; i++) {
    const drinkPhoto = ""; //call for drink photo goes here
    const cardAdvice = ""; //call for drink advice goes here
    const cardDrinkName = ""; //call for drink name goes here
    const cardIngredientsText = ""; //call for drink ingredients goes here
    const cardHowToText = ""; //call for drink instructions goes here

    const card = document.createElement("div");
    card.classList.add("card", "m-3");
    card.style.width = "48rem";

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const adviceButton = document.createElement("button");
    adviceButton.classList.add("btn", "btn-primary");
    adviceButton.textContent = "Bartender's Advice";

    const adviceContent = document.createElement("div");
    adviceContent.classList.add("advice-content");
    adviceContent.style.display = "none";
    adviceContent.textContent = cardAdvice;

    const photo = document.createElement("img");
    photo.src = drinkPhoto;
    photo.alt = "Drink Photo";

    const cardTitle = document.createElement("h1");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = cardDrinkName;

    const cardIngredients = document.createElement("p");
    cardIngredients.classList.add("ingredients");
    cardIngredients.textContent = cardIngredientsText;

    const cardHowTo = document.createElement("p");
    cardHowTo.classList.add("how-to");
    cardHowTo.textContent = cardHowToText;

    adviceButton.addEventListener("click", function () {
      card.classList.toggle("open");
      adviceContent.style.display === "none" ? "block" : "none";
    });

    cardBody.appendChild(adviceButton);
    cardBody.appendChild(drinkPhoto);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardIngredients);
    cardBody.appendChild(cardHowTo);
    cardBody.appendChild(adviceContent);
    card.appendChild(cardBody);
    mainCard.appendChild(card);
  }
};

displayCard();

// const optionCard = function () {
//   const drinkOptions = document.querySelector(".drinkOptionCards");
//   drinkOptions.innerHTML = "";

//   for (let i = 0; i < 4; i++) {
//     const drinkPhoto2 = ""; //call for drink photo goes here

//     const card = document.createElement("div");
//     card.classList.add("cardOptions", "m-3");
//     card.style.width = "10rem";

//     const cardBody = document.createElement("div");
//     cardBody.classList.add("card-body2");

//     const photo2 = document.createElement("img");
//     photo2.src = drinkPhoto2;
//     photo2.alt = "Drink Photo";

//     cardBody.appendChild(photo2);
//     card.appendChild(cardBody);
//     drinkOptions.appendChild(card);
//   }
// };

// optionCard();


// let url = 'https://api.api-ninjas.com/v1/quotes?category='

// fetch(url + category)
// .then(response => response.json())
// .then(data => {
//     let quote = data[0].quote;
//     console.log(quote)
//     console.log(data[0])
//     console.log()
// })

//card generator
document.addEventListener('DOMContentLoaded', function() {
  // Retrieve stored inputs
  let userMood = localStorage.getItem('userMood');
  let userSpirit = localStorage.getItem('userSpirit');

  if (userMood && userSpirit) {
      // Fetch drink data and display card
      chooseRandomCocktail(userSpirit, userMood);
  } else {
      console.error('No mood or spirit data found.');
  }
});

function chooseRandomCocktail(spirit, mood) {
  fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${spirit},${mood}`)
  .then(response => response.json())
  .then(data => {
      if (data.drinks && data.drinks.length > 0) {
          displayCard(data.drinks[0]); // Display the first drink
      } else {
          console.error("No drinks found for the selected mood and spirit.");
          alert("No drinks available for the selected options. Please try again.");
      }
  })
  .catch(error => {
      console.error('Failed to fetch drinks:', error);
      alert("Failed to load drinks. Please check your internet connection and try again.");
  });
}

function displayCard(drink) {
  const mainCard = document.querySelector(".mainCard");
  mainCard.innerHTML = '';

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
  mainCard.appendChild(card);
}