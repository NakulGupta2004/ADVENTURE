document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const travelPreference = document.getElementById('travelPreference').value;

        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];

        if (users.some(user => user.email === email)) {
            alert('Email already registered!');
            return;
        }

        users.push({
            firstName,
            lastName,
            email,
            phone,
            password,
            travelPreference
        });

        localStorage.setItem('users', JSON.stringify(users));

        alert('Registration successful! Please login.');
        window.location.href = 'login.html';
    });
});