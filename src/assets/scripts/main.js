document.addEventListener('DOMContentLoaded', function() {
  console.log('Wise Tech loaded successfully!');
});

document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetElement = document.querySelector(this.getAttribute('href'));
      if (targetElement) {
          targetElement.scrollIntoView({
              behavior: 'smooth'
          });
      }
  });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Message:", message);
      alert("Thank you for your message. We will get back to you shortly!");
  } else {
      alert('Please fill out all the fields.');
  }
});
