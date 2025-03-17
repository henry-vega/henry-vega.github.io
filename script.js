let myBox = document.querySelector(".myBox");


fetch("https://dog.ceo/api/breed/eskimo/images/random")
    .then(response => {return response.json()})
    .then(data => {
    console.log(data.message); // SHOW THE ANSWER IN CONSOLE.LOG
        // HERE YOU PUT YOUR FUNCTION...
        what2do(data.message);

})

function what2do(myImg){
    myBox.style.backgroundImage = "URL(" + myImg + ")";
}
