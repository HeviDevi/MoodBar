// For Happy Face
for (let  i= 0;  i<=75; +i++) {
    let happyFace = document.createElement('div');
    happyFace.classList.add('happy');
    let size = Math.random() * 15;
    happyFace.style.fontSize = 3 + size + 'px';
    happyFace.style.right = Math.random() * + innerWidth + 'px';
    happyFace.style.top = Math.random() * + innerHeight + 'px';
    document.querySelector('.background').appendChild(happyFace);
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
    document.querySelector('.background').appendChild(sadFace);
}


function animateSad() {
    let allSad = document.querySelectorAll('.sad')
    let num2 = Math.floor(Math.random()*allSad.length)
    allSad[num2].classList.toggle('animate');
}

// For Angry Face
for (let i=0; i <=50; i++) {
    let angryFace = document.createElement('div');
    angryFace.classList.add('angry');
    let size = Math.random() * 20;
    angryFace.style.fontSize = 3 + size + 'px';
    angryFace.style.right = Math.random() * + innerWidth + 'px';
    angryFace.style.top = Math.random() * + innerHeight + 'px';
    document.querySelector('.background').appendChild(angryFace);
}

function animateAngry() {
    let allAngry = document.querySelectorAll('.angry');
    let num3 = Math.floor(Math.random()*allAngry.length);
    allAngry[num3].classList.toggle('animate');
}


// setInterval(animateHappy, 50);
// setInterval(animateSad, 50);
// setInterval(animateAngry, 50);