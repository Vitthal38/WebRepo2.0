// Register
const registerForm = document.getElementById('registerForm');
if (registerForm) {
registerForm.addEventListener('submit', function (e) {
e.preventDefault();
const email = document.getElementById('regEmail').value;
const password = document.getElementById('regPassword').value;
localStorage.setItem('userEmail', email);
localStorage.setItem('userPassword', password);
alert('Registration successful');
window.location.href = 'login.html';
});
}
// Login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
loginForm.addEventListener('submit', function (e) {
e.preventDefault();
6
const email = document.getElementById('loginEmail').value;
const password = document.getElementById('loginPassword').value;
if (
email === localStorage.getItem('userEmail') &&
password === localStorage.getItem('userPassword')
) {
alert('Login successful');
} else {
alert('Invalid credentials');
}
});
}
✅ This V
