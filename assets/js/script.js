// For Modal
document.addEventListener('DOMContentLoaded', function () {
    const myModal = new bootstrap.Modal(document.getElementById('dobModal'), {
        backdrop: 'static',
        keyboard: false
    });
    myModal.show();
});


        //  date required for minimal age (21yrs old)
        let today = dayjs();
        const minAge = today.subtract(21, 'year').format('MM-DD-YYYY');
        let submitEl = document.getElementById('btn');
        let storedUserAge = JSON.parse(localStorage.getItem('storedAge')) || []; 


        /// Function that closes the Modal, we can call this function later so we have DRY code
        function acceptAge(){
            $('#dobModal').modal('hide'); // Bootstrap's method to hide the modal
            setTimeout(function () {
                // Show the mood container with a transition
                $('.mood-container').addClass('show-form').css('opacity', '1');
            }, 800); // Adjust this timeout to match transition
        }

        // function that determines if over or under 21 years of age
        function checkAge() {
            let enteredAge = dayjs(document.getElementById('ageSelector').value, 'MM-DD-YYYY');
            if (enteredAge.isAfter(minAge)) {
                window.alert('Under Age');
            } else if (enteredAge.isValid() === false) {
                window.alert('Please enter a valid date');
            } else {
                storedUserAge.push(enteredAge.format('MM-DD-YYYY'));
                localStorage.setItem('storedAge', JSON.stringify(storedUserAge))
                //calls function to close modal if minAge is met
           acceptAge();
    }
    }
        

        submitEl.addEventListener("click", checkAge);
        
        //Only acceptable ages are stored to local storage, therfore if the storedAge array is not empty, the modal dissapears
        function checkStoredAge(){
            //checks to ensure that the array is longer than 0, if it is, we call the modal closing function
            if (storedUserAge.length > 0){
        acceptAge();
    }
}
// immideietnly calls the function to check local storage when the document is ready
$(document).ready(function () { 
    checkStoredAge()
});




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
 