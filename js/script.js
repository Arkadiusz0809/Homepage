{
    const welcome = () => {
        console.log("witam wszytskich developerów");
    }

    const toggleBackground = () => {
        const container = document.querySelector(".js-container");
        const themeName = document.querySelector(".js-themeName");

        container.classList.toggle("button__style");
        button.classList.toggle("beigeButton");
        themeName.innerText = button.classList.contains("beigeButton") ? "beżowe" : "białe";
    };

    const init = () => {
        const button = document.querySelector(".js-button");

        button.addEventListener("click", toggleBackground);

        welcome();
    };

    init();
}