/* in add icon page */
const addPage = document.getElementById("add-page");

const addIcons = document.getElementById("add-icons");

const houseIcon = document.getElementById("house-icon");

const imageIcon = document.getElementById("image-icon");

const fooIcon = document.getElementById("foo-icon");

const smileIcon = document.getElementById("smile-icon");

/* make function -------------------------------------------------------------*/

/* get_value */
const getValue = function (who) {
  return document.getElementById(who).value;
};

/* add class */
const addClassWhat = function (who, what) {
  return who.classList.add(what);
};

/* remove class */
const removeClassWhat = function (who, what) {
  return who.classList.remove(what);
};

/* contains? */
const containClassWhat = function (who, what) {
  return who.classList.contains(what);
};

/* style change? */
const styleChange = function (who) {
  return who.style;
};

/* icons funtion ------ */

/* click event icons */
const clickIcons = function (icon1, icon2, icon3, main) {
  icon1.removeAttribute("id");
  icon2.removeAttribute("id");
  icon3.removeAttribute("id");
  removeClassWhat(icon1, "if_click_icon");
  removeClassWhat(icon2, "if_click_icon");
  removeClassWhat(icon3, "if_click_icon");

  main.id = "if-click-icon";
  addClassWhat(main, "if_click_icon");
};

/* reset event icons */
const reset_icons = function (icon1, icon2, icon3, icon4) {
  icon1.removeAttribute("id");
  icon2.removeAttribute("id");
  icon3.removeAttribute("id");
  icon4.removeAttribute("id");
  removeClassWhat(icon1, "if_click_icon");
  removeClassWhat(icon2, "if_click_icon");
  removeClassWhat(icon3, "if_click_icon");
  removeClassWhat(icon4, "if_click_icon");
};

/*  */

/* Event  ---------------------------------------------------  */

/* common */
const whatEvent = function (who, whatevent, Implement) {
  who.addEventListener(whatevent, Implement);
};

/* moustover */
const mouseoverEvent = function (who, Implement) {
  who.addEventListener("mouseover", Implement);
};

/* mouseleave */
const mouseleaveEvent = function (who, Implement) {
  who.addEventListener("mouseleave", Implement);
};

/* click */
const clickEvent = function (who, Implement) {
  who.addEventListener("click", Implement);
};

/* remember------------------------------------------------------------- */

/* save */
const rememberIcons = "rIcons";
let rIcons = [];

function saveIcons() {
  localStorage.setItem(rememberIcons, JSON.stringify(rIcons));
  console.log(localStorage.setItem(rememberIcons, JSON.stringify(rIcons)));
}
/* load */
function loadIcons() {
  const getList = JSON.parse(localStorage.getItem(rememberIcons));
  if (getList === null) {
  } else {
    getList.forEach(function (icons) {
      loadSetting(icons.icon, icons.value);
    });
  }
}
/* load icons */

const loadSetting = function (whaticon, whatsite) {
  let makeIconsLink = document.createElement("a");
  let makeIcons = document.createElement("li");
  addClassWhat(makeIconsLink, "remove_event");
  addClassWhat(makeIconsLink, "DISPLAY_F");
  addClassWhat(makeIconsLink, "FLEX_C");

  iconsEvent();

  makeIconsLink.target = "_blank";
  makeIconsLink.href = whatsite;

  if (whaticon === "house") {
    addClassWhat(makeIcons, "fa-solid");
    addClassWhat(makeIcons, "fa-house");
  }
  if (whaticon === "image") {
    addClassWhat(makeIcons, "fa-solid");
    addClassWhat(makeIcons, "fa-image");
  }
  if (whaticon === "poo") {
    addClassWhat(makeIcons, "fa-poo");
    addClassWhat(makeIcons, "fa-solid");
  }
  if (whaticon === "smile") {
    addClassWhat(makeIcons, "fa-regular");
    addClassWhat(makeIcons, "fa-face-smile");
  }

  makeIconsLink.appendChild(makeIcons);
  bottomIcons = makeIconsLink;
  document.getElementById("bottom-bars").prepend(bottomIcons);
};

const iconsEvent = function () {
  document
    .querySelectorAll(".remove_event")
    .forEach(function (delete_icon_active) {
      if (containClassWhat(delete_icon_active, "remove_event")) {
        console.log("adv");
        whatEvent(delete_icon_active, "contextmenu", function () {
          if (!confirm("삭제하시겠습니까?")) {
            alert("삭제취소");
          } else {
            alert("삭제되었습니다");
            delete_icon_active.remove();
          }
        });
        removeClassWhat(delete_icon_active, "remove_event");
      }
    });
};

/* add icon focus event */
/* common color */
styleChange(addIcons).color = "rgba(255,255,255,0.8)";

/* focus */
mouseoverEvent(addIcons, function () {
  addIcons.style.color = "rgba(255, 255, 255, 0.3)";
});
mouseleaveEvent(addIcons, function () {
  addIcons.style.color = "rgba(255, 255, 255, 0.8)";
});

/* add icon click event */
// clickEvent(addIcons, function () {
//   removeClassWhat(addPage, "HIDDEN_D");
//   addClassWhat(addPage, "DISPLAY_F");

