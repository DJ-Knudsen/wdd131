let age = 25; // this is how to declare a variable in javascript. Semicolon optional apparently.

console.log(age); // like print in python, just written out differently due to syntax.

age = 26;

console.log(age);

const name = "Brother Warner"; // this is a constant variable, meaning it will always be the same. Can't be changed.

// name = "Dr Java"; // this shouldn't work, since name is supposed to be constant.

const username = "billybob"; // read only

// Scope = where you can reference a variable by name.

if(age == 22) {
    // a new scope
    console.log(username);
    let favoriteColor = "blue";
    let name = "Dr Java";
    console.log(name);
}

console.log(name)

let favoriteColor = "red";

console.log(favoriteColor); // this will not work, since favoriteColor is referenced inside of {}.

document.querySelector("h1").style.color = "blue";