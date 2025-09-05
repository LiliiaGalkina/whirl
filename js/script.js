const arrowsDown = document.querySelectorAll(".text-block__item-arrow");
const textBlock = document.querySelectorAll(".text-block__item-text");

for(let i = 0; i < arrowsDown.length; i++) {
    arrowsDown[i].addEventListener("click", () => {
        textBlock[i].classList.toggle("text-block__item-text_none");
    })
}