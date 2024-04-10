document.addEventListener('DOMContentLoaded', function () {
    const myModal = new bootstrap.Modal(document.getElementById('dobModal'), {
        backdrop: 'static',
        keyboard: false
    });
    myModal.show();
});

// date required for minimal age (21yrs old)
let today = dayjs();
const minAge = today.subtract(21, 'year').format('YYYY-MM-DD'); // Adjusted format to match input type="date"
let age = document.getElementById('btn'); 

function checkAge() {
    let enteredAge = dayjs(document.getElementById('ageSelector').value, 'YYYY-MM-DD'); // Adjusted format to match input type="date"
    if (enteredAge.isAfter(minAge)) {
        window.alert('Under Age');
    } else if (enteredAge.isValid() === false) {
        window.alert('Please enter a valid date');
    } else {
        // Here, instead of redirecting, close the modal and show the form.
        $('#dobModal').modal('hide'); // Use Bootstrap's method to hide the modal
        $('.modal-content').css('animation-play-state', 'running'); // Trigger the spin transition
        
        setTimeout(function () {
            // Show the mood form after the modal transition finishes
            $('.mood-container').addClass('show-form').css('opacity', '1'); // Ensure it's visible
        }, 800); // This delay should match your spinWipeOut animation duration
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
