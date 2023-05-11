// d라이트/다크 모드
const currentColor = document.body;
const colorSwitch = document.querySelector("#switch-button");

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
const playerButtonClick = document.querySelector("#player-button");

todoButtonClick.addEventListener("click", () => {
  todoDisplay.classList.toggle("HIDDEN_V");
});

closeButtonClick.addEventListener("click", () => {
  todoDisplay.classList.toggle("HIDDEN_V");
});

playerButtonClick.addEventListener("click", () => {
  musicWrap.classList.toggle("HIDDEN_V");
});

const randHoldImg = [
  "background1.jpg",
  "background2.jpg",
  "background3.jpg",
  "background4.jpg",
  "background5.jpg",
  "background6.jpg",
  "background7.jpg",
  "background8.jpg",
  "background9.jpg",
  "background10.jpg",
  "background11.jpg",
  "background12.jpg",
  "background13.jpg",
  "background14.jpg",
  "background15.jpg",
  "background16.jpg",
  "background17.jpg",
  "background18.jpg",
  "background19.jpg",
  "background20.jpg",
  "background21.jpg",
  "background22.jpg",
  "background23.jpg",
  "background24.jpg",
  "background25.jpg",
  "background26.jpg",
  "background27.jpg",
  "background28.jpg",
];

// 로고를 클릭 했을 시 배경이미지 바꿔주기
const bgButtonClick = document.querySelector("#bg-button");
const bgImg = document.querySelector(".background_img");
const backgroundNumKey = "backgroundNum";
let beforeNum = 0;
let backgroundNum = [];

let beforeBackgroundNum = localStorage.getItem(backgroundNumKey);
if (!beforeBackgroundNum) {
  //빈 값일 경우
  bgImg.style.backgroundImage = `url(img/${randHoldImg[0]})`;
} else {
  // 스토리지에 저장된 값이 있을 경우
  bgImg.style.backgroundImage = `url(img/${
    randHoldImg[beforeBackgroundNum - 1]
  })`; //아닐 경우 이전 인덱스 이미지를 출력
}

function changeImg() {
  randNum = Math.floor(Math.random() * randHoldImg.length); //0~배열길이 만큼까지 난수 생성
  while (1) {
    if (beforeNum === randNum) {
      //이전 숫자와 중복 될 경우 새로운 randNum 생성
      randNum = Math.floor(Math.random() * randHoldImg.length);
      continue;
    } else {
      bgImg.style.backgroundImage = `url(img/${randHoldImg[randNum - 1]})`; //아닐 경우 랜덤한 이미지 출력
      localStorage.setItem(backgroundNumKey, JSON.stringify(parseInt(randNum)));
      beforeNum = randNum;
      break;
    }
  }
}
bgButtonClick.addEventListener("click", changeImg);
