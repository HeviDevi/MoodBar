const myModal = new bootstrap.Modal("#exampleModal");

window.addEventListener('DOMContentLoaded', function() {
    myModal.show();
});


        //  date required for minimal age (21yrs old)
        let today = dayjs();
        const minAge = today.subtract(21, 'year').format('MM-DD-YYYY');
        let age = document.getElementById('btn'); 


        // function that determines if over or under 21 years of age
        function checkAge() {
            let enteredAge = dayjs(document.getElementById('ageSelector').value, 'MM-DD-YYYY');
            if (enteredAge.isAfter(minAge)) {
                window.alert('Under Age');
            } else if (enteredAge.isValid() === false) {
                window.alert('Please enter a valid date');
            } else {
                window.location.href = 'MoodSelection.html';
            }
        }

        age.addEventListener("click", checkAge);

        // For Happy Face
for (let  i= 0;  i<=50; +i++) {
    let happyFace = document.createElement('div');
    happyFace.classList.add('happy');
    let size = Math.random() * 15;
    happyFace.style.fontSize = 3 + size + 'px';
    happyFace.style.right = Math.random() * + innerWidth + 'px';
    happyFace.style.top = Math.random() * + innerHeight + 'px';
    document.querySelector('.background').appendChild(happyFace);
}

function animateHappy() {
    let allHappy = document.querySelectorAll('.happy');
    let num = Math.floor(Math.random()* allHappy.length);
    allHappy[num].classList.toggle('animate');
}

// For Sad Face
for(let i=0; i<=50; i++) {
    let sadFace = document.createElement('div');
    sadFace.classList.add('sad');
    let size = Math.random() * 15;
    sadFace.style.fontSize = 3 + size + 'px';
    sadFace.style.right = Math.random() * + innerWidth + 'px';
    sadFace.style.top = Math.random() * + innerHeight + 'px';
    document.querySelector('.background').appendChild(sadFace);
}


function animateSad() {
    let allSad = document.querySelectorAll('.sad');
    let num2 = Math.floor(Math.random()*allSad.length);
    allSad[num2].classList.toggle('animate');
}

setInterval(animateHappy, 50);
setInterval(animateSad, 50);
