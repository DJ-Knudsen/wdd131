// How to manipulate the DOM (Doument Object Model) with JavaScript

// Grab our h1 from the page
let heading = document.querySelector("h1");

console.log(heading);

// Change the text of the element
heading.textContent = "Changed the heading to something else!";

// Change the text color
heading.style.color = "#0000ff"; // not case sensitive

// Pick your own style and change it
heading.style.fontStyle = "italic";
heading.style.border = "1px solid black";

// Retrieve an ID element from the page
document.getElementById("topics").style.color = "red";
// document.querySelector("#topics").style.color = "red"; <-- Basically same thing as above

// Select the img tag
let image = document.querySelector("img");

console.log(image.getAttribute("src"));

image.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original");


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
})
                