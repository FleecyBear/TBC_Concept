
const toggleButton = document.querySelector('.hidden-button-2');
const unexpandElement = document.querySelector('.unexpand');
const unhideButton = document.querySelector('.unhide-button');

window.addEventListener('load', () => {
    unexpandElement.style.display = 'block'; 
    unhideButton.style.display = 'none';    
});


function toggleUnexpand() {
    if (unexpandElement.style.display === 'none' || !unexpandElement.style.display) {
        unexpandElement.style.display = 'block';
        unhideButton.style.display = 'none'; 
    } else {
        unexpandElement.style.display = 'none';
        unhideButton.style.display = 'block'; 
    }
}


function showUnexpand() {
    unexpandElement.style.display = 'block';
    unhideButton.style.display = 'none'; 
}

toggleButton.addEventListener('click', toggleUnexpand);

unhideButton.addEventListener('click', showUnexpand);


function adjustForScreenSize() {
    const screenWidth = window.innerWidth;

   
    if (screenWidth > 1000) {
        unexpandElement.style.display = 'block';
        unhideButton.style.display = 'none'; 
    
    }
}


window.addEventListener('resize', adjustForScreenSize);


adjustForScreenSize();
