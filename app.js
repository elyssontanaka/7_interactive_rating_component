// defining variables
const btns = document.querySelectorAll(".card__element-container");
const myResult = document.querySelector(".card__result");

// when the user presses the submit button
function submitFunction() {
    if (myResult.textContent === "") {
        alert("Please choose a number from 1 to 5 ; )");
    } else {
        document.getElementsByClassName("card__rating")[0].style.display = "none";
        document.getElementsByClassName("card__thank")[0].style.display = "flex";
    }
}

// repeat the click event to every item on the nodeList
btns.forEach(el => {
    el.addEventListener("click", myChoice);
})

// the event parameter refers to the clicked element
function myChoice(event) {
    btns.forEach(el => {
        el.classList.remove("active");
    })
    event.target.classList.add("active");
    myResult.textContent = event.target.textContent;
}