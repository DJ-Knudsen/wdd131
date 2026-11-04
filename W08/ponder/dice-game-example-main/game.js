// 1. Add event listener to the button

document.querySelector('#rollButton').addEventListener('click', event => {
    // Animate the die
    const images = document.querySelectorAll('#gameboard img');
    images.forEach(image => {
    // Switch the src to the die_rolling.gif animation
        if(isDieUnlocked(image)) {
            image.src = "assets/die_rolling.gif";
        }
    })
    // Change each value each die lands on randomly, changing the src image
    setTimeout(() => {
      images.forEach(image => {
        if(isDieUnlocked(image)) {
           const randomNumber = Math.floor(Math.random() * 6) + 1;
        image.src = `assets/white_dice_${randomNumber}.gif`;
        // set the images to a random die
        // Math.random() returns a random number 0 - 1
        }
      });
    }, 500); 
    
});

function isDieUnlocked(dieImage) {
    // is the corresponding checkbox checked? Return false
    const checkboxes = document.querySelectorAll('#gameboard input');
    // return a new array of just the checked ones
    const unchecked = Array.from(checkboxes).filter(checkbox => !checkbox.checked);
    return unchecked.find(unchecked => unchecked.className === dieImage.className);
}