// });

addIcons.addEventListener("click", () => {
  addPage.classList.toggle("HIDDEN_V");
});

/* add pages ------------------------------------------------------- */

/* when icons mouse over and leave */

/* mouseover */
mouseoverEvent(houseIcon, function () {
  addClassWhat(houseIcon, "icons_common_color");
});

mouseoverEvent(imageIcon, function () {
  addClassWhat(imageIcon, "icons_common_color");
});
mouseoverEvent(fooIcon, function () {
  addClassWhat(fooIcon, "icons_common_color");
});

mouseoverEvent(smileIcon, function () {
  addClassWhat(smileIcon, "icons_common_color");
});

/* mouseleave */
mouseleaveEvent(houseIcon, function () {
  removeClassWhat(houseIcon, "icons_common_color");
});
mouseleaveEvent(imageIcon, function () {
  removeClassWhat(imageIcon, "icons_common_color");
});
mouseleaveEvent(fooIcon, function () {
  removeClassWhat(fooIcon, "icons_common_color");
});
mouseleaveEvent(smileIcon, function () {
  removeClassWhat(smileIcon, "icons_common_color");
});

/* if click icons */

clickEvent(houseIcon, function () {
  clickIcons(imageIcon, fooIcon, smileIcon, houseIcon);
});
clickEvent(imageIcon, function () {
  clickIcons(houseIcon, fooIcon, smileIcon, imageIcon);
});
clickEvent(fooIcon, function () {
  clickIcons(imageIcon, houseIcon, smileIcon, fooIcon);
});
clickEvent(smileIcon, function () {
  clickIcons(imageIcon, fooIcon, houseIcon, smileIcon);
});

/* press_enter */
whatEvent(document, "keyup", function (key_press) {});

document.addEventListener("keyup", (key_press) => {
  /* add_page on? off? */
  if (!document.getElementById("add-page").classList.contains("HIDDEN_D")) {
    if (key_press.key === "Enter") {
      const siteValue = getValue("add-site");
      const nameValue = getValue("add-name");
      /* is value null? */
      if (!siteValue || !nameValue) {
        alert("이름 혹은 사이트를 입력해 주세요.");
      } else {
        /* set-up */
        let savingIcons = {};
        let icons = [];
        let makeIconsLink = document.createElement("a");
        let makeIcons = document.createElement("li");
        let makeIconsName = document.createElement("p");
        addClassWhat(makeIconsLink, "DISPLAY_F");
        addClassWhat(makeIconsLink, "FLEX_C");
        addClassWhat(makeIconsLink, "remove_event");
        makeIconsLink.target = "_blank";

        /* where we go? || what name? */
        makeIconsLink.href = siteValue;
        makeIconsName.innerText = nameValue;

        /* what icons in a new? */
        if (
          !containClassWhat(houseIcon, "if_click_icon") &&
          !containClassWhat(smileIcon, "if_click_icon") &&
          !containClassWhat(imageIcon, "if_click_icon") &&
          !containClassWhat(fooIcon, "if_click_icon")
        ) {
          alert("아이콘을 선택해주세요.");
        } else {
          if (containClassWhat(houseIcon, "if_click_icon")) {
            addClassWhat(makeIcons, "fa-house");
            addClassWhat(makeIcons, "fa-solid");

            savingIcons = {
              icon: "house",
              value: siteValue,
              Num: rIcons.length + 1,
            };
          }
          if (containClassWhat(smileIcon, "if_click_icon")) {
            addClassWhat(makeIcons, "fa-regular");
            addClassWhat(makeIcons, "fa-face-smile");

            savingIcons = {
              icon: "house",
              value: siteValue,
              Num: rIcons.length + 1,
            };
          }
          if (containClassWhat(fooIcon, "if_click_icon")) {
            addClassWhat(makeIcons, "fa-solid");
            addClassWhat(makeIcons, "fa-poo");

            savingIcons = {
              icon: "poo",
              value: siteValue,
              Num: rIcons.length + 1,
            };
          }
          if (containClassWhat(imageIcon, "if_click_icon")) {
            addClassWhat(makeIcons, "fa-solid");
            addClassWhat(makeIcons, "fa-image");

            savingIcons = {
              icon: "image",
              value: siteValue,
              Num: rIcons.length + 1,
            };
          }

          makeIconsLink.appendChild(makeIcons);
          bottomIcons = makeIconsLink;
          bottomBars.prepend(bottomIcons);
          console.log(savingIcons);
          rIcons.push(savingIcons);
          saveIcons(icons);

          /* add delete event */
          iconsEvent();
        }
      }
    }
  }
});
/* close add page */
whatEvent(document, "keyup", function (key_code) {
  if (key_code.key === "Escape") {
    if (addPage.classList.contains("DISPLAY_F")) {
      addPage.classList.remove("DISPLAY_F");
      addPage.classList.add("HIDDEN_D");
      reset_icons(houseIcon, imageIcon, fooIcon, smileIcon);
    }
  }
});

loadIcons();
iconsEvent();
