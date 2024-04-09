
//  date required for minimal age (21yrs old)

const today = dayjs();
const minAge = today.subtract(21, year).format (MM-DD-YYYY);
let enteredAge = document.getElementById("age").value;
let age = document.getElementById("age");  //replace with the id in the index.html

// function that determintes if over or under 21yes of age
function checkAge() {
    if (enteredAge.isAfter(minAge)) {
        window.alert("Under Age");
    } else {
        window.location.href = 'MoodSelection.html';
    }
}

age.addEventListener("click", checkAge());


