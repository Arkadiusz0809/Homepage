let container = document.querySelector(".js-container");
let button = document.querySelector(".js-button");
let themeName = document.querySelector(".js-themeName");

button.addEventListener("click", () => {
    container.classList.toggle("button__style");
    button.classList.toggle("beigeButton");

    themeName.innerText = button.classList.contains("beigeButton") ? "beżowe" : "białe";
});