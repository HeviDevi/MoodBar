// For Happy Face
for (let  i= 0;  i<=75; +i++) {
    let happyFace = document.createElement('div');
    happyFace.classList.add('happy');
    let size = Math.random() * 15;
    happyFace.style.fontSize = 3 + size + 'px';
    happyFace.style.right = Math.random() * + innerWidth + 'px';
    happyFace.style.top = Math.random() * + innerHeight + 'px';
    document.querySelector('.background-faces').appendChild(happyFace);
}

function animateHappy() {
    let allHappy = document.querySelectorAll('.happy')
    let num = Math.floor(Math.random()* allHappy.length);
    allHappy[num].classList.toggle('animate');
}

// For Sad Face
for(let i=0; i<=75; i++) {
    let sadFace = document.createElement('div');
    sadFace.classList.add('sad');
    let size = Math.random() * 15;
    sadFace.style.fontSize = 3 + size + 'px';
    sadFace.style.right = Math.random() * + innerWidth + 'px';
    sadFace.style.top = Math.random() * + innerHeight + 'px';
    document.querySelector('.background-faces').appendChild(sadFace);
}
 

function animateSad() {
    let allSad = document.querySelectorAll('.sad')
    let num2 = Math.floor(Math.random()*allSad.length)
    allSad[num2].classList.toggle('animate');
}

// For Angry Face
for (let i=0; i <=75; i++) {
    let angryFace = document.createElement('div');
    angryFace.classList.add('angry');
    let size = Math.random() * 20;
    angryFace.style.fontSize = 3 + size + 'px';
    angryFace.style.right = Math.random() * + innerWidth + 'px';
    angryFace.style.top = Math.random() * + innerHeight + 'px';
    document.querySelector('.background-faces').appendChild(angryFace);
}

function animateAngry() {
    let allAngry = document.querySelectorAll('.angry');
    let num3 = Math.floor(Math.random()*allAngry.length);
    allAngry[num3].classList.toggle('animate');
}

// For Exhausted Face
for (let  i= 0;  i<=75; +i++) {
    let exhaustedFace = document.createElement('div');
    exhaustedFace.classList.add('exhausted');
    let size = Math.random() * 15;
    exhaustedFace.style.fontSize = 3 + size + 'px';
    exhaustedFace.style.right = Math.random() * + innerWidth + 'px';
    exhaustedFace.style.top = Math.random() * + innerHeight + 'px';
    document.querySelector('.background-faces').appendChild(exhaustedFace);
}

function animateExhausted() {
    let allExhausted = document.querySelectorAll('.exhausted')
    let num = Math.floor(Math.random()* allExhausted.length);
    allExhausted[num].classList.toggle('animate');
}

// For In Love Face
for (let  i= 0;  i<=75; +i++) {
    let inLoveFace = document.createElement('div');
    inLoveFace.classList.add('inLove');
    let size = Math.random() * 15;
    inLoveFace.style.fontSize = 3 + size + 'px';
    inLoveFace.style.right = Math.random() * + innerWidth + 'px';
    inLoveFace.style.top = Math.random() * + innerHeight + 'px';
    document.querySelector('.background-faces').appendChild(inLoveFace);
}

function animateInLove() {
    let allInLove = document.querySelectorAll('.inLove')
    let num = Math.floor(Math.random()* allInLove.length);
    allInLove[num].classList.toggle('animate');
}


//setInterval(animateHappy, 50);
//setInterval(animateSad, 50);
//setInterval(animateAngry, 50);
//setInterval(animateExhausted, 50);
//setInterval(animateInLove, 50);


// Decides what category the quote will be from based on which emotion
//is chosen on index.htmml 
//(might need to move this whole snippet to logic.js???)

function quoteParameter(){
    //sets category as blank and then alters it based on user input
    //(element ID needs to be changed to match the input dropdown on index.html)
    let category = ''
    let userInput = document.getElementById('userInput').value;
    // Happy = happiness, Sad = happiness, Angry=anger, Exhausted=future, In Love=love
    if (userInput === 'Happy') {
        category === 'happiness'
} else if (userInput == 'Sad') {
    category === 'happiness'
} else if (userInput == 'Angry') {
    category === 'anger'
} else if (userInput == 'Exhausted'){
    category === 'future'
} else if (userInput == 'In Love') {
    category === 'love'
}

//returns category as output so we can use it later in the ajax api call
return category
}

let category = quoteParameter();

$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    headers: { 'X-Api-Key': 'lbuDF/d/4FN0Qtt3UdYKZw==0Y6n8GL3b39NEA5m'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
        console.log(result[0].quote)
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

// let url = 'https://api.api-ninjas.com/v1/quotes?category='

// fetch(url + category)
// .then(response => response.json())
// .then(data => {
//     let quote = data[0].quote;
//     console.log(quote)
//     console.log(data[0])
//     console.log()
// })