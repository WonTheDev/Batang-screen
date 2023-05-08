const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginUsername = document.querySelector("#login-username");
const navbars = document.querySelector("#navbar");
const loginBox = document.querySelector("#login-box");

const HIDDEN_DISPLAY = "HIDDEN_D";
const HIDDEN_VISIBILITY = "HIDDEN_V";
const USERNAME_KEY = "username";

function paintLoginUsername(username) {
  loginUsername.innerText = username;
}

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_VISIBILITY);
  navbars.classList.remove(HIDDEN_VISIBILITY);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintLoginUsername(username);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_VISIBILITY);
  navbars.classList.add(HIDDEN_VISIBILITY);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintLoginUsername(savedUsername);
  navbars.classList.remove(HIDDEN_VISIBILITY);
}
