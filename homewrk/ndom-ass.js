// Question 1
// Goal: Select an existing HTML element and change its text content.

// HTML: <p id="text-para">Original Text</p>

let p = document.getElementById('text-para').innerHTML = "The changed text";


// Question 2
// Goal: Change the background color of an element when a user clicks a button.

// HTML: <button id="color-btn">Change Color</button>

let btn = document.getElementById('color-btn');
let bg = document.getElementById('bg');

btn.addEventListener('click', bgchange)
function bgchange(){
    bg.style.backgroundColor = 'green'

}




// Question 3
// Goal: Add a new item to a list programmatically.

// HTML: <ul id="my-list"></ul>

let ul = document.getElementById('my-list')
let li = document.createElement('li')
let liText = document.createTextNode('Apple - is the added item')
ul.appendChild(li)
li.appendChild(liText)



// Question 4
// Goal: Hide and show an element by switching a CSS class.


// HTML: <p id="secret-text" class="visible">This is a secret!</p> <button id="toggle-btn">Toggle</button>

// The question 4 is a bit difficult for that reason, below is a hint on how to go about it.

// Use .classList.toggle('hidden') on the paragraph when the button is clicked to dynamically alter its styling class.

