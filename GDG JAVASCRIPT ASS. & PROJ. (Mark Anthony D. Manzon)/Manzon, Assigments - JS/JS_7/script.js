
//Gets the ID attribute of the button
const button = document.getElementById("colorButton");

//Adds a functionality, if button is clicked then the process inside the event listener will trigger
//Adds a function so the program acts specifically on what to only do when the user clicks the button
button.addEventListener("click", function(){

    //This generates the random color
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    //Changes the background color of the body element that was executed in this block of code
    document.body.style.backgroundColor = randomColor;

});