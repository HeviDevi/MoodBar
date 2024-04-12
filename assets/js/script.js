// For Modal
document.addEventListener('DOMContentLoaded', function () {
    const myModal = new bootstrap.Modal(document.getElementById('dobModal'), {
        backdrop: 'static',
        keyboard: false
    });
    myModal.show();

    //  Date required for minimal age (21 years old)
    let today = dayjs();
    const minAge = today.subtract(21, 'year').format('MM-DD-YYYY');
    let submitEl = document.getElementById('btn');
    let storedUserAge = JSON.parse(localStorage.getItem('storedAge')) || []; 

    /// Function that closes the Modal, we can call this function later so we have DRY code
    function acceptAge(){
        const modalContent = document.querySelector('.modal-content');
        modalContent.style.animation = 'spinWipeOut 0.6s forwards';
        setTimeout(function () {
            $('#dobModal').modal('hide'); // Bootstrap's method to hide the modal
            setTimeout(function () {
                // Show the mood container with a transition
                $('.mood-container').addClass('show-form').css('opacity', '1');
            }, 500); // Adjust transition
        }, 400); // Adjust animation duration
    }

    // function that determines if over or under 21 years of age
    function checkAge() {
        let enteredAge = dayjs(document.getElementById('ageSelector').value, 'MM-DD-YYYY');
        if (enteredAge.isAfter(minAge)) {
            document.querySelector('.invalid').innerHTML += `<span style="color: red;"> Under Age </span>`;
        } else if (enteredAge.isValid() === false) {
            document.querySelector('.invalid').innerHTML += `<span style="color: red;"> Invalid Date </span>`;
        } else {
            storedUserAge.push(enteredAge.format('MM-DD-YYYY'));
            localStorage.setItem('storedAge', JSON.stringify(storedUserAge));
            acceptAge(); // Calls function to close modal if minAge is met
        }
    }

    submitEl.addEventListener("click", checkAge);

    // Only acceptable ages are stored to local storage, therefore if the storedAge array is not empty, the modal disappears
    function checkStoredAge(){
        if (storedUserAge.length > 0){
            acceptAge(); // Automatically close the modal if age is already stored
        }
    }

    // Immediately calls the function to check local storage when the document is ready
    $(document).ready(checkStoredAge);
// form submit function
    $(document).ready(function() {
        $('#submit').click(function(event) {
            event.preventDefault();
            let userMood = $('#userMood').val();
            let userSpirit = $('#userSpirit').val();
    //checks for selections, NEED TO CHANGE FROM ALERT
            if (userMood === "Select your mood" || userSpirit === "Select your Spirit") {
                alert("Please select valid options for both mood and spirit.");
                return;
            }
//hides containers and starts animation
            $('.mood-container, .container').fadeOut(600, function() {
                $(this).hide();
                $('.loading').show();
                $('.shaker').addClass('animate__animated animate__shakeY').css('animation-duration', '4s');
    //stores selection, and redirects after animation
                setTimeout(function () {
                    localStorage.setItem('userMood', userMood);
                    localStorage.setItem('userSpirit', userSpirit);
                    window.location.href = 'Drinks.html';
                }, 4000);  // Ensure this matches the duration of animations
            });
        });
    });
    });




// For Happy Face Background Animation
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

// For Sad Face Background Animation
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
 