document.addEventListener('DOMContentLoaded', function() {
    console.log('Wise Tech loaded successfully!');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

document.getElementById('contact-form').addEventListener('submit', function(e) {
e.preventDefault();
    // Validation code here
    if (/* validation succeeds */) {
      // Submit form or show success message
    } else {
      // Show error message
    }
  });

  
console.log('gia is a loving soulmate!');