// src/assets/scripts/signup.js
console.log('signup.js has been loaded');

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementsByName('email')[0].value;
    const zipcode = document.getElementsByName('zipcode')[0].value;

    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            zipcode: zipcode,
        }),
    })
    .then(response => {
        if (response.ok) {
            return response.text();
        }
        throw new Error('Something went wrong on server side');
    })
    .then(data => {
        showModal('Thank you for signing up!');
    })
    .catch(error => {
        console.error('Error:', error);
        showModal('Failed to submit: ' + error.message);
    });
});

function showModal(message = 'Thank you for signing up!') {
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    if (modal && modalMessage) {
        modal.classList.remove('hidden');
        modalMessage.textContent = message;
    } else {
        console.error('Modal or modal message elements not found!');
    }
}

function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.classList.add('hidden');
    }
    window.location.href = '/';
}
