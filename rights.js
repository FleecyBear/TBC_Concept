// Select the necessary elements
const dotsButton = document.querySelector('.dots-button');
const xButton = document.querySelector('.x-button');
const rightShown = document.querySelector('.right-shown');
const rightHidden = document.querySelector('.right-hidden');

// Function to show .right-hidden and hide .right-shown
function showHidden() {
    rightShown.classList.remove('show');
    rightHidden.classList.add('show');
}

// Function to hide .right-hidden and show .right-shown
function hideHidden() {
    rightHidden.classList.remove('show');
    rightShown.classList.add('show');
}

// Add event listeners
dotsButton.addEventListener('click', showHidden);
xButton.addEventListener('click', hideHidden);

// Initialize by showing .right-shown and hiding .right-hidden
rightShown.classList.add('show');
