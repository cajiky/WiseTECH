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

// document.getElementById('contact-form').addEventListener('submit', function(e) {
// e.preventDefault();
//     // Validation code here
//     if (/* validation succeeds */) {
//       // Submit form or show success message
//     } else {
//       // Show error message
//     }
//   });

  document.getElementById('contactForm').addEventListener('submit', function(event){
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if(name && email){
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Message:", message);
    
      //Ajax Request

      alert("Thank you for your submissions!");

    } else {

      alert('Please fill out all the fields')

    }
    alert('Thank you for your message');

  })

  document.getElementById('messageBox').addEventListener('click', function() {
    this.classList.toggle('expanded');
    var content = this.querySelector('.content');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
});