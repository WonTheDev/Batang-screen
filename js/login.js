// 민지님 시작

// //로그인 바탕화면으로 쓸 이미지. (랜덤하게 출력)
// const randHoldImg = [
//   "holdScreen1.jpg",
//   "holdScreen2.jpg",
//   "holdScreen3.jpg",
//   "holdScreen4.jpg",
//   "holdScreen5.jpg",
//   "holdScreen6.jpg",
// ];

function loginClick() {
  //logIn버튼 클릭시 버튼 없어지고 로그인 창 나타나게 함   (로그인 박스 나타나게 하는 버튼 )
  document.querySelector(".login_button").style.visibility = "hidden";
  document.querySelector(".login_form").style.display = "flex";
}

// 승빈님 시작 //
/* onclick value reset */
resetIdValue = () => {
  document.getElementById("login_input_id").value = null;
};
resetPwValue = () => {
  document.getElementById("login_input_pw").value = null;
};

/* if id or pw input value = null */
document.addEventListener("keyup", (keyPress) => {
  if (keyPress.key === "Enter") {
    let idValue = document.getElementById("login_input_id");
    let pwValue = document.getElementById("login_input_pw");
    if (!idValue.value || !pwValue.value) {
      alert("아이디 혹은 비밀번호를 입력하여 주세요");
    }
    /* id or pw input value = not null */
    if (idValue.value && pwValue.value) {
      document.querySelector(".navbar").style.visibility = "inherit";
      document.querySelector(".navbar").style.backgroundColor =
        "rgba(0, 0, 0, 0.3)";
      document.querySelector(".navbar").style.backdropFilter = "blur(8px)";
      document.querySelector(".lockscreen").style.visibility = "hidden";
    }
  }
});
