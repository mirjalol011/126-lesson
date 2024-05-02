let elHeading = document.createElement("h1");
let body = document.body;
let head = document.querySelector('.head')

elHeading.innerHTML = "Hello";
elHeading.style.color = "red";
head.style.color = "yellow"

body.appendChild(elHeading)