
//  date required for minimal age (21yrs old)

let today = dayjs();
const minAge = today.subtract(21, 'year').format('MM-DD-YYYY');
let age = document.getElementById('#btn'); 

// function that determintes if over or under 21yes of age
function checkAge() {
    let enteredAge = dayjs(document.getElementById('#btn').value, 'MM-DD-YYYY');
    if (enteredAge.isAfter(minAge)) {
        window.alert("Under Age");
    } else {
        window.location.href = 'MoodSelection.html';
    }
}

age.addEventListener("click", checkAge);


