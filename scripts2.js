// JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                // Check custom validations for username, email, and password
                validateUsername(form);
                validateEmail(form);
                validatePassword(form);

                form.classList.add('was-validated');
            }, false);
        });

    // Custom validation functions
    function validateUsername(form) {
        var usernameInput = form.elements['username'];
        if (usernameInput.value.trim().length === 0) {
            usernameInput.setCustomValidity('Username cannot be empty');
        } else {
            usernameInput.setCustomValidity('');
        }
    }

    function validateEmail(form) {
        var emailInput = form.elements['email'];
        if (emailInput.value.trim().length === 0 || !isValidEmail(emailInput.value)) {
            emailInput.setCustomValidity('Enter a valid email address');
        } else {
            emailInput.setCustomValidity('');
        }
    }

    function validatePassword(form) {
        var passwordInput = form.elements['password'];
        if (passwordInput.value.trim().length < 6) {
            passwordInput.setCustomValidity('Password must be at least 6 characters long');
        } else {
            passwordInput.setCustomValidity('');
        }
    }

    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

})();
