const arrowsDown = document.querySelectorAll(".text-block__item-arrow");
const textBlock = document.querySelectorAll(".text-block__item-text");

for(let i = 0; i < arrowsDown.length; i++) {
    arrowsDown[i].addEventListener("click", () => {
        textBlock[i].classList.toggle("text-block__item-text_none");
    })
}

//menu

const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener("click", func);

function func() {
  burger.classList.toggle("menu__burger_active");
  menu.classList.toggle("menu__list_active");
}
