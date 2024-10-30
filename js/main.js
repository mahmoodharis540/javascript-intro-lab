console.info("hello from the file ");
document.getElementById("myHeading").innerHTML= "Haris M";


document.querySelector('nav ul li').setAttribute('class', 'currentPage');
//this searches the HTML for nav ul li item
//so does it only do it for the first item it finds with nav ul li 

// document
//     .querySelector('nav ul li a')
//     .setAttribute('href', 'http://www.google.co.uk');



let colourButtons = document.querySelectorAll(".colPicker");
console.dir(colourButtons); // Logs a NodeList of all elements with the class 'colPicker'

for (let i = 0; i < colourButtons.length; i++) {
    colourButtons[i].style.backgroundColor = "green";
}

document.getElementById('myTestBtn').addEventListener('click', function() {
    console.info('hi');
  });
//addEventListener has two parameters 


//color picker
let redBtn = document.querySelector(".red")
let greenButton = document.querySelector(".green")
let setDefault = document.querySelector(".reset")
let blueButton = document.querySelector(".blue")
//defined all the varibles 





// redBtn.addEventListener("click", function(){
//     document.body.setAttribute("class", "redBack");
// });
// //doing something withe the classes functional code 

// greenButton.addEventListener("click", function(){
//     document.body.setAttribute("class", "greenBack")
// });
// //event listener can only be "click", "hover"


// blueButton.addEventListener("click", function(){
//     document.body.setAttribute("class", "blueBack")
// });

// setDefault.addEventListener("click", function(){
//     document.body.setAttribute("class", "reset")
// });
// //.removeAttribute will remove the the background color



// blue bricks are properties 
//green bricks are verbs 



for(let i = 0; i<colourButtons.length; i++){
    colourButtons[i].addEventListener("click", changeColor);
}

function changeColor(ev){
    console.info(ev.target.classList[0]);
    let colorClass = ev.target.classList[0]+"Back";
    document.body.setAttribute("class", colorClass);
    if ()
}


//an event in JS an object.