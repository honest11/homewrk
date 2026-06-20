'use strict';

document.querySelector("#content1").innerHTML = "Welcome Home";
// let mycontent = document.querySelector("#content1").innerHTML = "Welcome Home";
// mycontent.textContent = "food"


let heading = document.createElement("h1");
const headingText = document.createTextNode("big head!");
heading.appendChild(headingText);

document.body.appendChild(heading);

function messageOut(){
    // alert("Javascript Class")
}


let para = document.createElement("p")
const paraText = document.createTextNode("This is a new Paragraph")
document.body.appendChild(para)
para.appendChild(paraText)


let btn2 = document.querySelector('#btn2');

let fullbody = document.querySelector('body');
let btn = document.getElementById("btn");

btn2.addEventListener("click",()=>{
    fullbody.style.backgroundColor = "blue"
})

btn.addEventListener("click", ()=>{
    let para = document.createElement("p")
    const paraText = document.createTextNode("This is a new Paragraph")
    document.body.appendChild(para)
    para.appendChild(paraText)
    
})
