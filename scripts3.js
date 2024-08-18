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

                // Check custom validations for username and password
                validateUsername(form);
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

    function validatePassword(form) {
        var passwordInput = form.elements['password'];
        if (passwordInput.value.trim().length === 0) {
            passwordInput.setCustomValidity('Password cannot be empty');
        } else {
            passwordInput.setCustomValidity('');
        }
    }

})();
