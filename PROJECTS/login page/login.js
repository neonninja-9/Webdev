// Toggle between Login and Signup forms
document.addEventListener('DOMContentLoaded', function () {
    const loginDiv = document.getElementById('login');
    const signupDiv = document.getElementById('Signup');
    const loginBtn = document.getElementById('show-login');
    const signupBtn = document.getElementById('show-signup');

    loginBtn.addEventListener('click', function () {
        loginDiv.style.display = 'block';
        signupDiv.style.display = 'none';
        loginBtn.classList.add('active');
        signupBtn.classList.remove('active');
    });

    signupBtn.addEventListener('click', function () {
        loginDiv.style.display = 'none';
        signupDiv.style.display = 'block';
        signupBtn.classList.add('active');
        loginBtn.classList.remove('active');
    });

    // Show Password functionality
    const newpassInput = document.getElementById('newpass');
    const showPasswordCheckbox = document.getElementById('show-password');
    if (showPasswordCheckbox) {
        showPasswordCheckbox.addEventListener('change', function () {
            newpassInput.type = this.checked ? 'text' : 'password';
        });
    }

    // Password Strength Indicator
    const strengthIndicator = document.getElementById('strength-indicator');
    if (newpassInput && strengthIndicator) {
        newpassInput.addEventListener('input', function () {
            const val = newpassInput.value;
            let strength = '';
            let color = '';
            if (val.length < 6) {
                strength = 'Weak';
                color = 'red';
            } else if (val.match(/[A-Z]/) && val.match(/[0-9]/) && val.match(/[^A-Za-z0-9]/)) {
                strength = 'Strong';
                color = 'green';
            } else {
                strength = 'Medium';
                color = 'orange';
            }
            strengthIndicator.textContent = `Strength: ${strength}`;
            strengthIndicator.style.color = color;
        });
    }

    // Signup password confirmation
    const signupForm = signupDiv.querySelector('form');
    signupForm.addEventListener('submit', function (e) {
        const newpass = document.getElementById('newpass').value;
        const conpass = document.getElementById('conpass').value;
        if (newpass !== conpass) {
            alert('Passwords do not match!');
            e.preventDefault();
        }
    });
});