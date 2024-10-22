document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];

        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            alert('Login successful!');
            // Store the logged-in user's email in session storage
            sessionStorage.setItem('loggedInUser', email);
            window.location.href = 'project.html';
        } else {
            alert('Invalid email or password!');
        }
    });
});