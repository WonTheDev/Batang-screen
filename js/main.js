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
  //localStorage에 저장값이 없을 경우
  bgImg.style.backgroundImage = `url(img/${randHoldImg[0]})`; //기본 배경화면 적용
} else {
  // localStorage에 저장 값이 있을 경우
  bgImg.style.backgroundImage = `url(img/${randHoldImg[beforeBackgroundNum]})`; //인덱스 번호와 일치하는 배경 적용
}
function changeImg() {
  randNum = Math.floor(Math.random() * (randHoldImg.length - 1)); //0~(배열길이-1) 만큼 난수 생성
  while (1) {
    //중복검사
    if (beforeNum === randNum) {
      //이전 숫자와 중복 될 경우 새로운 randNum 생성
      randNum = Math.floor(Math.random() * (randHoldImg.length - 1));
      continue;
    } else {
      //이전 숫자와 중복되지 않을 경우 랜덤한 이미지 출력
      console.log(randNum + 1);
      bgImg.style.backgroundImage = `url(img/${randHoldImg[randNum]})`;
      localStorage.setItem(backgroundNumKey, JSON.stringify(parseInt(randNum)));
      beforeNum = randNum;
      break;
    }
  }
}
bgButtonClick.addEventListener("click", changeImg); //배경화면 버튼 클릭 시 랜덤배경으로 변경
