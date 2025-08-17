document.getElementById('hamburger').addEventListener('click', function() {
            const navLinks = document.getElementById('navLinks');
            navLinks.style.display = navLinks.style.display === 'none' ? 'block' : 'none';
        });


    document.getElementById('contactForm').addEventListener('submit', function(e) {
        let valid = true;

        // Name validation
        const name = document.getElementById('name');
        const nameError = document.getElementById('nameError');
        if (name.value.trim().length < 2) {
            nameError.textContent = 'Please enter at least 2 characters.';
            valid = false;
        } else {
            nameError.textContent = '';
        }

        // Email validation
        const email = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            emailError.textContent = 'Please enter a valid email address.';
            valid = false;
        } else {
            emailError.textContent = '';
        }

        // Message validation
        const message = document.getElementById('message');
        const messageError = document.getElementById('messageError');
        if (message.value.trim().length < 10) {
            messageError.textContent = 'Message must be at least 10 characters.';
            valid = false;
        } else {
            messageError.textContent = '';
        }

        if (!valid) {
            e.preventDefault();
        }
    });