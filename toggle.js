
const toggleButton = document.querySelector('.hidden-button-2');
const unexpandElement = document.querySelector('.unexpand');
const unhideButton = document.querySelector('.unhide-button');

function toggleUnexpand() {
    if (unexpandElement.style.display === 'none' || !unexpandElement.style.display) {
        unexpandElement.style.display = 'block';
        unhideButton.style.display = 'block';
       
        document.body.style.height = 'auto'; 
        window.scrollTo(0, document.body.scrollHeight); 
    } else {
        unexpandElement.style.display = 'none';
        unhideButton.style.display = 'block';
        
        
        document.body.style.height = 'auto'; 
    }
}


toggleButton.addEventListener('click', toggleUnexpand);


function adjustForScreenSize() {
    const screenWidth = window.innerWidth;

    
    if (screenWidth > 1000) {
        unexpandElement.style.display = 'block';
        unhideButton.style.display = 'none';
    } else {
       
    
       
    }
}


window.addEventListener('resize', adjustForScreenSize);


adjustForScreenSize();
