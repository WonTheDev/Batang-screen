// d라이트/다크 모드
const currentColor = document.body;
const colorSwitch = document.querySelector("#switchButton");

colorSwitch.addEventListener("click", () => {
  currentColor.classList.toggle("DARK_MODE");
});

// 로그아웃 드롭다운 메뉴 및 로그아웃 버튼 클릭 시 로그아웃
const dropdownButton = document.querySelector("#dropdown-button");
const logoutButton = document.querySelector("#logout-button");

dropdownButton.addEventListener("click", () => {
  logoutButton.classList.toggle("HIDDEN_D");
});

logoutButton.addEventListener("click", () => {
  window.localStorage.removeItem("username");
  window.location.reload();
});

const todoDisplay = document.querySelector("#todo-container");
const todoButtonClick = document.querySelector("#todo-button");
const closeButtonClick = document.querySelector("#close-button");

todoButtonClick.addEventListener("click", () => {
  todoDisplay.classList.toggle("HIDDEN_V");
});

closeButtonClick.addEventListener("click", () => {
  todoDisplay.classList.toggle("HIDDEN_V");
});
