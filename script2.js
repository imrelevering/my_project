document.getElementById('hamburger').addEventListener('click', function() {
            const navLinks = document.getElementById('navLinks');
            navLinks.style.display = navLinks.style.display === 'none' ? 'block' : 'none';
        });


        // Real-time validation feedback
const form = document.getElementById('contactForm');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

name.addEventListener('input', () => {
    if (name.value.trim() === '') {
        nameError.textContent = 'Name is required.';
    } else {
        nameError.textContent = '';
    }
});

email.addEventListener('input', () => {
    if (email.value.trim() === '') {
        emailError.textContent = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        emailError.textContent = 'Enter a valid email address.';
    } else {
        emailError.textContent = '';
    }
});

message.addEventListener('input', () => {
    if (message.value.trim() === '') {
        messageError.textContent = 'Message is required.';
    } else {
        messageError.textContent = '';
    }
});

form.addEventListener('submit', function(e) {
    let valid = true;
    if (name.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        valid = false;
    }
    if (email.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        emailError.textContent = 'Enter a valid email address.';
        valid = false;
    }
    if (message.value.trim() === '') {
        messageError.textContent = 'Message is required.';
        valid = false;
    }
    if (!valid) {
        e.preventDefault();
    }
});