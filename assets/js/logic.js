
























/////////QUOTE API//////////////

// Decides what category the quote will be from based on which emotion
//is chosen on index.htmml 

function quoteParameter(){
    //sets category as blank and then alters it based on user input
   
   //sets category as blank
    let category = ''
    //collcets chosen mood from index.html dropdown
    let moodInput = document.getElementById('userMood').value;
    // Here I have chosen various categories of quotes from the API and assigned them to our different moods
    //TODO: Look through available moods with group for final decisions on category assignment 
    // Happy = happiness, Sad = happiness, Angry=anger, Exhausted=future, In Love=love
    if (moodInput === 'Happy') {
        category = 'happiness'
} else if (moodInput === 'Sad') {
    category = 'happiness'
} else if (moodInput === 'Angry') {
    category = 'anger'
} else if (moodInput === 'Exhausted'){
    category = 'future'
} else if (moodInput === 'In Love') {
    category = 'love'
}

//returns category as output so we can use it later in the ajax api call
return category
}

// Sets category as the output of the quoteParameter function... or at least it should??
let category = quoteParameter();

// ajax api call to pull a quote from the api based on category
//TODO// 
//STYLE TEAM: create an HTML element to display the quote on the page.
//STYLE TEAM: add "bartender's advice" button to drinks.html
//CODE TEAM: event listener for quote button aaand a function that will display the quote on the page.. some kind of appendChild thing??
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    headers: { 'X-Api-Key': 'lbuDF/d/4FN0Qtt3UdYKZw==0Y6n8GL3b39NEA5m'},
    contentType: 'application/json',
    success: function(result) {
        ///Display function goes here
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});