// Erase stored age from local storage
// const eraseAge =document.getElementById('eraseAge');
// eraseAge.addEventListener('click', function(){
//     localStorage.removeItem('storedAge');
//     location.reload();
//     window.location.href = 'index.html';
// });

/////////QUOTE API//////////////

// Decides what category the quote will be from based on which emotion
//is chosen on index.htmml 

function quoteParameter(){
    //sets category as blank and then alters it based on user input
   
   //sets category as blank
    let quoteCategory = ''
    //collects chosen mood from index.html dropdown

    // let moodInput = document.getElementById('userMood').value;
    //TODO: Change this to the user input either my element Value or via local storage
    let moodInput = localStorage.getItem('userInput');
    // Here I have chosen various categories of quotes from the API and assigned them to our different moods
    //TODO: Look through available moods with group for final decisions on category assignment 
    // Happy = happiness, Sad = happiness, Angry=anger, Exhausted=future, In Love=love
    if (moodInput === 'Happy') {
        quoteCategory = 'happiness'
} else if (moodInput === 'Sad') {
    quoteCategory = 'inspirational'
} else if (moodInput === 'Angry') {
    quoteCategory = 'anger'
} else if (moodInput === 'Exhausted'){
    quoteCategory = 'success'
} else if (moodInput === 'In Love') {
    quoteCategory = 'love'
}

//returns quoteCategory as output so we can use it later in the ajax api call
return quoteCategory
}

// ajax api call to pull a quote from the api based on category
//TODO// 
//STYLE TEAM: create an HTML element to display the quote on the page.
//STYLE TEAM: add "bartender's advice" button to drinks.html
//CODE TEAM: event listener for quote button aaand a function that will display the quote on the page.. some kind of appendChild thing??


function fetchAndDisplayQuote() {
    let quoteCategory = quoteParameter(); 

    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/quotes?category=' + quoteCategory,
        headers: { 'X-Api-Key': 'QHvUKMLC0CIq94vTFp7sNw==BSmeNtqXhYs1KNhl'},
        contentType: 'application/json',
        success: function(result) {
            if (result && result.length > 0) {
                const adviceContent = document.querySelector(".advice-content");
                if (adviceContent) {
                    adviceContent.textContent = result[0].author + ' once said: "' + result[0].quote + '"'; //Updates the advice content on the card with quote
                }
            } else {
                console.log("No quotes found for this category."); //Logs to console if no quotes are found
            }
        },
        error: function ajaxError(jqXHR) {
            console.error('Error :', jqXHR.responseText);
            const adviceContent = document.querySelector(".advice-content");
            if (adviceContent) {
                adviceContent.textContent = "Failed to load quote."; //Updates the advice content on the card with error message if quote fails to load
            }
        }
    });
}

// Call this function when needed, e.g., after a user action or on page load
document.addEventListener('DOMContentLoaded', function() {
    fetchAndDisplayQuote();
});


//bartnder image randomizer
const bartender = document.querySelector('.theBartender');

function bartenderRandomizer() {
    const bartenderImages = [
        './assets/images/Alex.png',
        './assets/images/Clarissa.png',
        './assets/images/Devon.png',
        './assets/images/Eddie.png',
        './assets/images/Roger.png'];

    let randomIndex = Math.floor(Math.random() * bartenderImages.length);
    return bartenderImages[randomIndex];
}

const RandomBartender = bartenderRandomizer();


