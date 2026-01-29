// Registration
const registerForm = document.getElementById("registerForm");
if (registerForm) {
registerForm.addEventListener("submit", function (e) {
e.preventDefault();


const name = regName.value;
const email = regEmail.value;
const password = regPassword.value;


localStorage.setItem("email", email);
localStorage.setItem("password", password);


alert("Registration Successful");
window.location.href = "login.html";
});
}


// Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
loginForm.addEventListener("submit", function (e) {
e.preventDefault();


const storedEmail = localStorage.getItem("email");
const storedPassword = localStorage.getItem("password");


if (loginEmail.value === storedEmail && loginPassword.value === storedPassword) {
alert("Login Successful");
} else {
alert("Invalid Credentials");
}
});
}
