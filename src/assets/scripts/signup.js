// src/assets/scripts/signup.js
console.log('signup.js has been loded');

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
        if(response.ok) {
            return response.text();
            console.log('signup.js is now loading');
        }
        throw new Error('Something went wrong on server side');
    })
    .then(data => {
        showModal(); // Assuming showModal is a function defined here or imported
    })
    .catch(error => {
        console.error('Error:', error);
        showModal('Failed to submit: ' + error.message); // Modify modal to show errors
    });
});

function showModal(message = 'Thank you for signing up!') {
    document.getElementById('modal').classList.remove('hidden');//show the model
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
    window.location.href = '/';
}
