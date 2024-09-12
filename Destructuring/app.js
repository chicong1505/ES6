/*
    

*/

const h1 = document.querySelector("#h1");
const h2 = document.getElementById("h2");

const arr = [10, 20, 30];

const [first, , third, four = 50] = arr;

h1.innerHTML = first;
h2.innerHTML = four;
