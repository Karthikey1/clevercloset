document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerBtn = document.getElementById('registerBtn');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const userId = document.getElementById('userId').value;
        const password = document.getElementById('password').value;
        
        // Here you would typically send these credentials to a server
        console.log('Login attempt:', { userId, password });
        alert(`Login attempt with User ID: ${userId}`);
    });

    registerBtn.addEventListener('click', function() {
        // Here you would typically redirect to a registration page
        console.log('Register button clicked');
        alert('Redirecting to registration page...');
    });
});