const clock = document.querySelector("#clock");
let koreanDay = ["일", "월", "화", "수", "목", "금", "토"];

function getClock() {
  const newDate = new Date();

  const month = String(newDate.getMonth() + 1);
  const day = String(newDate.getDay());
  const date = String(newDate.getDate());

  function hoursCal() {
    const newHours = newDate.getHours();
    if (newHours > 12) {
      return `오후 ${newHours - 12}`;
    } else {
      return `오전 ${newHours}`;
    }
  }
  const minutes = String(newDate.getMinutes()).padStart(2, "0");

  clock.innerText = `${month}월 ${date}일 (${
    koreanDay[day]
  }) ${hoursCal()}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);
