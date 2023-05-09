/////토글 이벤트 만들기 /////////////////////////////////////////////////////////////////////////////////
let visible1 = document.querySelector("#visible1");
let visible2 = document.querySelector("#visible2");
let endWorkList = document.querySelector("#end-worklist");
let toDoList = document.querySelector("#todolist");

function visible1Change() {
  if (visible1.textContent == "☰") {
    visible1.textContent = "▼";
    endWorkList.style.display = "block";
    // endWorkList.style.display = "block";
  } else {
    visible1.textContent = "☰";
    endWorkList.style.display = "none";
  }
}
function visible2Change() {
  if (visible2.textContent == "☰") {
    visible2.textContent = "▼";
    toDoList.style.display = "block";
    // toDoList.style.display = "inline";
  } else {
    visible2.textContent = "☰";
    toDoList.style.display = "none";
  }
}

visible1.addEventListener("click", function () {
  visible1Change();
});

visible2.addEventListener("click", function () {
  visible2Change();
});
////////input의 값 가져와서 추가하기 //////////////////////////////////////////////////////////////////

let input = document.querySelector("#addwork-input"); //할 일 값 가져오기
let memo = document.querySelector("#memo-input"); //메모 값 가져오기
let checkBox1 = document.querySelector("#checkbox1"); //작업완료 체크박스 값 가져오기
let checkBox2 = document.querySelector("#checkbox2"); //할 일 체크박스 값 가져오기
let addButton = document.querySelector("#addbutton"); //버튼 추가하기

let error = document.querySelector("#errors"); //에러태그모음
let error1 = document.querySelector("#error1"); //할일
let error2 = document.querySelector("#error2"); //내용
let error3 = document.querySelector("#error3"); //프로젝트

let errorMsg = document.querySelector("#error-msg");
let buttonToDo = document.querySelector(".button_todo"); //여기는 새로 생성한 버튼이라서 클래스로 했음

input.addEventListener("click", function () {
  errorMsg.style.display = "none";
});

memo.addEventListener("click", function () {
  errorMsg.style.display = "none";
});
checkBox1.addEventListener("click", function () {
  errorMsg.style.display = "none";
});
checkBox2.addEventListener("click", function () {
  errorMsg.style.display = "none";
});

input.addEventListener("input", function (e) {
  if (input.value.length !== 0) {
    error1.innerHTML = "내용 <i class='fa-solid fa-square'></i>";
  } else {
    error1.innerHTML = "할일 <i class='fa-regular fa-square'></i>";
  }
});
memo.addEventListener("input", function (e) {
  if (memo.value.length !== 0) {
    error2.innerHTML = "내용 <i class='fa-solid fa-square'></i>";
  } else {
    error2.innerHTML = "내용 <i class='fa-regular fa-square'></i>";
  }
});
checkBox1.addEventListener("input", function (e) {
  if (checkBox1.checked || checkBox2.checked) {
    error3.innerHTML = "Projects <i class='fa-solid fa-square'></i>";
  } else {
    error3.innerHTML = "Projects <i class='fa-regular fa-square'></i>";
  }
});
checkBox2.addEventListener("input", function (e) {
  if (checkBox1.checked || checkBox2.checked) {
    error3.innerHTML = "Projects <i class='fa-solid fa-square'></i>";
  } else {
    error3.innerHTML = "Projects <i class='fa-regular fa-square'></i>";
  }
});

function visible() {
  errorMsg.style.display = "none";
  errorMsg.style.display = "flex";
}

function reset() {
  input.value = "";
  memo.value = "";
  checkBox1.checked = false;
  checkBox2.checked = false;
  error1.innerHTML = "할일 <i class='fa-regular fa-square'></i>";
  error2.innerHTML = "내용 <i class='fa-regular fa-square'></i>";
  error3.innerHTML = "Projects <i class='fa-regular fa-square'></i>";
}

function DeleteToDo(e) {
  const del = e.target.parentElement;
  del.remove();
}

function paintToDo(list, newTodo, newMemo) {
  const liToDo = document.createElement("div");
  const liMemo = document.createElement("ul");
  const spanToDo = document.createElement("span");
  const buttonToDo = document.createElement("button");
  const lineChange = document.createElement("br");

  liToDo.className = "list_container";
  spanToDo.className = "span_todo";
  buttonToDo.className = "button_todo";
  buttonToDo.innerText = "X";
  buttonToDo.addEventListener("click", DeleteToDo);

  const spanMemo = document.createElement("span");
  spanMemo.className = "span_memo";

  liToDo.appendChild(buttonToDo);
  liToDo.appendChild(spanToDo);
  liToDo.appendChild(lineChange);
  liToDo.appendChild(spanMemo);

  spanToDo.innerText = newTodo;
  spanMemo.innerText = newMemo;
  list.appendChild(liToDo);

  // liMemo.appendChild(spanMemo)

  // list.appendChild(liMemo)
}

function endWorkListSubmit(event) {
  event.preventDefault();
  let newTodo = input.value;
  let newMemo = memo.value;
  input.value = "";
  memo.value = "";
  paintToDo(endWorkList, newTodo, newMemo);
}

function ToDoListSubmit(event) {
  event.preventDefault();
  let newTodo = input.value;
  let newMemo = memo.value;
  input.value = "";
  memo.value = "";
  paintToDo(toDoList, newTodo, newMemo);
}

addButton.addEventListener("click", function (e) {
  //추가 버튼 눌렀을 떄 할 일 , 메모 추가하기
  if (checkBox1.checked && checkBox2.checked) {
    //둘 다 체크 되었을 경우 (경고 메세지 출력)
    console.log("둘다 체크!");
    if (input.value.length !== 0 && memo.value.length !== 0) {
      errorMsg.textContent = "하나의 항목에만 체크해주세요";
      visible();
    } else {
      errorMsg.textContent =
        "하나의 항목에만 체크해주세요, 모든 항목을 입력하세요";
      visible();
    }
  } else if (checkBox1.checked === true && checkBox2.checked === false) {
    //작업 완료가 체크 (작업완료에 추가)

    if (input.value.length !== 0 && memo.value.length !== 0) {
      //성공
      errorMsg.textContent = "작업완료에 추가되었습니다";
      visible();
      endWorkListSubmit(e);
      reset();
    } else {
      errorMsg.textContent = "모든 항목을 입력하세요";
      visible();
    }
  } else if (checkBox1.checked === false && checkBox2.checked === true) {
    //할 일 체크 (할 일에 추가)
    console.log("할일 체크 ! ");
    if (input.value.length !== 0 && memo.value.length !== 0) {
      //성공
      errorMsg.textContent = "할 일에 추가되었습니다";
      visible();
      ToDoListSubmit(e);
      reset();
    } else {
      errorMsg.textContent = "모든 항목을 입력하세요";
      visible();
    }
  } else if (!(checkBox1.checked && checkBox2.checked)) {
    //둘 다 체크 안되었을 경우 (경고 메세지 출력)
    console.log("둘다 낫 체크!");
    errorMsg.textContent = "모든 항목을 입력하세요";
    visible();
  }
});
