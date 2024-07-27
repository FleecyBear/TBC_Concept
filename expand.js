document.addEventListener('DOMContentLoaded', function() {
    // Select elements
    const startImage = document.querySelector('.start-image');
    const startProducts = document.querySelector('.start-products');
    const startOffers = document.querySelector('.start-offers');
    const startConcept = document.querySelector('.start-concept');
  
    const expandedProducts = document.querySelector('.expanded-products');
    const expandedOffers = document.querySelector('.expanded-offers');
    const expandedConcept = document.querySelector('.expanded-concept');
    const expandedImages = document.querySelector('.expanded-images');
  
    const toggleVisibility = (target) => {
      const isVisible = target.classList.contains('visible');

      // Hide all expanded sections except expandedImages
      expandedProducts.classList.remove('visible');
      expandedOffers.classList.remove('visible');
      expandedConcept.classList.remove('visible');
      expandedImages.classList.remove('visible');
      
      
      // Show or hide the target section
      if (!isVisible) {
        target.classList.add('visible');
        // Show the corresponding start section
        target.previousElementSibling.classList.add('visible');
        expandedImages.classList.add('visible');
      } else {
        target.classList.remove('visible');
        // Hide all start sections
        startImage.classList.remove('visible');
        startProducts.classList.remove('visible');
        startOffers.classList.remove('visible');
        startConcept.classList.remove('visible');
      }
      
      // Ensure expandedImages is always visible
    
    };
  
    // Event listeners for clicks
    document.querySelector('.line-text.products').addEventListener('click', () => {
      toggleVisibility(expandedProducts);
    });
    document.querySelector('.line-text.offers').addEventListener('click', () => {
      toggleVisibility(expandedOffers);
    });
    document.querySelector('.line-text.concept_space').addEventListener('click', () => {
      toggleVisibility(expandedConcept);
    });
});
